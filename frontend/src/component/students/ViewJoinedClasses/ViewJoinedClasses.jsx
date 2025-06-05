import { Link } from "react-router-dom";

export default function ViewJoinedClasses() {
  return (
    <>
      {/* View Joined Classes Section */}
      <div className="container-xxl py-5">
        <div className="container">
          {/* Title */}
          <div className="row d-flex justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title bg-white text-primary px-3 d-inline-block">
                View Classes Joined
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">S No.</th>
                      <th scope="col">Class Name</th>
                      <th scope="col">Joined At</th>
                      <th scope="col">Status</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>React Class</td>
                      <td>2025-02-25</td>
                      <td>Active</td>
                      <td>
                        <Link to="#" className="btn btn-danger btn-sm">
                          <i className="fa-solid fa-trash"></i>
                        </Link>
                      </td>
                    </tr>
                    {/* Add more rows dynamically here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End View Joined Classes Section */}
    </>
  );
}
