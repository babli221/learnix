export default function TeacherUpdateAnnouncement() {
    return (
        <>
            {/* Update Announcement */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Announcement
                        </h6>
                        <h1 className="mb-5">Enter Updated Details</h1>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    {/* Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Announcement Title"
                                                defaultValue="Important Update"
                                            />
                                            <label htmlFor="title">Title</label>
                                        </div>
                                    </div>

                                    {/* Class Select */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select className="form-select" id="classSelect" defaultValue="Java">
                                                <option value="React">React</option>
                                                <option value="Java">Java</option>
                                                <option value="Javascript">JavaScript</option>
                                            </select>
                                            <label htmlFor="classSelect">Class</label>
                                        </div>
                                    </div>

                                    {/* Teacher Select */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select className="form-select" id="teacherSelect" defaultValue="Mr Khan">
                                                <option value="Mr Khurana">Mr Khurana</option>
                                                <option value="Mr Khan">Mr Khan</option>
                                                <option value="John">John</option>
                                                <option value="Mohinder">Mohinder</option>
                                            </select>
                                            <label htmlFor="teacherSelect">Teacher</label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                placeholder="Description"
                                                defaultValue="Updated details for upcoming exam."
                                            />
                                            <label htmlFor="description">Description</label>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="fileUpload"
                                            />
                                            <label htmlFor="fileUpload">Upload File</label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Announcement
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Update Announcement */}
        </>
    );
}
