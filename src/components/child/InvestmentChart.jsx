import React from "react";

const Investment = ({ approvedCount, pendingCount }) => {
    return (
        <div className="col-xxl-3">
            <div className="card radius-16">
                <div className="card-header">
                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Invoices</h6>
                        {/* <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                            <option>Today</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select> */}
                    </div>
                </div>
                <div className="card-body py-20">
                    <div className="mt-40 mb-24 text-center pe-110 position-relative max-w-288-px mx-auto">
                        <div className="w-170-px h-170-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-2-px">
                            <img
                                src="assets/images/home-eleven/bg/radial-bg1.png"
                                alt=""
                                className="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover"
                            />
                            <h5 className="text-white">{approvedCount + pendingCount > 0 ? Math.round((approvedCount / (approvedCount + pendingCount)) * 100) : 0}%</h5>
                        </div>
                        <div className="w-144-px h-144-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center border border-white border-width-3-px position-absolute top-0 end-0 mt--36">
                            <img
                                src="assets/images/home-eleven/bg/radial-bg2.png"
                                alt=""
                                className="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover"
                            />
                            <h5 className="text-white">{approvedCount + pendingCount > 0 ? Math.round((pendingCount / (approvedCount + pendingCount)) * 100) : 0}%</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-24 justify-content-between">
                        <div className="d-flex flex-column align-items-start">
                            <div className="d-flex align-items-center gap-2">
                                <span className="w-12-px h-12-px rounded-pill bg-primary" />
                                <span className="text-secondary-light text-sm fw-normal">Approved</span>
                            </div>
                            <h6 className="text-primary-light fw-semibold mb-0 mt-4 text-lg">
                                {approvedCount}
                            </h6>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                            <div className="d-flex align-items-center gap-2">
                                <span className="w-12-px h-12-px rounded-pill bg-purple" />
                                <span className="text-secondary-light text-sm fw-normal">Pending</span>
                            </div>
                            <h6 className="text-primary-light fw-semibold mb-0 mt-4 text-lg">
                                {pendingCount}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investment;
