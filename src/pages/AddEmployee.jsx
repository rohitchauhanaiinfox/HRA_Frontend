import React, { useState } from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import MastersLayer from "../components/MastersLayers";
import CompanyLayer from "../components/CompanyLayer";
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';
import { apiGet, apiPost } from '../services/client';
import { toast, ToastContainer } from 'react-toastify';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

const AddEmployee = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const navigate = useNavigate();
    const status = ['Active', 'Inactive'];
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [preferredName, setpreferredName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [userStatus, setUserStatus] = useState('Active');
    const [reportingManager, setReportingManager] = useState(1);
    const [permission, setPermission] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [joiningDate, setJoiningDate] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [personalDetail, setPersonalDetail] = useState({
        ssn_number: "",
        home_phone: "",
        personal_number: "",
        emergency_contact: "",
    });
    const [addressDetail, setAddressDetail] = useState({
        current_street_address_1: "",
        current_street_address_2: "",
        current_country: "",
        current_state: "",
        current_city: "",
        current_zip_code: "",
        permanent_street_address_1: "",
        permanent_street_address_2: "",
        permanent_country: "",
        permanent_state: "",
        permanent_city: "",
        permanent_zip_code: "",
    });

    const [bankDetail, setBankDetail] = useState({
        account_number: "",
        bank_name: "",
        routing_code: "",
        branch_name: "",
    });
    const [visaDetail, setVisaDetail] = useState({
        passport_number: "",
        passport_country: "",
        visa_type: "",
        visa_start_date: "",
        visa_end_date: "",
        visa_country: "",
        visa_renewal_date: "",
        visa_status: "",
    });
    const [education, setEducation] = useState({
        education: "",
        board: "",
        from_year: "",
        to_year: "",
        percentage: "",
        school: "",
        edu_type: "",
    });

    const [experience, setExperience] = useState([
        {
            name: "",
            from_year: "",
            to_year: "",
            salary_mode: "",
            hourly_rate: "",
            skills: "",
        },
    ]);
    const [educationList, setEducationList] = useState([]);

    const [experienceList, setExperienceList] = useState([]);

    const handleAddEducation = () => {
        if (
            education.education &&
            education.board &&
            education.from_year &&
            education.to_year &&
            education.percentage &&
            education.school &&
            education.edu_type
        ) {
            setEducationList([...educationList, education]);
            setEducation({
                education: "",
                board: "",
                from_year: "",
                to_year: "",
                percentage: "",
                school: "",
                edu_type: "",
            });
        }
    };

    const handleDelete = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
    };


    const handleAddExperience = () => {
        console.log(experience)
        if (
            experience.name &&
            experience.from_year &&
            experience.to_year &&
            experience.salary_mode &&
            experience.hourly_rate &&
            experience.skills
        ) {
            setExperienceList([...experienceList, experience]);
            console.log('edfecae')
            setExperience({
                name: "",
                from_year: "",
                to_year: "",
                salary_mode: "",
                hourly_rate: "",
                skills: "",
            });
        }
        else {
            console.log("This is else part")
        }
    };

    const handleDeleteExp = (index) => {
        const updatedList = experienceList.filter((_, i) => i !== index);
        setExperienceList(updatedList);
    };

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };


    const addEmployeeData = async () => {
        setLoading(true);
        const data = {
            username: first_name + lastName,
            email,
            password,
            phone_number: phoneNumber,
            gender,
            job_role: jobRole,
            dob,
            reporting_manager: reportingManager,
            joining_date: joiningDate,
            personal_detail: personalDetail,
            bank_detail: bankDetail,
            address_detail: addressDetail,
            visa_detail: visaDetail,
            education: educationList,
            experience: experienceList,
        };

        try {
            console.log(data);
            const res = await apiPost('users/addEmp', data);
            if (res?.data?.status === true) {
                toast.success(res?.data?.message);
                navigate('/employee');

            }
        } catch (error) {
            console.log('Something went wrong', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <MasterLayout>
                <div className='col-md-12'>
                    <ToastContainer />
                    <div className='card'>
                        <div className='card-body'>
                            <div className='form-wizard'>

                                <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                                    <ul className='list-unstyled form-wizard-list style-two'>
                                        <li
                                            className={`form-wizard-list__item
                      ${[2, 3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                                        >
                                            <div className='form-wizard-list__line'>
                                                <span className='count'>1</span>
                                            </div>
                                            <span className='text text-xs fw-semibold'>
                                                Offical Details{" "}
                                            </span>
                                        </li>
                                        <li
                                            className={`form-wizard-list__item
                      ${[3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 2 && "active"} `}
                                        >
                                            <div className='form-wizard-list__line'>
                                                <span className='count'>2</span>
                                            </div>
                                            <span className='text text-xs fw-semibold'>
                                                Personal Details
                                            </span>
                                        </li>
                                        <li
                                            className={`form-wizard-list__item
                      ${[4].includes(currentStep) && "activated"}
                    ${currentStep === 3 && "active"} `}
                                        >
                                            <div className='form-wizard-list__line'>
                                                <span className='count'>3</span>
                                            </div>
                                            <span className='text text-xs fw-semibold'>Qualifications</span>
                                        </li>
                                        <li
                                            className={`form-wizard-list__item

                    ${currentStep === 4 && "active"} `}
                                        >
                                            <div className='form-wizard-list__line'>
                                                <span className='count'>4</span>
                                            </div>
                                            <span className='text text-xs fw-semibold'>Experience</span>
                                        </li>
                                    </ul>
                                </div>
                                <fieldset
                                    className={`wizard-fieldset ${currentStep === 1 && "show"} `}
                                >

                                    <div className='row gy-3'>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Username/Email*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Password*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='password'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Title*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='email'
                                                    className='form-control wizard-required'
                                                    required=''

                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>

                                        <div className='col-sm-3'>
                                            <label className='form-label'>First Name*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={first_name}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Last Name*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Phone Number*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Preferred Name</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={preferredName}
                                                    onChange={(e) => setpreferredName(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Gender*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={gender}
                                                    onChange={(e) => setGender(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <label className="form-label">Date of Birth*</label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    required=""
                                                    value={dob ? dob.toDateString() : ""}
                                                    onFocus={() => setShowCalendar(true)}

                                                />
                                                {showCalendar && (
                                                    <div className="calendar-container" style={{ position: "absolute", zIndex: 1000 }}>
                                                        <Calendar
                                                            onChange={(date) => {
                                                                setDob(date);
                                                                setShowCalendar(false);
                                                            }}
                                                            value={dob}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Reporting Manager*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={reportingManager}
                                                    onChange={(e) => setReportingManager(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Permission*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={permission}
                                                    onChange={(e) => setPermission(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Job Role*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={jobRole}
                                                    onChange={(e) => setJobRole(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <label className='form-label'>Joining Date*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={joiningDate}
                                                    onChange={(e) => setJoiningDate(e.target.value)}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <label className="form-label">Status*</label>
                                            <div className="position-relative">
                                                <button
                                                    className="form-control text-start d-flex justify-content-between align-items-center"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    style={{ height: "45px" }}
                                                >
                                                    {userStatus}
                                                </button>
                                                <ul className="dropdown-menu w-100">
                                                    {status?.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className="dropdown-item text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                            onClick={() => setUserStatus(item)}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='form-group text-end'>
                                            <button
                                                onClick={nextStep}
                                                type='button'
                                                className='form-wizard-next-btn btn btn-primary-600 px-32'
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset
                                    className={`wizard-fieldset ${currentStep === 2 && "show"} `}
                                >
                                    <h4 className='text-lg text-neutral-500'>
                                        Personal Details
                                    </h4>
                                    <div className='row gy-3'>
                                        <div className='col-3'>
                                            <label className='form-label'>SSN Number*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='number'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={personalDetail.ssn_number} onChange={(e) => setPersonalDetail({
                                                        ...personalDetail,
                                                        ssn_number: e.target.value
                                                    })}

                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Home Phone*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={personalDetail.home_phone} onChange={(e) => setPersonalDetail({
                                                        ...personalDetail,
                                                        home_phone: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Personal Number*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={personalDetail.personal_number} onChange={(e) => setPersonalDetail({
                                                        ...personalDetail,
                                                        personal_number: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Emergency Contact*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={personalDetail.emergency_contact} onChange={(e) => setPersonalDetail({
                                                        ...personalDetail,
                                                        emergency_contact: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='text-lg text-neutral-500 mt-20'>
                                        Current Address
                                    </h4>
                                    <div className="row gy-3">
                                        <div className='col-3'>
                                            <label className='form-label'>Street Address*</label>
                                            <div className='position-relative'>
                                                <input type='text' className='form-control wizard-required' required=''
                                                    value={addressDetail.current_street_address_1} onChange={(e) => setAddressDetail({
                                                        ...addressDetail,
                                                        current_street_address_1: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Street Address 2*</label>
                                            <div className='position-relative'>
                                                <input type='text' className='form-control wizard-required' required=''
                                                    value={addressDetail.current_street_address_2} onChange={(e) => setAddressDetail({
                                                        ...addressDetail,
                                                        current_street_address_2: e.target.value
                                                    })} />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Country*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={Country.getAllCountries().map(country => ({
                                                        value: country.isoCode,
                                                        label: country.name
                                                    }))}
                                                    onChange={(selectedOption) => {
                                                        setSelectedCountry(selectedOption);
                                                        setAddressDetail({
                                                            ...addressDetail,
                                                            current_country: selectedOption.label
                                                        });
                                                        setSelectedState(null);
                                                        setSelectedCity(null);
                                                    }}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>State*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={selectedCountry ? State.getStatesOfCountry(selectedCountry.value).map(state => ({
                                                        value: state.isoCode,
                                                        label: state.name
                                                    })) : []}
                                                    onChange={(selectedOption) => {
                                                        setSelectedState(selectedOption);
                                                        setAddressDetail({
                                                            ...addressDetail,
                                                            current_state: selectedOption.label
                                                        });
                                                        setSelectedCity(null);
                                                    }}
                                                    isDisabled={!selectedCountry}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>City*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={selectedState ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({
                                                        value: city.name,
                                                        label: city.name
                                                    })) : []}
                                                    onChange={(selectedOption) => {
                                                        setSelectedCity(selectedOption);
                                                        setAddressDetail({
                                                            ...addressDetail,
                                                            current_city: selectedOption.label
                                                        });
                                                    }}
                                                    isDisabled={!selectedState}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Zip Code*</label>
                                            <div className='position-relative'>
                                                <input type='text' className='form-control wizard-required' required=''
                                                    value={addressDetail.current_zip_code} onChange={(e) => setAddressDetail({
                                                        ...addressDetail,
                                                        current_zip_code: e.target.value
                                                    })} />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='text-lg text-neutral-500 mt-20'>
                                        Permanent Address
                                    </h4>
                                    <div className="row gy-3">
                                        <div className='col-3'>
                                            <label className='form-label'>Street Address*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={addressDetail.permanent_street_address_1} onChange={(e) => setAddressDetail({
                                                        ...addressDetail,
                                                        permanent_street_address_1: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Street Address 2*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={addressDetail.permanent_street_address_2} onChange={(e) => setAddressDetail({
                                                        ...addressDetail,
                                                        permanent_street_address_2: e.target.value
                                                    })}

                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Country*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={Country.getAllCountries().map(country => ({
                                                        value: country.isoCode,
                                                        label: country.name
                                                    }))}
                                                    onChange={(selectedOption) => {
                                                        setSelectedCountry(selectedOption);
                                                        setAddressDetail({
                                                            ...addressDetail,
                                                            permanent_country: selectedOption.label
                                                        });
                                                        setSelectedState(null);
                                                        setSelectedCity(null);
                                                    }}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>State*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={selectedCountry ? State.getStatesOfCountry(selectedCountry.value).map(state => ({
                                                        value: state.isoCode,
                                                        label: state.name
                                                    })) : []}
                                                    onChange={(selectedOption) => {
                                                        setSelectedState(selectedOption);
                                                        setAddressDetail({
                                                            ...addressDetail,
                                                            permanent_state: selectedOption.label
                                                        });
                                                        setSelectedCity(null);
                                                    }}
                                                    isDisabled={!selectedCountry}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>City*</label>
                                            <div className='position-relative border-color-primary-600'>
                                                <Select
                                                    options={selectedState ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({
                                                        value: city.name,
                                                        label: city.name
                                                    })) : []}
                                                    onChange={(selectedOption) => {
                                                        setSelectedCity(selectedOption);
                                                        setAddressDetail({
                                                            ...addressDetail,
                                                            permanent_city: selectedOption.label
                                                        });
                                                        setSelectedCity(null);
                                                    }}
                                                    isDisabled={!selectedState}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Zip Code*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={addressDetail.permanent_zip_code} onChange={(e) => setAddressDetail({
                                                        ...addressDetail,
                                                        permanent_zip_code: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='text-lg text-neutral-500 mt-20'>
                                        Bank Details
                                    </h4>
                                    <div className="row gy-3">
                                        <div className='col-3'>
                                            <label className='form-label'>Bank Name*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={bankDetail.bank_name} onChange={(e) => setBankDetail({
                                                        ...bankDetail,
                                                        bank_name: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Bank Account No*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='number'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={bankDetail.account_number} onChange={(e) => setBankDetail({
                                                        ...bankDetail,
                                                        account_number: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Re-Enter Account No*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Bank Routing Number*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={bankDetail.routing_code} onChange={(e) => setBankDetail({
                                                        ...bankDetail,
                                                        routing_code: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Re-Enter Bank Routing Number*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Location*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={bankDetail.branch_name} onChange={(e) => setBankDetail({
                                                        ...bankDetail,
                                                        branch_name: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='text-lg text-neutral-500 mt-20'>
                                        Visa Details
                                    </h4>
                                    <div className="row gy-3">
                                        <div className='col-3'>
                                            <label className='form-label'>Passport Number*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={visaDetail.passport_number} onChange={(e) => setVisaDetail({
                                                        ...visaDetail,
                                                        passport_number: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Passport Country*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={Country.getAllCountries().map(country => ({
                                                        value: country.isoCode,
                                                        label: country.name
                                                    }))}
                                                    onChange={(selectedOption) => {
                                                        setSelectedCountry(selectedOption);
                                                        setVisaDetail({
                                                            ...visaDetail,
                                                            passport_country: selectedOption.label
                                                        });
                                                        setSelectedState(null);
                                                        setSelectedCity(null);
                                                    }}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Visa Type*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={visaDetail.visa_type} onChange={(e) => setVisaDetail({
                                                        ...visaDetail,
                                                        visa_type: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Visa Start Date*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={visaDetail.visa_start_date} onChange={(e) => setVisaDetail({
                                                        ...visaDetail,
                                                        visa_start_date: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Visa End Date*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={visaDetail.visa_end_date} onChange={(e) => setVisaDetail({
                                                        ...visaDetail,
                                                        visa_end_date: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Visa Country*</label>
                                            <div className='position-relative'>
                                                <Select
                                                    options={Country.getAllCountries().map(country => ({
                                                        value: country.isoCode,
                                                        label: country.name
                                                    }))}
                                                    onChange={(selectedOption) => {
                                                        setSelectedCountry(selectedOption);
                                                        setVisaDetail({
                                                            ...visaDetail,
                                                            visa_country: selectedOption.label
                                                        });
                                                        setSelectedState(null);
                                                        setSelectedCity(null);
                                                    }}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Visa Renewal Date*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={visaDetail.visa_renewal_date} onChange={(e) => setVisaDetail({
                                                        ...visaDetail,
                                                        visa_renewal_date: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <label className='form-label'>Visa Status*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={visaDetail.visa_status} onChange={(e) => setVisaDetail({
                                                        ...visaDetail,
                                                        visa_status: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-10'>
                                        <button
                                            onClick={prevStep}
                                            type='button'
                                            className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={nextStep}
                                            type='button'
                                            className='form-wizard-next-btn btn btn-primary-600 px-32'
                                        >
                                            Next
                                        </button>
                                    </div>
                                </fieldset>
                                <fieldset
                                    className={`wizard-fieldset ${currentStep === 3 && "show"} `}
                                >
                                    <h6 className='text-md text-neutral-500'>Education</h6>
                                    <div className='row gy-3'>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>Education*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={education.education} onChange={(e) => setEducation({
                                                        ...education,
                                                        education: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>Board/University*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    value={education.board} onChange={(e) => setEducation({
                                                        ...education,
                                                        board: e.target.value
                                                    })}
                                                    required=''
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>From Month-Year*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={education.from_year} onChange={(e) => setEducation({
                                                        ...education,
                                                        from_year: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>To Month-Year*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={education.to_year} onChange={(e) => setEducation({
                                                        ...education,
                                                        to_year: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>Percentage*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={education.percentage} onChange={(e) => setEducation({
                                                        ...education,
                                                        percentage: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>School/school*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={education.school} onChange={(e) => setEducation({
                                                        ...education,
                                                        school: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className="row gy-2">
                                            <div className='col-sm-4'>
                                                <label className='form-label'>Education Type*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
                                                        value={education.edu_type} onChange={(e) => setEducation({
                                                            ...education,
                                                            edu_type: e.target.value
                                                        })}
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <button
                                                type='button'
                                                className='col-sm-1 btn btn-sm btn-primary-600 mt-40'
                                                style={{ height: "45px" }}
                                                onClick={handleAddEducation}
                                            >
                                                Add
                                            </button>
                                            <div className="col-lg-12">
                                                <div className="table-responsive">
                                                    <table className="table bordered-table mb-0 mt-40 mr-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Education Name</th>
                                                                <th scope="col">Board University</th>
                                                                <th scope="col">From Month Year</th>
                                                                <th scope="col">To Month Year</th>
                                                                <th scope="col">Percentage</th>
                                                                <th scope="col">School/school</th>
                                                                <th scope="col">Education Type</th>
                                                                <th scope="col" className="text-center">
                                                                    Action
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {educationList.map((edu, index) => (
                                                                <tr key={index}>
                                                                    <td>{edu.education}</td>
                                                                    <td>{edu.board}</td>
                                                                    <td>{edu.from_year}</td>
                                                                    <td>{edu.to_year}</td>
                                                                    <td>{edu.percentage}%</td>
                                                                    <td>{edu.school}</td>
                                                                    <td>{edu.edu_type}</td>
                                                                    <td className="text-center">
                                                                        <Icon icon="mingcute:pencil-line" className="menu-icon cursor-pointer" style={{ fontSize: "1.5rem" }} />
                                                                        <Icon icon="mingcute:delete-line" className="menu-icon cursor-pointer text-danger ms-2" style={{ fontSize: "1.5rem" }} onClick={() => handleDelete(index)} />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                                            <button
                                                onClick={prevStep}
                                                type='button'
                                                className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={nextStep}
                                                type='button'
                                                className='form-wizard-next-btn btn btn-primary-600 px-32'
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset
                                    className={`wizard-fieldset ${currentStep === 4 && "show"} `}
                                >
                                    <h6 className='text-md text-neutral-500'>Experience</h6>
                                    <div className='row gy-3'>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>Customer Name*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={experience.name} onChange={(e) => setExperience({
                                                        ...experience,
                                                        name: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>

                                        <div className='col-sm-4'>
                                            <label className='form-label'>From Month-Year*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={experience.from_year} onChange={(e) => setExperience({
                                                        ...experience,
                                                        from_year: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>To Month-Year*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={experience.to_year} onChange={(e) => setExperience({
                                                        ...experience,
                                                        to_year: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>Salary Mode*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={experience.salary_mode} onChange={(e) => setExperience({
                                                        ...experience,
                                                        salary_mode: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <label className='form-label'>Hourly Rate*</label>
                                            <div className='position-relative'>
                                                <input
                                                    type='text'
                                                    className='form-control wizard-required'
                                                    required=''
                                                    value={experience.hourly_rate} onChange={(e) => setExperience({
                                                        ...experience,
                                                        hourly_rate: e.target.value
                                                    })}
                                                />
                                                <div className='wizard-form-error' />
                                            </div>
                                        </div>
                                        <div className="row gy-2">
                                            <div className='col-sm-4'>
                                                <label className='form-label'>Skills*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
                                                        value={experience.skills} onChange={(e) => setExperience({
                                                            ...experience,
                                                            skills: e.target.value
                                                        })}
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <button
                                                type='button'
                                                className='col-sm-1 btn btn-sm btn-primary-600 mt-40'
                                                style={{ height: "45px" }}
                                                onClick={handleAddExperience}
                                            >
                                                Add
                                            </button>
                                            <div className="col-lg-12">
                                                <div className="table-responsive">
                                                    <table className="table bordered-table mb-0 mt-40 mr-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Customer Name</th>
                                                                <th scope="col">From Month Year</th>
                                                                <th scope="col">To Month Year</th>
                                                                <th scope="col">Skill Name</th>
                                                                <th scope="col">Hourly Rate</th>
                                                                <th scope="col">Salary Mode</th>
                                                                <th scope="col" className="text-center">
                                                                    Action
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {experienceList.map((edu, index) => (
                                                                <tr key={index}>
                                                                    <td>{edu.name}</td>
                                                                    <td>{edu.from_year}</td>
                                                                    <td>{edu.to_year}</td>
                                                                    <td>{edu.skills}</td>
                                                                    <td>{edu.hourly_rate}</td>
                                                                    <td>{edu.salary_mode}</td>
                                                                    <td className="text-center">
                                                                        <Icon icon="mingcute:pencil-line" className="menu-icon cursor-pointer" style={{ fontSize: "1.5rem" }} />
                                                                        <Icon icon="mingcute:delete-line" className="menu-icon cursor-pointer text-danger ms-2" style={{ fontSize: "1.5rem" }} onClick={() => handleDeleteExp(index)} />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-20'>
                                        <button
                                            onClick={prevStep}
                                            type='button'
                                            className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                        >
                                            Back
                                        </button>
                                        {loading ? (
                                            <button
                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                            >
                                                Loading...
                                            </button>
                                        ) : (
                                            <button
                                                type='button'
                                                className='form-wizard-submit btn btn-primary-600 px-32'
                                                onClick={addEmployeeData}
                                            >
                                                Submit
                                            </button>
                                        )}

                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout >
        </>
    );
};

export default AddEmployee;
