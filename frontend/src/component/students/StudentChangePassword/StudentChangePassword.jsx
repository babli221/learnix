export default function StudentChangePassword() {
    return (
        <>
            {/* Change Password Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Change Password
                        </h6>
                        <h1 className="mb-5">Update Your Password</h1>
                    </div>

                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    {/* Old Password */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="oldPassword"
                                                placeholder="Old Password"
                                                required
                                            />
                                            <label htmlFor="oldPassword">Old Password</label>
                                        </div>
                                    </div>

                                    {/* New Password */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="newPassword"
                                                placeholder="New Password"
                                                required
                                            />
                                            <label htmlFor="newPassword">New Password</label>
                                        </div>
                                    </div>

                                    {/* Confirm New Password */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder="Confirm New Password"
                                                required
                                            />
                                            <label htmlFor="confirmPassword">Confirm New Password</label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Change Password
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Change Password Section */}
        </>
    );
}
