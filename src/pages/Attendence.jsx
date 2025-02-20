import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import ReactApexChart from 'react-apexcharts';
import MastersLayer from "../components/MastersLayers";
import useReactApexChart from "../hook/ApexChart";

const Attendence = () => {
    let { statisticsDonutChartSeries, statisticsDonutChartOptions } = useReactApexChart();
    let { barChartOptionsOne, barChartSeriesOne } = useReactApexChart();
    return (
        <>
            <MasterLayout>
                <div className="row">
                    <div className="col-xxl-3 col-lg-6">
                        <div className="card h-100 radius-8 border-0">
                            <div className="card-body p-24">
                                <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h6 className="mb-2 fw-bold text-lg">Customers Statistics</h6>
                                    <div className="">
                                        <select className="form-select form-select-sm w-auto bg-base border text-secondary-light" defaultValue="Select Frequency">
                                            <option value="" disabled>
                                                Select Frequency
                                            </option>
                                            <option value="Yearly">Yearly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Today">Today</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="position-relative">
                                    <span className="w-80-px h-80-px bg-base shadow text-primary-light fw-semibold text-xl d-flex justify-content-center align-items-center rounded-circle position-absolute end-0 top-0 z-1">
                                        +30%
                                    </span>

                                    <ReactApexChart options={statisticsDonutChartOptions} series={statisticsDonutChartSeries} type="donut" height={230} id="statisticsDonutChart"
                                        className="mt-36 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none" />
                                    <span className="w-80-px h-80-px bg-base shadow text-primary-light fw-semibold text-xl d-flex justify-content-center align-items-center rounded-circle position-absolute start-0 bottom-0 z-1">
                                        +25%
                                    </span>
                                </div>
                                <ul className="d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3">
                                    <li className="d-flex align-items-center gap-2">
                                        <span className="w-12-px h-12-px radius-2 bg-primary-600" />
                                        <span className="text-secondary-light text-sm fw-normal">
                                            Male:
                                            <span className="text-primary-light fw-bold">20,000</span>
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <span className="w-12-px h-12-px radius-2 bg-yellow" />
                                        <span className="text-secondary-light text-sm fw-normal">
                                            Female:
                                            <span className="text-primary-light fw-bold">25,000</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-6'>
                        <div className='card h-100'>
                            <div className='card-body p-24'>
                                <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                                    <h6 className='mb-2 fw-bold text-lg mb-0'>Average Daily Sales</h6>
                                    <select className='form-select form-select-sm w-auto bg-base border text-secondary-light'>
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                                <h6 className='text-center my-20'>$27,500.00</h6>
                                <div id='barChart' className='barChart'>
                                    <ReactApexChart
                                        options={barChartOptionsOne}
                                        series={barChartSeriesOne}
                                        type='bar'
                                        height={220}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-5 col-md-6'>
                        <div className='card h-100'>
                            <div className='card-header'>
                                <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                                    <h6 className='mb-2 fw-bold text-lg mb-0'>Top Customer</h6>
                                    <Link
                                        to='#'
                                        className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
                                    >
                                        View All
                                        <iconify-icon
                                            icon='solar:alt-arrow-right-linear'
                                            className='icon'
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className='card-body p-24'>
                                <div className='table-responsive scroll-sm'>
                                    <table className='table bordered-table mb-0'>
                                        <thead>
                                            <tr>
                                                <th scope='col'>SL</th>
                                                <th scope='col'>Name </th>
                                                <th scope='col'>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='text-secondary-light'>1</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>
                                                        Savannah Nguyen
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>$30,00.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='text-secondary-light'>2</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>Annette Black</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>$40,00.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='text-secondary-light'>3</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>Theresa Webb</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>$50,00.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='text-secondary-light'>4</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>
                                                        Marvin McKinney
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>$60,00.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='text-secondary-light'>5</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>
                                                        Brooklyn Simmons
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>$70,00.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='text-secondary-light'>6</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>Dianne Russell</span>
                                                </td>
                                                <td>
                                                    <span className='text-secondary-light'>$80,00.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Tables Border Colors</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table colored-row-table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bg-base">
                                                Registered On
                                            </th>
                                            <th scope="col" className="bg-base">
                                                Users
                                            </th>
                                            <th scope="col" className="bg-base">
                                                Email
                                            </th>
                                            <th scope="col" className="bg-base">
                                                Plan
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bg-primary-light">27 Mar 2024</td>
                                            <td className="bg-primary-light">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/users/user1.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                    />
                                                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                        Dianne Russell
                                                    </h6>
                                                </div>
                                            </td>
                                            <td className="bg-primary-light">random@gmail.com</td>
                                            <td className="bg-primary-light">Free</td>
                                        </tr>
                                        <tr>
                                            <td className="bg-success-focus">27 Mar 2024</td>
                                            <td className="bg-success-focus">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/users/user2.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                    />
                                                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                        Wade Warren
                                                    </h6>
                                                </div>
                                            </td>
                                            <td className="bg-success-focus">random@gmail.com</td>
                                            <td className="bg-success-focus">Basic</td>
                                        </tr>
                                        <tr>
                                            <td className="bg-info-focus">27 Mar 2024</td>
                                            <td className="bg-info-focus">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/users/user3.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                    />
                                                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                        Albert Flores
                                                    </h6>
                                                </div>
                                            </td>
                                            <td className="bg-info-focus">random@gmail.com</td>
                                            <td className="bg-info-focus">Standard </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-warning-focus">27 Mar 2024</td>
                                            <td className="bg-warning-focus">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/users/user4.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                    />
                                                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                        Bessie Cooper
                                                    </h6>
                                                </div>
                                            </td>
                                            <td className="bg-warning-focus">random@gmail.com</td>
                                            <td className="bg-warning-focus">Business </td>
                                        </tr>
                                        <tr>
                                            <td className="bg-danger-focus">27 Mar 2024</td>
                                            <td className="bg-danger-focus">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/users/user5.png"
                                                        alt=""
                                                        className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                                    />
                                                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                                        Arlene McCoy
                                                    </h6>
                                                </div>
                                            </td>
                                            <td className="bg-danger-focus">random@gmail.com</td>
                                            <td className="bg-danger-focus">Enterprise </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* card end */}
                </div>

            </MasterLayout>
        </>
    );
};

export default Attendence;
