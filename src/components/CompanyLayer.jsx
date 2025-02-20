import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyLayer = () => {
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
                                            <label className="form-label">Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Legal Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Contact Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Company Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>



                                    </div>
                                    <div className="row gy-3 mb-10">
                                        {/* Personal Information */}
                                        <div className="col-md-3">
                                            <label className="form-label">Zip Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">State/Province</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>



                                    </div>
                                    <div className="row gy-3 mb-10">
                                        {/* Personal Information */}
                                        <div className="col-md-3">
                                            <label className="form-label">Company Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Company Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Compnay Phone 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Mobile</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>



                                    </div>
                                    <div className="row gy-3 mb-10">
                                        {/* Personal Information */}
                                        <div className="col-md-3">
                                            <label className="form-label">Fax</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Website</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Company Registration</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Company Vat</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                value={jobRoleName}
                                                onChange={(e) => setJobRoleName(e.target.value)}
                                            />

                                        </div>



                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">TimeZone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            value={jobRoleName}
                                            onChange={(e) => setJobRoleName(e.target.value)}
                                        />

                                    </div>
                                    <button
                                        className="col-md-2 btn btn-primary-600 text-sm btn-sm px-12 py-16  radius-8 m-1 mt-20"
                                    // onClick={resetPassword}
                                    >
                                        Save Changes
                                    </button>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default CompanyLayer;


