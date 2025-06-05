export default function ShowAssignments() {
  return (
    <>
      {/* Show Assignments Section */}
      <div className="container-xxl py-5">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title bg-white text-primary px-3 d-inline-block">
                Assignments Assigned To You
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
                      <th scope="col">Title</th>
                      <th scope="col">Class</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">Description</th>
                      <th scope="col">Marks</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Assignment File</th>
                      <th scope="col">Uploaded Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample Row */}
                    <tr>
                      <th scope="row">1</th>
                      <td>React Hooks Assignment</td>
                      <td>React</td>
                      <td>Mr. Khan</td>
                      <td>Complete the questions on useState and useEffect.</td>
                      <td>20</td>
                      <td>2025-07-01</td>
                      <td>
                        <a
                          href="/uploads/hooks-assignment.pdf"
                          className="btn btn-success btn-sm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View / Download
                        </a>
                      </td>
                      <td>2025-06-25</td>
                    </tr>

                    {/* More rows dynamically */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Assignments Section */}
    </>
  );
}
