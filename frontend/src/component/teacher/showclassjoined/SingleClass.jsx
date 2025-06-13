import { Link, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SingleClass() {

    const params = useParams();

    console.log(params.id);

    const [teacherMaterials, setTeacherMaterials] = useState([]);
    const [teacherAnnouncements, setTeacherAnnouncements] = useState([]);
    const [teacherAssignments, setTeacherAssignments] = useState([]);

    sessionStorage.setItem("classId", params.id);

    console.log(params.tId);
    sessionStorage.setItem("teacherId", params.tId);

    // ------------------------ Get All Materials & Announcements
    useEffect(() => {
        ApiServices.TeacherAllMaterial()
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    toast.success(res.data.message);
                    setTeacherMaterials(res?.data?.data);
                    console.log(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err);
            });

        // Get All Announcements
        ApiServices.TeacherAllAnnouncement()
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setTeacherAnnouncements(res?.data?.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something Went Wrong");
            });

        // Get All Assignments
        ApiServices.TeacherAllAssignment()
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setTeacherAssignments(res?.data?.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something Went Wrong");
            });

    }, []);

    // --------------------- Delete API ---------------------
    
        function deleteMaterial(id) {
            let data = {
                _id: id,
                status: "false"
            };
    
            ApiServices.TeacherDeleteMaterial(data)
                .then((res) => {
                    if (res.data.success) {
                        toast.success("Material Deleted Successfully!");
                        fetchMaterials();
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    toast.error("Something Went Wrong");
                    console.log(err);
                });
        }

        function deleteAssignment(id) {
            let data = {
                _id: id,
                status: "false"
            };
    
            ApiServices.TeacherDeleteAssignment(data)
                .then((res) => {
                    if (res.data.success) {
                        toast.success("Assignment Deleted Successfully!");
                        fetchAssignments();
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    toast.error("Something Went Wrong");
                    console.log(err);
                });
        }
        function deleteAnnouncement(id) {
            let data = {
                _id: id,
                status: "false"
            };


        ApiServices.TeacherDeleteAnnouncement(data)
                .then((res) => {
                    if (res.data.success) {
                        toast.success("Announcement Deleted Successfully!");
                        fetchAnnouncements();
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    toast.error("Something Went Wrong");
                    console.log(err);
                });
        }




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
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Material</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Assignment</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Announcement</button>
                                <button className="nav-link" id="nav-students-tab" data-bs-toggle="tab" data-bs-target="#nav-students" type="button" role="tab" aria-controls="nav-students" aria-selected="false">Students</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                <div className="row mt-5">
                                    <div className="col-2">
                                        <button className="btn">
                                            <Link to={"/teacher/teacheraddmaterial"}>
                                                Add Material
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="row g-4 justify-content-center mt-5">
                                    {teacherMaterials
                                        .filter(el => el?.teacherId?._id === sessionStorage.getItem("teacherId"))
                                        .map((el, index) => (
                                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="course-item bg-light">
                                                    <div className="position-relative overflow-hidden">
                                                        <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-4 pb-0">
                                                        <h5 className="mb-4">{el?.title}</h5>
                                                    </div>
                                                    <div className="d-flex border-top">
                                                        <small className="flex-fill text-center border-end py-2">{el?.description}</small>
                                                    </div>

                                                    {/* ✅ FIXED BUTTON ALIGNMENT */}
                                                    <div className="d-flex justify-content-between px-4 py-3">
                                                        <Link to={"/teacher/teacherupdatematerial/" + el._id} className="btn btn-sm btn-outline-primary">
                                                            Update Material
                                                        </Link>
                                                        <button className="btn btn-sm btn-danger" onClick={() => deleteMaterial(el._id)}>
                                                            <i className="fa-solid fa-trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Assignment Tab */}
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                                <div className="row mt-5">
                                    <div className="col-2">
                                        <button className="btn">
                                            <Link to={"/teacher/teacheraddassignment"}>
                                                Add Assignment
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="row g-4 justify-content-center mt-5">
                                    {teacherAssignments
                                        .filter(el => el?.teacherId?._id === sessionStorage.getItem("teacherId"))
                                        .map((el, index) => (
                                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="course-item bg-light">
                                                    <div className="position-relative overflow-hidden">
                                                        <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-4 pb-0">
                                                        <h5 className="mb-4">{el?.title}</h5>
                                                    </div>
                                                    <div className="d-flex border-top">
                                                        <small className="flex-fill text-center border-end py-2">{el?.description}</small>
                                                    </div>
                                                    <button className="btn">
                                                        <Link to={"/teacher/teacherupdateassignment/ " + el._id}>
                                                            Update Assignment
                                                        </Link>
                                                    </button>
                                                    <button className="btn btn-danger" onClick={() => {
                                                        deleteAssignment(el._id)
                                                    }}>
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Announcement Tab */}
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                                <div className="row mt-5">
                                    <div className="col-2">
                                        <button className="btn">
                                            <Link to={"/teacher/teacheraddannouncement"}>
                                                Add Announcement
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="row g-4 justify-content-center mt-5">
                                    {teacherAnnouncements
                                        .filter(el => el?.teacherId?._id === sessionStorage.getItem("teacherId"))
                                        .map((el, index) => (
                                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="course-item bg-light">
                                                    <div className="position-relative overflow-hidden">
                                                        <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-4 pb-0">
                                                        <h5 className="mb-4">{el?.title}</h5>
                                                    </div>
                                                    <div className="d-flex border-top">
                                                        <small className="flex-fill text-center border-end py-2">{el?.description}</small>
                                                    </div>
                                                    <button className="btn">
                                                        <Link to={"/teacher/teacherupdateannouncement/" + el._id}>
                                                            Update Announcement
                                                        </Link>
                                                    </button>
                                                    <button className="btn btn-danger" onClick={() => {
                                                        deleteAnnouncement(el._id)
                                                    }}>
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Students Tab */}
                            <div className="tab-pane fade" id="nav-students" role="tabpanel" aria-labelledby="nav-students-tab" tabIndex="0">
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
);

}
