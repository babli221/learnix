export default function ShowMaterial() {
  return (
    <>
      {/* Show Materials Section */}
      <div className="container-xxl py-5">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title bg-white text-primary px-3 d-inline-block">
                Materials Shared With You
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
                      <th scope="col">Material</th>
                      <th scope="col">Uploaded Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample Row */}
                    <tr>
                      <th scope="row">1</th>
                      <td>React Basics PDF</td>
                      <td>React</td>
                      <td>Mr. Khurana</td>
                      <td>This PDF contains basic concepts of React.</td>
                      <td>
                        <a
                          href="/uploads/react-basics.pdf"
                          className="btn btn-success btn-sm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View / Download
                        </a>
                      </td>
                      <td>2025-02-28</td>
                    </tr>

                    {/* Add more rows dynamically here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Materials Section */}
    </>
  );
}
