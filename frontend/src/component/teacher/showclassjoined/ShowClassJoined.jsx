import { Link } from "react-router-dom";

export default function ShowClassJoined() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">ShowClassJoined</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S No.</th>
                                        <th scope="col">All Class You have joined</th>
                                        <th scope="col">Joined At</th>
                                        <th scope="col">Status</th>

                                        <th scope="col">Delete</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>React Class</td>

                                        <td>2025-02-25T14:58:09.465Z</td>
                                        <td>true</td>

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