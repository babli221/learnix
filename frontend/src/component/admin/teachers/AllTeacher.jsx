import { Link } from "react-router-dom";

export default function AllTeacher() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">All Teachers</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>

                                        <td>@mdo</td>
                                        <td>true</td>
                                        <td>
                                            <Link to="/admin/updateteacher" className="btn btn-success" >
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