export default function ShowAnnouncements() {
    return (
        <>
            {/* Show Announcements Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    {/* Heading */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-12 text-center">
                            <h2 className="section-title bg-white text-primary px-3 d-inline-block">
                                Announcements For You
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
                                            <th scope="col">Attachment</th>
                                            <th scope="col">Announced On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Sample Announcement Row */}
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Upcoming Test Notice</td>
                                            <td>JavaScript</td>
                                            <td>Mr. Khurana</td>
                                            <td>There will be a test on ES6 topics next Monday.</td>
                                            <td>
                                                <a
                                                    href="/uploads/test-announcement.pdf"
                                                    className="btn btn-success btn-sm"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    View / Download
                                                </a>
                                            </td>
                                            <td>2025-06-01</td>
                                        </tr>

                                        {/* Additional rows can be dynamically generated here */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Announcements Section */}
        </>
    );
}
