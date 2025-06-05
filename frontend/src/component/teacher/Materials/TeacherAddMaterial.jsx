export default function TeacherAddMaterial() {
    return (
        <>
            {/* Add Material */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Material
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Material</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">

                                    {/* Select Teacher */}
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

                                    {/* Select Class */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="class" className="form-select" required>
                                                <option value="">-- Select Class --</option>
                                                <option value="react">React</option>
                                                <option value="javascript">JavaScript</option>
                                                <option value="java">Java</option>
                                            </select>
                                            <label htmlFor="class">Class</label>
                                        </div>
                                    </div>

                                    {/* Material Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Enter Title"
                                                required
                                            />
                                            <label htmlFor="title">Material Title</label>
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
                                            <label htmlFor="description">Material Description</label>
                                        </div>
                                    </div>

                                    {/* Upload File */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold">Upload Material File</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="file"
                                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Material
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Material */}
        </>
    );
}
