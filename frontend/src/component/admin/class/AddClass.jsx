export default function AddClass() {
    return (
        <>
            {/* Add Class */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Class
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Class</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">

                        <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3 ">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Name Of Teacher"
                                            />
                                            <label htmlFor="email">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select name="" id="" className="form-select">
                                                <option value="">Mr Khurana</option>
                                                <option value="">Mr Khan</option>
                                                <option value="">John</option>
                                                <option value="">Mohinder</option>
                                            </select>
                                            <label htmlFor="text">Teacher</label>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Class
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Class */}
        </>
    )
}