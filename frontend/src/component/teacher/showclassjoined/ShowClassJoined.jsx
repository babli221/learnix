import { Link } from "react-router-dom";

export default function ShowClassJoined() {
    return (
        <>
             {/* Dashboard Start */}
            <div className="container-xxl py-5 ">
                <div className="container ">
                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                                   <h5> <Link to="/teacher/singleclass" className="mb-3">Mern Class</Link></h5>
                                    <p>
                                        10 Students
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                                    <h5 className="mb-3">Js Class</h5>
                                    <p>
                                        10 Students
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4" />
                                    <h5 className="mb-3">Bootstrap Class</h5>
                                    <p>
                                        5 Students
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Dashboard End */}
        </>
    )
}