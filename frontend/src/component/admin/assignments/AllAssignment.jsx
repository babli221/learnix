import { Link } from "react-router-dom";

export default function AllAssignment(){
    return(
        <>
         <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
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
                                        <th scope="col">TeacherId</th>
                                        <th scope="col">ClassId</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Marks</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">File</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>



                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Complete your Assign</td>

                                        <td>Teacher2</td>
                                        <td>BCA</td>
                                        <td>React Assignment</td>
                                        <td>20</td>
                                        <td>04-06-2025</td>
                                        <td>
                                            <a
                                                href={`/materials/file-1741415873509-62161625-Teacher2.jpg`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View File
                                            </a>
                                        </td>

                                        <td>
                                            <Link to="/admin/updateassignment" className="btn btn-success" >
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