export default function UpdateMaterial(){
    return(
        <>
         {/* Update Material */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Material
                        </h6>
                        <h1 className="mb-5">Enter Details Of Update Material</h1>
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
                                            <label htmlFor="text">Id</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="text"
                                            />
                                            <label htmlFor="text">Title</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="text"
                                            />
                                            <label htmlFor="text">Description</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="text"
                                            />
                                            <label htmlFor="text">Class</label>
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
                                            <label htmlFor="email">Profile</label>
                                        </div>
                                    </div>
                                    

                                    

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Material
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Material */}
        </>
    )
}