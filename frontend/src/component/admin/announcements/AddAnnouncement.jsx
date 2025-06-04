export default function AddAnnouncement(){
    return(
        <>
        {/* Add Announcement */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Announcement
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Announcement</h1>
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
                                                placeholder="Name Of Announcement" required
                                            />
                                            <label htmlFor="text">Title</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select name="" id="" className="form-select">
                                                <option value="">React</option>
                                                <option value="">Java</option>
                                                <option value="">Javascript</option>
                                                
                                            </select>
                                            <label htmlFor="text">Class</label>
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
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Name Of Description"
                                            />
                                            <label htmlFor="text">Description</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="file"
                                                placeholder="Profile"
                                            />
                                            <label htmlFor="file">Profile</label>
                                        </div>
                                    </div>


                                    

                                    

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
            {/* Add Announcement */}
        </>
    )
}