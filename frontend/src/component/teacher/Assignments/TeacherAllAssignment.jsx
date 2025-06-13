import { Link } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function TeacherAllAssignment() {
    const [allAssignments, setAllAssignments] = useState([]);

    function fetchAssignments() {
        ApiServices.AllAssignment()
            .then((res) => {
                if (res.data.success) {
                    setAllAssignments(res?.data?.data); 
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
        fetchAssignments();
    }, []);

    function deleteAssignment(id) {
        let data = {
            _id: id,
            status: "false",
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

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 text-center">
                            <h2 className="my-5">All Assignments</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S No.</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Teacher</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Marks</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">File</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allAssignments.map((el, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el?.title}</td>
                                            <td>{el?.teacherid}</td>
                                            <td>{el?.classid}</td>
                                            <td>{el?.description}</td>
                                            <td>{el?.marks}</td>
                                            <td>{el?.dueDate}</td>
                                            <td>{el?.file}</td>
                                            <td>
                                                {/* ✅ Fixed line here: ID added in route */}
                                                <Link to={`/teacher/teacherupdateassignment/${el._id}`} className="btn btn-success">
                                                    <i className="fa-solid fa-pen-to-square" />
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteAssignment(el._id)} 
                                                >
                                                    <i className="fa-solid fa-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
