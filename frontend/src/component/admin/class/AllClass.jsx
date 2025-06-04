import { Link } from "react-router-dom";

export default function AllClass() {
    return (
        <>
        {/* All Class */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">All Class</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S No.</th>
                                        <th scope="col">ClassName</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">TeacherName</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>CyberClass</td>

                                        <td>A cyberclass for all students</td>
                                        <td>Oman</td>
                                        <td>oman@gmail.com</td>
                                        <td>true</td>
                                        <td>2025-02-25T14:58:09.465Z</td>

                                        <td>
                                            <Link to="/admin/updateclass" className="btn btn-success" >
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