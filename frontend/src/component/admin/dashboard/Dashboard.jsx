import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function Dashboard() {
    const nav = useNavigate();

    // Teachers
    const [teacherCount, setTeacherCount] = useState(0);
    useEffect(() => {
        ApiServices.AllTeacher()
            .then((res) => {
                if (res.data.success) {
                    setTeacherCount(res.data.data.length);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err);
            });
    }, []);

    // Students
    const [studentCount, setStudentCount] = useState(0);
    useEffect(() => {
        ApiServices.AllStudent()
            .then((res) => {
                if (res.data.success) {
                    setStudentCount(res.data.data.length);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err);
            });
    }, []);

    // Classes
    const [classCount, setClassCount] = useState(0);
    useEffect(() => {
        ApiServices.AllClass()
            .then((res) => {
                if (res.data.success) {
                    setClassCount(res.data.data.length);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err);
            });
    }, []);

    return (
        <>
            {/* Dashboard Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4 justify-content-center d-flex">
                        {/* Teachers */}
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div
                                className="service-item text-center pt-3"
                                onClick={() => nav("/admin/allteacher")}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                                    <h5 className="mb-3">Total Teachers</h5>
                                    <p>{teacherCount}</p>
                                </div>
                            </div>
                        </div>

                        {/* Students */}
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div
                                className="service-item text-center pt-3"
                                onClick={() => nav("/admin/allstudent")}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                                    <h5 className="mb-3">Total Students</h5>
                                    <p>{studentCount}</p>
                                </div>
                            </div>
                        </div>

                        {/* Classes */}
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div
                                className="service-item text-center pt-3"
                                onClick={() => nav("/admin/allclass")}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4" />
                                    <h5 className="mb-3">Total Classes</h5>
                                    <p>{classCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dashboard End */}
        </>
    );
}
