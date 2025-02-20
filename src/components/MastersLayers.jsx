import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MastersLayer = () => {
    const [jobRoleName, setJobRoleName] = useState('');
    const [title, setTitle] = useState('Active');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    return (
        <div className="row gy-4">
            <div className="col-lg-12">
                <div className="card h-100">
                    <form>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row gy-3 mb-10">
                                        {/* Personal Information */}
                                        <div className="col-md-3">
                                            <label className="form-label">Job Role Name</label>
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
                                        {/* Notes */}
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
                                            className="col-md-2 btn btn-primary-600 text-sm btn-sm px-12 py-16  radius-8 m-2 mt-20"
                                        // onClick={resetPassword}
                                        >
                                            Submit
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </form>

                </div>
              
            </div>
            <div className="col-lg-12 mt-20">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table basic-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Comments</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>
                                                #526534

                                            </td>
                                            <td>Kathryn Murphy</td>
                                            <td>25 Jan 2024</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* card end */}
                </div>
        </div>
    );
};

export default MastersLayer;
