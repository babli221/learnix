import { Link } from "react-router-dom";

export default function AllMaterial() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">All Material</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S No.</th>
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
                                        <td>Material 1</td>

                                        <td>Unit-1 notes</td>
                                        <td>
                                            <a
                                                href={`/materials/file-1741415873509-62161625-Teacher2.jpg`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View File
                                            </a>
                                        </td>
                                        <td>BCA</td>
                                        <td>2025-06-03</td>
                                        <td>Active</td>

                                        <td>
                                            <Link to="/admin/updatematerial" className="btn btn-success" >
                                                <i className="fa-solid fa-pen-to-square" />
                                            </Link>

                                        </td>
                                        <td>
                                            <Link to="" className="btn btn-danger" >
                                                <i className="fa-solid fa-trash" />
                                            </Link>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}