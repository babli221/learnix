export default function TeacherAddAnnouncement() {
    return (
        <>
            {/* Add Announcement Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Announcement
                        </h6>
                        <h1 className="mb-5">Enter Details of New Announcement</h1>
                    </div>

                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">

                                    {/* Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="announcementTitle"
                                                placeholder="Enter Announcement Title"
                                                required
                                            />
                                            <label htmlFor="announcementTitle">Title</label>
                                        </div>
                                    </div>

                                    {/* Class Selection */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="announcementClass" className="form-select" required>
                                                <option value="">-- Select Class --</option>
                                                <option value="react">React</option>
                                                <option value="java">Java</option>
                                                <option value="javascript">JavaScript</option>
                                            </select>
                                            <label htmlFor="announcementClass">Class</label>
                                        </div>
                                    </div>

                                    {/* Teacher Selection */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="announcementTeacher" className="form-select" required>
                                                <option value="">-- Select Teacher --</option>
                                                <option value="khurana">Mr Khurana</option>
                                                <option value="khan">Mr Khan</option>
                                                <option value="john">John</option>
                                                <option value="mohinder">Mohinder</option>
                                            </select>
                                            <label htmlFor="announcementTeacher">Teacher</label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="announcementDescription"
                                                placeholder="Enter Description"
                                                style={{ height: '100px' }}
                                            ></textarea>
                                            <label htmlFor="announcementDescription">Description</label>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold">Attach File (if any)</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="announcementFile"
                                            accept=".pdf,.doc,.docx,.jpg,.png"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Announcement
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Announcement Section */}
        </>
    );
}
