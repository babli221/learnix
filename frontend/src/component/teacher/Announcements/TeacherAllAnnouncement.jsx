import { Link } from "react-router-dom";

export default function TeacherAllAnnouncement() {
    return (
        <>
            {/* All Announcements */}
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
                                        <th scope="col">Title</th>
                                        <th scope="col">Teacher</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">File</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sample row (you can map through real data here) */}
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Important Exam Announcement</td>
                                        <td>Mr Khan</td>
                                        <td>Java</td>
                                        <td>Mid-term Exam on Friday. Be prepared!</td>
                                        <td>
                                            <a
                                                href={`/materials/announcement-file1.pdf`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View File
                                            </a>
                                        </td>
                                        <td>
                                            <Link to="/teacher/teacherupdateannouncement" className="btn btn-success">
                                                <i className="fa-solid fa-pen-to-square" />
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">
                                                <i className="fa-solid fa-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Add more rows by mapping data */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* End All Announcements */}
        </>
    );
}
