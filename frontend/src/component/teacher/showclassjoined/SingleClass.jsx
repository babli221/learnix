import { Link } from "react-router-dom";

export default function SingleClass() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Single Class
                        </h6>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"> Material</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Assignment</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Announcement</button>
                                    <button className="nav-link" id="nav-students-tab" data-bs-toggle="tab" data-bs-target="#nav-students" type="button" role="tab" aria-controls="nav-students" aria-selected="false">Students</button>

                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                    <div className="row g-4 justify-content-center mt-5">
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="course-item bg-light">
                                                <div className="position-relative overflow-hidden">
                                                    <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                        <a
                                                            href="#"
                                                            className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                                            style={{ borderRadius: "30px 0 0 30px" }}
                                                        >
                                                            Read More
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                                            style={{ borderRadius: "0 30px 30px 0" }}
                                                        >
                                                            Join Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="text-center p-4 pb-0">


                                                    <h5 className="mb-4">
                                                        Web Design  Material
                                                    </h5>
                                                </div>
                                                <div className="d-flex border-top">

                                                    <small className="flex-fill text-center border-end py-2">
                                                        <i className="fa fa-clock text-primary me-2" />
                                                        05-June-2025
                                                    </small>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="course-item bg-light">
                                                <div className="position-relative overflow-hidden">
                                                    <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                        <a
                                                            href="#"
                                                            className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                                            style={{ borderRadius: "30px 0 0 30px" }}
                                                        >
                                                            Read More
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                                            style={{ borderRadius: "0 30px 30px 0" }}
                                                        >
                                                            Join Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="text-center p-4 pb-0">


                                                    <h5 className="mb-4">
                                                        Web Design  Material
                                                    </h5>
                                                </div>
                                                <div className="d-flex border-top">

                                                    <small className="flex-fill text-center border-end py-2">
                                                        <i className="fa fa-clock text-primary me-2" />
                                                        05-June-2025
                                                    </small>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="course-item bg-light">
                                                <div className="position-relative overflow-hidden">
                                                    <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                        <a
                                                            href="#"
                                                            className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                                            style={{ borderRadius: "30px 0 0 30px" }}
                                                        >
                                                            Read More
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                                            style={{ borderRadius: "0 30px 30px 0" }}
                                                        >
                                                            Join Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="text-center p-4 pb-0">


                                                    <h5 className="mb-4">
                                                        Web Design  Material
                                                    </h5>
                                                </div>
                                                <div className="d-flex border-top">

                                                    <small className="flex-fill text-center border-end py-2">
                                                        <i className="fa fa-clock text-primary me-2" />
                                                        05-June-2025
                                                    </small>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Assigemnnt section</div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Anoncement dectopmd</div>
                                <div className="tab-pane fade" id="nav-students" role="tabpanel" aria-labelledby="nav-students-tab" tabindex="0">

                                    <div className="container-xxl py-5">
                                        <div className="container">


                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">S No.</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Email</th>



                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Babli</td>

                                                                <td>babli@gmail.com</td>


                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}