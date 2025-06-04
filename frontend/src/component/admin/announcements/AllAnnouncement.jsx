import { Link } from "react-router-dom";

export default function AllAnnouncement() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-primary">📢 All Announcements</h2>
                        <p className="text-muted">Check all class announcements below</p>
                    </div>

                    <div className="table-responsive shadow rounded">
                        <table className="table table-hover align-middle text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Class Name</th>
                                    <th scope="col">Teacher Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">File</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Class 1</td>
                                    <td>Teacher2</td>
                                    <td>Today is off</td>
                                    <td>
                                        <a
                                            href={`/materials/file-1741415873509-62161625-Teacher2.jpg`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            View File
                                        </a>
                                    </td>
                                    <td>03 June 2025, 11:06 AM</td>
                                    <td>
                                        <span className="badge bg-success">Active</span>
                                    </td>
                                    <td>
                                        <Link
                                            to="/admin/updateannouncement"
                                            className="btn btn-sm btn-warning"
                                            title="Edit"
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-danger"
                                            title="Delete"
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
