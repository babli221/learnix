import { Link } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function TeacherAllMaterial() {
    const [allMaterials, setAllMaterials] = useState([]);

    function fetchMaterials() {
        ApiServices.AllMaterial()
            .then((res) => {
                if (res.data.success) {
                    setAllMaterials(res?.data?.data);
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
        fetchMaterials();
    }, []);

    function deleteMaterial(id) {
        let data = {
            _id: id,
            status: "false",
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

    return (
        <div className="container-xxl py-5">
            <div className="container">
                {/* Heading */}
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <h2 className="mb-5 text-primary border-bottom border-3 pb-2">
                            All Uploaded Materials
                        </h2>
                    </div>
                </div>

                {/* Table */}
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover text-center align-middle">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">S. No.</th>
                                        <th scope="col">Teacher Name</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">File</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allMaterials.map((el, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el?.teacherid}</td>
                                            <td>{el?.title}</td>
                                            <td>{el?.description}</td>
                                            <td>{el?.file}</td>
                                            <td>{el?.classid}</td>
                                            <td>{el?.createdAt}</td>
                                            <td>{el?.status ? "Active" : "Inactive"}</td>
                                            <td>
                                                <Link to="/teacher/teacherupdatematerial" className="btn btn-success">
                                                    <i className="fa-solid fa-pen-to-square" />
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteMaterial(el._id)}
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
        </div>
    );
}
