import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function AllStudent() {

    const [allStudents, setAllStudents] = useState([]);

    // --------------------- All API ---------------------

    function fetchStudents() {
        ApiServices.AllStudent()
            .then((res) => {
                if (res.data.success) {
                    setAllStudents(res?.data?.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err);
            });
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    // --------------------- Delete API ---------------------

    function deleteStudent(id) {
        let data = {
            _id: id,
            status: "false"
        };

        ApiServices.DeleteStudent(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success("Student Deleted Successfully!");
                    fetchStudents();
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
            {/* All Student */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">All Student</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Qualification</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allStudents.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{el?.name}</td>
                                                <td>{el?.email}</td>
                                                <td>{el?.contact}</td>
                                                <td>{el?.address}</td>
                                                <td>{el?.qualification}</td>
                                                <td>{el?.gender}</td>
                                                <td>{el?.dob}</td>
                                                <td>{el?.status ? "Active" : "Inactive"}</td>
                                                <td>{el?.createdAt}</td>
                                                <td>
                                                    <Link to={"/admin/updatestudent/" + el._id} className="btn btn-success" >
                                                        <i className="fa-solid fa-pen-to-square" />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => {
                                                        deleteStudent(el._id)
                                                    }}>
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
