import { Link } from "react-router-dom";

export default function TeacherAllMaterial() {
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mr. Khurana</td>
                                        <td>Material 1</td>
                                        <td>Unit-1 Notes</td>
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
                                        <td>BCA</td>
                                        <td>2025-06-03</td>
                                        <td>
                                            <span className="badge bg-success">Active</span>
                                        </td>
                                        <td>
                                            <Link to="/teacher/teacherupdatematerial" className="btn btn-sm btn-success">
                                                <i className="fa-solid fa-pen-to-square" />
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-danger">
                                                <i className="fa-solid fa-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Repeat <tr> for more rows dynamically */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
