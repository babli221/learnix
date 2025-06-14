import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../../layout/ApiServices";

export default function ViewJoinedClasses() {

    const [allClasses, setAllClasses] = useState([])

    // --------------------- All API ---------------------

    function fetchClasses() {
        ApiServices.AllClass()
            .then((res) => {
                // console.log("joined classes",res)
                if (res.data.success) {
                    // toast.success("All Students Fetched Successfully")
                    setAllClasses(res?.data?.data)
                    console.log(res?.data?.data)
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err)
            })
    }
    //make useEffect and call that function in it.

    useEffect(() => {
        fetchClasses()
    }, [])

    return (
        <>
            {/* Dashboard Start */}
            <div className="container-xxl py-5 ">
                <div className="container ">
                    <div className="row g-4 justify-content-center d-flex">

                        {allClasses
                            .filter(el => el.studentId.userId === sessionStorage.getItem("id"))
                            .map((el, index) => (
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="service-item text-center pt-3">
                                        <div className="p-4">
                                            <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                                            <h5><Link to={"/student/singleclass/" + el?._id + "/" + el.studentId._id} className="mb-3">{el?.name}</Link></h5>
                                            <p>{el?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}




                    </div>
                </div>
            </div>
            {/* Dashboard End */}
        </>
    )
}