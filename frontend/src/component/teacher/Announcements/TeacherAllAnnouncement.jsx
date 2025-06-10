import { Link } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function TeacherAllAnnouncement() {
    const [allAnnouncements, setAllAnnouncements] = useState([]);

    function fetchAnnouncements() {
        ApiServices.AllAnnouncement()
            .then((res) => {
                if (res.data.success) {
                    setAllAnnouncements(res?.data?.data); 
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
        fetchAnnouncements();
    }, []);

    function deleteAnnouncement(id) {
        let data = {
            _id: id,
            status: "false",
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
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 text-center">
                            <h2 className="my-5">All Announcements</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered text-center">
                                <thead className="table-light"> 
                                    <tr>
                                        <th scope="col">S No.</th>
                                        <th scope="col">ClassId</th>
                                        <th scope="col">TeacherId</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">File</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allAnnouncements.map((el, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el?.classid}</td>
                                            <td>{el?.teacherid}</td>
                                            <td>{el?.title}</td>
                                            <td>{el?.description}</td>
                                            <td>{el?.file}</td>
                                            <td>
                                                <Link to="/teacher/teacherupdateannouncement" className="btn btn-success">
                                                    <i className="fa-solid fa-pen-to-square" />
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteAnnouncement(el._id)} 
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
