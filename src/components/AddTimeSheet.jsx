import React, { useState, useRef, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import MasterLayout from "../masterLayout/MasterLayout";
import { toast, ToastContainer } from "react-toastify";
import { apiPost, apiGet } from '../services/client';
import { useNavigate } from "react-router-dom";
import { RiseLoader } from 'react-spinners';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function AddTimeSheet() {
    const [eventsData, setEventsData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [regularHours, setRegularHours] = useState("");
    const [overtimeHours, setOvertimeHours] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const fileInputRef = useRef(null);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [image, setImage] = useState("");
    const [timeSheet, setTimeSheet] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const fileSizeKB = file.size / 1024;

            if (fileSizeKB > 500) {
                toast.error("File size exceeds 500 KB. Please upload a smaller file.");
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const base64String = reader.result;
                setImage(base64String);
                console.log("Base64 Encoded Image:", base64String);

            };

            reader.onerror = (error) => {
                toast.error("Error converting file to Base64");
                console.error("Base64 conversion error:", error);
            };
        }
    };

    const handleSelect = ({ start, end }) => {
        setSelectedSlot({ start, end });
        setRegularHours("");
        setOvertimeHours("");
        setTaskDetails("");
        setModalOpen(true);
        setSelectedEvent(null);
    };

    const handleSave = () => {
        if (!taskDetails.trim()) {
            alert("Task details are required!");
            return;
        }

        setEventData([...eventData, {
            start: selectedSlot.start,
            end: selectedSlot.end,
            title: `${taskDetails}`,
            regularHours,
            overtimeHours,
            taskDetails
        }]);

        setModalOpen(false);
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    const eventStyleGetter = () => {
        return {
            style: {
                backgroundColor: "#05606c",
                color: "#fff",
                padding: "5px",
                borderRadius: "5px",
            }
        };
    };

    const addTimesheet = async () => {
        setButtonLoading(true);
        if (!image) {
            toast.error("Please upload an image before submitting the timesheet.");
            setButtonLoading(false);
            return;
        }
        try {
            const currentMonth = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

            let totalRegularHours = 0;
            let totalOvertimeHours = 0;

            const timesheetDetails = eventData.map(event => {
                totalRegularHours += Number(event.regularHours) || 0;
                totalOvertimeHours += Number(event.overtimeHours) || 0;

                return {
                    date: event.start,
                    regular_hours: event.regularHours,
                    overtime: event.overtimeHours,
                    description: event.taskDetails
                };
            });

            const hourlyRate = 50.00;
            const totalSalary = (totalRegularHours + totalOvertimeHours) * hourlyRate;

            const data = {
                purchase_order_id: 1,
                week_month: currentMonth,
                salary_mode: "Hourly",
                hours: totalRegularHours,
                overtime_hours: totalOvertimeHours,
                hourly_rate: hourlyRate,
                total_salary: totalSalary,
                image: image,
                timesheet_detail: timesheetDetails
            };

            console.log("Final Payload:", data);

            const res = await apiPost("timesheets/add", data);
            if (res?.data?.status === true) {
                toast.success(res?.data?.message);
                getTimeSheet();
            } else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            console.error("Error submitting timesheet:", error);
        } finally {
            setButtonLoading(false);
        }
    };


    const getTimeSheet = async () => {
        setLoading(true);
        try {
            const res = await apiGet("timesheets/get");
            console.log(res.data.data);

            if (res.data.status === true) {
                setTimeSheet(res?.data?.data);

                const timesheetArray = res?.data?.data ?? [];

                const newEvents = timesheetArray.flatMap(item =>
                    item?.timesheet_detail?.map(detail => ({
                        start: new Date(detail.date),
                        end: new Date(detail.date),
                        title: detail.description,
                        regularHours: detail.regular_hours,
                        overtimeHours: detail.overtime,
                        taskDetails: detail.description
                    })) ?? []
                );

                console.log(newEvents);
                setEventsData([...newEvents]);
            }
        } catch (error) {
            console.error("Error fetching timesheets:", error);
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        getTimeSheet();
    }, []);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <RiseLoader color="#077f91" size={30} />
                </div>
            ) : (
                <>
                    <MasterLayout>
                        <div className='card'>
                            <div className='card-body'>
                                <ToastContainer />
                                <div className="d-flex align-items-center justify-content-between mb-20">
                                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Add TimeSheet</h3>
                                    <button type="button" className="btn btn-primary-600" onClick={handleButtonClick}>
                                        Upload Timesheet
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: "none" }}
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="container mt-4">
                                    <Calendar
                                        views={["work_week", "month"]}
                                        selectable
                                        localizer={localizer}
                                        defaultDate={new Date()}
                                        defaultView="month"
                                        events={eventsData}
                                        style={{ height: "80vh" }}
                                        popup={true}
                                        onSelectSlot={handleSelect}
                                        eventPropGetter={eventStyleGetter}
                                        onSelectEvent={handleEventClick}
                                    />

                                    {modalOpen && (

                                        <div className="modal show d-block" tabIndex="-1">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title fs-5">{selectedEvent ? "TimeSheet Details" : "Add Time"}</h5>
                                                        <button type="button" className="btn-close" onClick={() => setModalOpen(false)}></button>
                                                    </div>
                                                    <div className="modal-body ">
                                                        {selectedEvent ? (
                                                            <div>
                                                                <p><strong> Task:</strong> {selectedEvent.taskDetails}</p>
                                                                <p><strong> Regular Hours:</strong> {selectedEvent.regularHours} hrs</p>
                                                                <p><strong> Overtime Hours:</strong> {selectedEvent.overtimeHours} hrs</p>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <div className="col-md-12 mt-3 ">
                                                                    <label className="form-label  text-start d-block">Regular Hours</label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control form-left"
                                                                        value={regularHours}
                                                                        onChange={(e) => setRegularHours(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-12 mt-3 ">
                                                                    <label className="form-label  text-start d-block">Overtime Hours</label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control form-left"
                                                                        value={overtimeHours}
                                                                        onChange={(e) => setOvertimeHours(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-12 mt-3 ">
                                                                    <label className="form-label  text-start d-block">Task Details</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-left"
                                                                        value={taskDetails}
                                                                        onChange={(e) => setTaskDetails(e.target.value)}
                                                                    />
                                                                </div>
                                                                {/* <input type="number" className="form-control mb-4" placeholder="Regular Hours" value={regularHours} onChange={(e) => setRegularHours(e.target.value)} />
                                                        <input type="number" className="form-control mb-4" placeholder="Overtime Hours" value={overtimeHours} onChange={(e) => setOvertimeHours(e.target.value)} />
                                                        <textarea className="form-control" placeholder="Task Details" value={taskDetails} onChange={(e) => setTaskDetails(e.target.value)} /> */}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8 mt-10" onClick={() => setModalOpen(false)}>Close</button>
                                                        {!selectedEvent && (
                                                            <button type="button" className="btn btn-primary-600 text-md px-56 py-11 radius-8 mt-10" onClick={handleSave}>Save </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {modalOpen && <div className="modal-backdrop show" onClick={() => setModalOpen(false)}></div>}
                                </div>
                                <div className="col-lg-12 d-flex justify-content-end btn-top gap-3">
                                    <button
                                        type="button"
                                        className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8 mt-10"
                                        onClick={() => navigate(-1)}
                                    >
                                        Cancel
                                    </button>

                                    {buttonLoading ? (
                                        <button className="btn btn-primary-600 text-md px-56 py-11 radius-8 mt-10">
                                            Loading...
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary-600 text-md px-56 py-11 radius-8 mt-10"
                                            onClick={() => addTimesheet()}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                    </MasterLayout>
                </>
            )}
        </>


    );
}
