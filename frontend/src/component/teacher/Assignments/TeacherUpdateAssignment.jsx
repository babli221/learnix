export default function TeacherUpdateAssignment() {
    return (
        <>
            {/* Update Assignment */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Assignment
                        </h6>
                        <h1 className="mb-5">Enter Details to Update Assignment</h1>
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
                                                id="title"
                                                placeholder="Enter Assignment Title"
                                                required
                                            />
                                            <label htmlFor="title">Title</label>
                                        </div>
                                    </div>

                                    {/* Class */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="class" className="form-select" required>
                                                <option value="">-- Select Class --</option>
                                                <option value="react">React</option>
                                                <option value="java">Java</option>
                                                <option value="javascript">JavaScript</option>
                                            </select>
                                            <label htmlFor="class">Class</label>
                                        </div>
                                    </div>

                                    {/* Teacher */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="teacher" className="form-select" required>
                                                <option value="">-- Select Teacher --</option>
                                                <option value="khurana">Mr. Khurana</option>
                                                <option value="khan">Mr. Khan</option>
                                                <option value="john">John</option>
                                                <option value="mohinder">Mohinder</option>
                                            </select>
                                            <label htmlFor="teacher">Teacher</label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                placeholder="Enter Description"
                                                style={{ height: '100px' }}
                                            ></textarea>
                                            <label htmlFor="description">Description</label>
                                        </div>
                                    </div>

                                    {/* Marks */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="marks"
                                                placeholder="Enter Marks"
                                                required
                                            />
                                            <label htmlFor="marks">Marks</label>
                                        </div>
                                    </div>

                                    {/* Due Date */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="dueDate"
                                                required
                                            />
                                            <label htmlFor="dueDate">Due Date</label>
                                        </div>
                                    </div>

                                    {/* Password (if needed) */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter Password"
                                            />
                                            <label htmlFor="password">Password (optional)</label>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Upload New File</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="file"
                                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Assignment
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Assignment */}
        </>
    );
}
