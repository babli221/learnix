export default function AddComment(){
    return(
        <>
        {/* Add Comment */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Comment
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Comment</h1>
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
                                                placeholder="AnnouncementId"
                                            />
                                            <label htmlFor="text">AnnouncementId</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="comment"
                                            />
                                            <label htmlFor="text">Comment</label>
                                        </div>
                                    </div>
                                    

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Comment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Comment */}
        </>
    )
}