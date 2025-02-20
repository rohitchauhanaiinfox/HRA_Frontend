import React, { useState } from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import MastersLayer from "../components/MastersLayers";
import CompanyLayer from "../components/CompanyLayer";

const AddEmployee = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [education, setEducation] = useState({
        education_name: "",
        board: "",
        from_year: "",
        to_year: "",
        percentage: "",
        college: "",
        education_type: "",
    });
    const [educationList, setEducationList] = useState([]);

    const handleAddEducation = () => {
        if (
            education.education_name &&
            education.board &&
            education.from_year &&
            education.to_year &&
            education.percentage &&
            education.college &&
            education.education_type
        ) {
            setEducationList([...educationList, education]);
            setEducation({
                education_name: "",
                board: "",
                from_year: "",
                to_year: "",
                percentage: "",
                college: "",
                education_type: "",
            });
        }
    };

    const handleDelete = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
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
    return (
        <>
            <MasterLayout>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            {/* Form Wizard Start */}
                            <div className='form-wizard'>
                                <form action='#' method='post'>
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
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Last Name*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Phone Number*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Preferred Name*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Gender*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Date of Birth*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Reporting Manager*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Permission*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Job Role*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Joining Date*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        // placeholder='Enter Confirm Password'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <label className='form-label'>Status*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='password'
                                                        className='form-control wizard-required'
                                                        // placeholder='Enter Confirm Password'
                                                        required=''
                                                    />
                                                    <div className='wizard-form-error' />
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
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
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
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
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
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <label className='form-label'>Country*</label>
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
                                                <label className='form-label'>State*</label>
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
                                                <label className='form-label'>City*</label>
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
                                                <label className='form-label'>Zip Code*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
                                                    />
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
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <label className='form-label'>Country*</label>
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
                                                <label className='form-label'>State*</label>
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
                                                <label className='form-label'>City*</label>
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
                                                <label className='form-label'>Zip Code*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
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
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <label className='form-label'>Bank Account No*</label>
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
                                                    />
                                                    <div className='wizard-form-error' />
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <label className='form-label'>Passport Country*</label>
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
                                                <label className='form-label'>Visa Type*</label>
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
                                                <label className='form-label'>Visa Start Date*</label>
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
                                                <label className='form-label'>Visa End Date*</label>
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
                                                <label className='form-label'>Visa Country*</label>
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
                                                <label className='form-label'>Visa Renewal Date*</label>
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
                                                <label className='form-label'>Visa Status*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
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
                                                        value={education.education_name} onChange={(e) => setEducation({
                                                            ...education,
                                                            education_name: e.target.value
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
                                                <label className='form-label'>School/College*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
                                                        value={education.college} onChange={(e) => setEducation({
                                                            ...education,
                                                            college: e.target.value
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
                                                            value={education.education_type} onChange={(e) => setEducation({
                                                                ...education,
                                                                education_type: e.target.value
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
                                                                    <th scope="col">School/College</th>
                                                                    <th scope="col">Education Type</th>
                                                                    <th scope="col" className="text-center">
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {educationList.map((edu, index) => (
                                                                    <tr key={index}>
                                                                        <td>{edu.education_name}</td>
                                                                        <td>{edu.board}</td>
                                                                        <td>{edu.from_year}</td>
                                                                        <td>{edu.to_year}</td>
                                                                        <td>{edu.percentage}%</td>
                                                                        <td>{edu.college}</td>
                                                                        <td>{edu.education_type}</td>
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
                                                        value={education.education_name} onChange={(e) => setEducation({
                                                            ...education,
                                                            education_name: e.target.value
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
                                                <label className='form-label'>Salary Mode*</label>
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
                                                <label className='form-label'>Hourly Rate*</label>
                                                <div className='position-relative'>
                                                    <input
                                                        type='text'
                                                        className='form-control wizard-required'
                                                        required=''
                                                        value={education.college} onChange={(e) => setEducation({
                                                            ...education,
                                                            college: e.target.value
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
                                                            value={education.education_type} onChange={(e) => setEducation({
                                                                ...education,
                                                                education_type: e.target.value
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
                                                                    <th scope="col">Customer Name</th>
                                                                    <th scope="col">From Month Year</th>
                                                                    <th scope="col">To Month Year</th>
                                                                    <th scope="col">Skill Name</th>
                                                                    <th scope="col">School/College</th>
                                                                    <th scope="col">Hourly Rate</th>
                                                                    <th scope="col">Salary Mode</th>
                                                                    <th scope="col" className="text-center">
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {educationList.map((edu, index) => (
                                                                    <tr key={index}>
                                                                        <td>{edu.education_name}</td>
                                                                        <td>{edu.board}</td>
                                                                        <td>{edu.from_year}</td>
                                                                        <td>{edu.to_year}</td>
                                                                        <td>{edu.percentage}%</td>
                                                                        <td>{edu.college}</td>
                                                                        <td>{edu.education_type}</td>
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
                                        </div>
                                        <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-20'>
                                            <button
                                                onClick={prevStep}
                                                type='button'
                                                className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                            >
                                                Back
                                            </button>
                                            <button
                                                type='button'
                                                className='form-wizard-submit btn btn-primary-600 px-32'
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            {/* Form Wizard End */}
                        </div>
                    </div>
                </div>

            </MasterLayout >
        </>
    );
};

export default AddEmployee;
