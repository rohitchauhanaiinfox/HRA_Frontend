import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiseLoader } from "react-spinners";
import { apiGet, apiPost } from "../services/client";
import { toast, ToastContainer } from 'react-toastify';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Modal } from 'bootstrap';

const RoleLayer = () => {
    const [data, setData] = useState({
        columns: {
            chosen: {
                id: 'chosen',
                title: 'Chosen Permission',
                cardIds: [],
            },
            available: {
                id: 'available',
                title: 'Available Permission',
                cardIds: [],
            },
        },
        cards: {},
        columnOrder: ['chosen', 'available'],
    });
    const [jobRoleName, setJobRoleName] = useState('');
    const [title, setTitle] = useState('Active');
    const [notes, setNotes] = useState('');
    const [allPermission, setAllPermission] = useState([]);
    const [allRoles, setAllRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState({
        jobRoleName: "",
        title: "",
        notes: ""
    });
    const [checkRoles, setCheckRole] = useState("admin");
    const [getRolesById, setRolesById] = useState(2);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [allowedPermission, setAllowedPermissions] = useState([]);


    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceCol = data.columns[source.droppableId];
        const destCol = data.columns[destination.droppableId];

        if (sourceCol === destCol) {
            const newCardIds = Array.from(sourceCol.cardIds);
            newCardIds.splice(source.index, 1);
            newCardIds.splice(destination.index, 0, result.draggableId);

            const newColumn = { ...sourceCol, cardIds: newCardIds };
            setData({
                ...data,
                columns: { ...data.columns, [newColumn.id]: newColumn },
            });
        } else {
            const sourceCardIds = Array.from(sourceCol.cardIds);
            sourceCardIds.splice(source.index, 1);
            const destCardIds = Array.from(destCol.cardIds);
            destCardIds.splice(destination.index, 0, result.draggableId);

            setData({
                ...data,
                columns: {
                    ...data.columns,
                    [sourceCol.id]: { ...sourceCol, cardIds: sourceCardIds },
                    [destCol.id]: { ...destCol, cardIds: destCardIds },
                },
            });
        }
    };

    const getAllPermission = async () => {
        setLoading(true);
        try {
            const res = await apiGet('users/allpermissions');
            const allowedPermission = res?.data?.data || [];

            const newCards = {};
            const cardIds = [];
            allowedPermission.forEach(permission => {
                newCards[permission.id] = { id: permission.id.toString(), content: permission.name };
                cardIds.push(permission.id.toString());
            });

            setAllowedPermissions(prevData => ({
                ...prevData,
                cards: newCards,
                columns: {
                    ...prevData.columns,
                    available: { ...prevData.columns.available, cardIds }
                }
            }));
        } catch (error) {
            console.error("Error fetching permissions:", error);
        }
        setLoading(false);
    };

    const getAllPermissionByRole = async () => {
        setLoading(true);
        try {
            const res = await apiGet('users/api/roles/1/get_permissions');
            const permissions = res?.data?.data || [];

            const newCards = {};
            const cardIds = [];
            permissions.forEach(permission => {
                newCards[permission.id] = { id: permission.id.toString(), content: permission.name };
                cardIds.push(permission.id.toString());
            });

            setData(prevData => ({
                ...prevData,
                cards: newCards,
                columns: {
                    ...prevData.columns,
                    available: { ...prevData.columns.available, cardIds }
                }
            }));
        } catch (error) {
            console.error("Error fetching permissions:", error);
        }
        setLoading(false);
    };

    const getAllRoles = async () => {
        setLoading(true);
        try {
            const res = await apiGet('users/api/roles');
            console.log(res);

            if (res.data.status === true) {
                const roles = res?.data?.data;
                setAllRoles(roles);
                const adminRole = roles.find(role => role.name.toLowerCase() === "admin");
                if (adminRole) {
                    fetchPermissions(adminRole.id);
                }
            }
            setLoading(false);


        } catch (error) {
            console.error("Error fetching roles:", error);
            setLoading(false);
        }
    };


    const getPermission = async (content_type) => {
        setLoading(true);
        try {
            const res = await apiGet(`users/api/permissions/${content_type}/content_type`);
            console.log(res);
            setSelectedPermissions(res?.data.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);

        } catch (error) {
            console.error("Error fetching customers:", error);
            setLoading(false);
        }
    };

    const addRole = async () => {
        setButtonLoading(true);
        try {
            const data = {
                name: jobRoleName,
                comment: notes,
                status: title === 'Active' ? 1 : 0
            };
            const res = await apiPost('users/api/roles/add', data);
            if (res?.data?.status == true) {
                toast.success(res?.data?.message);
                await getAllRoles();
                setJobRoleName('');
                setTitle('Active');
                setNotes('');
                setButtonLoading(false);
            } else {
                toast.error(res?.message);
                setButtonLoading(false);
            }

        } catch (error) {
            toast.error(error?.response?.data?.error);
            console.error("Error fetching customers:", error);
            setButtonLoading(false);
        }
    };

    const updateRole = async (id, modalId) => {
        setButtonLoading(true);
        try {
            const data = {
                name: selectedRole.jobRoleName,
                comment: selectedRole.notes,
                status: selectedRole.title === 'Active' ? "1" : "0"
            };
            const res = await apiPost(`users/api/roles/${id}/edit`, data);
            if (res?.data?.status == true) {
                toast.success(res?.data?.message);
                const modalElement = document.getElementById(modalId);
                if (modalElement) {
                    const modalInstance = Modal.getInstance(modalElement);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                }
                setTimeout(() => {
                    document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
                    document.body.classList.remove('modal-open');
                    document.body.style.overflow = "";
                }, 300);
                await getAllRoles();
                setButtonLoading(false);
            } else {
                toast.error(res?.message);
                setButtonLoading(false);
            }

        } catch (error) {
            toast.error(error?.response?.data?.error);
            console.error("Error fetching customers:", error);
            setButtonLoading(false);
        }
    };
    const fetchPermissions = async (id) => {
        setLoading(true);
        try {
            const allPermissionsRes = await apiGet('users/allpermissions');
            const chosenPermissionsRes = await apiGet(`users/api/roles/${id}/get_permissions`);

            const allPermissions = allPermissionsRes?.data?.data || [];
            const chosenPermissions = new Set((chosenPermissionsRes?.data?.data || []).map(p => p.id.toString()));

            const newCards = {};
            const availableCardIds = [];
            const chosenCardIds = [];

            allPermissions.forEach(permission => {
                const cardId = permission.id.toString();
                newCards[cardId] = { id: cardId, content: permission.name };

                if (chosenPermissions.has(cardId)) {
                    chosenCardIds.push(cardId);
                } else {
                    availableCardIds.push(cardId);
                }
            });

            setData({
                columns: {
                    chosen: { ...data.columns.chosen, cardIds: chosenCardIds },
                    available: { ...data.columns.available, cardIds: availableCardIds },
                },
                cards: newCards,
                columnOrder: ['chosen', 'available'],
            });
        } catch (error) {
            console.error("Error fetching permissions:", error);
        }
        setLoading(false);
    };

    const getRolesByType = async (name, id) => {
        setCheckRole(name);
        setRolesById(id)
        await fetchPermissions(id);
    };


    const updatePermissions = async () => {
        setButtonLoading(true);
        try {
            const chosenPermissions = data.columns.chosen.cardIds.map(id => parseInt(id));
            const requestData = {
                permissions: chosenPermissions
            };

            const res = await apiPost(`users/api/roles/${getRolesById}/assign_permissions`, requestData);
            if (res?.data?.status == true) {
                toast.success(res?.data?.message);
                await fetchPermissions(getRolesById);
            } else {
                toast.error(res?.message);
            }
        } catch (error) {
            toast.error(error?.response?.data?.error);
            console.error("Error updating permissions:", error);
        }
        setButtonLoading(false);
    };


    useEffect(() => {
        getAllRoles();

    }, []);

    return (
        <div className="col-xxl-12">
            <ToastContainer />
            <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
                <div className="card-body p-24 pt-10">
                    <ul
                        className="nav focus-tab nav-pills mb-16"
                        id="pills-tab-two"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10 active"
                                id="pills-focus-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-focus-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-focus-home"
                                aria-selected="true"
                            >
                                Add Role
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link fw-semibold text-primary-light radius-4 px-16 py-10  "
                                id="pills-focus-details-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-focus-details"
                                type="button"
                                role="tab"
                                aria-controls="pills-focus-details"
                                aria-selected="false"
                            >
                                Add Role Permission
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tab-twoContent">
                        <div
                            className="tab-pane fade show active"
                            id="pills-focus-home"
                            role="tabpanel"
                            aria-labelledby="pills-focus-home-tab"
                            tabIndex={0}
                        >
                            <div className="row gy-4 mt-10 height-100vh">

                                <div className="col-lg-12">
                                    <form>
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row gy-3 mb-10">
                                                        <div className="col-md-3">
                                                            <label className="form-label">Role</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder=""
                                                                value={jobRoleName}
                                                                onChange={(e) => setJobRoleName(e.target.value)}
                                                            />

                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Status</label>
                                                            <select
                                                                className="form-control"
                                                                value={title}
                                                                onChange={(e) => setTitle(e.target.value)}
                                                            >
                                                                <option value="Active">Active</option>
                                                                <option value="Inactive">Inactive</option>
                                                            </select>
                                                        </div>
                                                        <div className="row mt-40">
                                                            <div className="col-12">
                                                                <label className="form-label">Comment</label>
                                                                <textarea
                                                                    className="form-control"
                                                                    rows="3"
                                                                    placeholder=""
                                                                    value={notes}
                                                                    onChange={(e) => setNotes(e.target.value)}
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary-600 text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                                                            disabled={buttonLoading}
                                                            onClick={addRole}
                                                        >
                                                            {buttonLoading ? "Loading..." : "Save Changes"}
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </form>

                                </div>

                                <div className="col-lg-12 mt-20">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table basic-table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Comment</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allRoles.length > 0 ? (
                                                            allRoles.map((role, index) => (
                                                                <tr key={index}>
                                                                    <td>{role.name}</td>
                                                                    <td>{role.comment}</td>
                                                                    <td >
                                                                        <span className={`bg-${role?.status === '1' ? 'success-focus' : 'danger-focus'} text-${role?.status === '1' ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                                                            {role.status == "1" ? "Active" : "Inactive"}
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="btn btn-primary-600 btn-sm"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target={`#addCustomer${index}`}
                                                                            onClick={() => setSelectedRole({
                                                                                jobRoleName: role.name,
                                                                                title: role.status == "1" ? "Active" : "Inactive",
                                                                                notes: role.comment
                                                                            })}
                                                                        >
                                                                            Edit
                                                                        </button>

                                                                        <div className="modal fade" id={`addCustomer${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                                                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                                                                <div className="modal-content">
                                                                                    <div className="modal-header">
                                                                                        <h1 className="modal-title fs-5">Edit Role</h1>
                                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <form>
                                                                                            <div className="col-md-12">
                                                                                                <div className="card">
                                                                                                    <div className="card-body">
                                                                                                        <div className="row gy-3 mb-50">
                                                                                                            <div className="col-lg-12">
                                                                                                                <form>
                                                                                                                    <div className="col-md-12">

                                                                                                                        <div className="row gy-3 mb-10">
                                                                                                                            <div className="col-md-3">
                                                                                                                                <label className="form-label">Role</label>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    className="form-control"
                                                                                                                                    placeholder=""
                                                                                                                                    value={selectedRole.jobRoleName}
                                                                                                                                    onChange={(e) => setSelectedRole({ ...selectedRole, jobRoleName: e.target.value })}
                                                                                                                                />

                                                                                                                            </div>
                                                                                                                            <div className="col-md-3">
                                                                                                                                <label className="form-label">Status</label>
                                                                                                                                <select
                                                                                                                                    className="form-control"
                                                                                                                                    value={selectedRole.title}
                                                                                                                                    onChange={(e) => setSelectedRole({ ...selectedRole, title: e.target.value })}
                                                                                                                                >
                                                                                                                                    <option value="Active">Active</option>
                                                                                                                                    <option value="Inactive">Inactive</option>
                                                                                                                                </select>
                                                                                                                            </div>
                                                                                                                            <div className="row mt-40">
                                                                                                                                <div className="col-12">
                                                                                                                                    <label className="form-label">Comment</label>
                                                                                                                                    <textarea
                                                                                                                                        className="form-control"
                                                                                                                                        rows="3"
                                                                                                                                        placeholder=""
                                                                                                                                        value={selectedRole.notes}
                                                                                                                                        onChange={(e) => setSelectedRole({ ...selectedRole, notes: e.target.value })}
                                                                                                                                    ></textarea>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                    </div>


                                                                                                                </form>

                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    <div className="modal-footer">
                                                                                        <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8" data-bs-dismiss="modal">Cancel</button>
                                                                                        <button className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                                                            disabled={buttonLoading}
                                                                                            onClick={() => updateRole(role?.id, `addCustomer${index}`)}
                                                                                        >
                                                                                            Submit
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="4" className="text-center">No roles available</td>
                                                            </tr>
                                                        )}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card end */}
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-focus-details"
                            role="tabpanel"
                            aria-labelledby="pills-focus-details-tab"
                            tabIndex={0}
                        >
                            <div className="div row gy-4 mt-10">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-primary-600 not-active px-18 py-11 dropdown-toggle toggle-icon"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {checkRoles}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {allRoles
                                            ?.filter(role => role.status === "1")
                                            .map((role, index) => (
                                                <li
                                                    key={index}
                                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                                    onClick={() => getRolesByType(role.name, role.id)}
                                                >
                                                    {role.name}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <div className="d-flex gap-4 p-4">
                                        {data.columnOrder.map(columnId => {
                                            const column = data.columns[columnId];
                                            const cards = column.cardIds.map(cardId => data.cards[cardId]);
                                            return (
                                                <Droppable key={columnId} droppableId={columnId}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.droppableProps}
                                                            className="col  p-10 rounded border "
                                                            style={{ height: "60vh", overflowY: "auto" }}
                                                        >
                                                            <h6 className="text-primary-600 text-center pt-2 pb-2">{column.title}</h6>
                                                            <div className="mt-3 d-flex flex-wrap gap-2">
                                                                {cards.map((card, index) => (
                                                                    <Draggable key={card.id} draggableId={card.id} index={index}>
                                                                        {(provided) => (
                                                                            <div
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                className="bg-white p-10 my-2 rounded border border-primary-600"
                                                                            >
                                                                                {card.content}
                                                                            </div>
                                                                        )}
                                                                    </Draggable>
                                                                ))}
                                                                {provided.placeholder}
                                                            </div>
                                                        </div>
                                                    )}
                                                </Droppable>

                                            );
                                        })}
                                    </div>
                                </DragDropContext>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary-600 text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                                disabled={buttonLoading}
                                onClick={updatePermissions}
                            >
                                {buttonLoading ? "Loading..." : "Save Changes"}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default RoleLayer;


