export default function TeacherProfileUpdate() {
    return (
        <>
            {/* Update Profile */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Profile
                        </h6>
                        <h1 className="mb-5">Enter Update Details Of Profile</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    {/* Full Name */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Full Name" required />
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Email" required />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                                            <label htmlFor="phone">Phone</label>
                                        </div>
                                    </div>

                                    {/* Qualification */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="qualification" placeholder="Qualification" />
                                            <label htmlFor="qualification">Qualification</label>
                                        </div>
                                    </div>

                                    {/* Department */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="department" placeholder="Department" />
                                            <label htmlFor="department">Department</label>
                                        </div>
                                    </div>

                                    {/* Date of Birth */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="date" className="form-control" id="dob" placeholder="Date of Birth" />
                                            <label htmlFor="dob">Date of Birth</label>
                                        </div>
                                    </div>

                                    {/* Joining Date */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="date" className="form-control" id="joiningDate" placeholder="Joining Date" />
                                            <label htmlFor="joiningDate">Joining Date</label>
                                        </div>
                                    </div>

                                    {/* Gender */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select" id="gender">
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <label htmlFor="gender">Gender</label>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Enter Address" id="address" style={{ height: '100px' }}></textarea>
                                            <label htmlFor="address">Address</label>
                                        </div>
                                    </div>

                                    {/* Profile Photo */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="file" className="form-control" id="profilePic" placeholder="Profile Photo" />
                                            <label htmlFor="profilePic">Upload Profile Picture</label>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Profile
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Profile */}
        </>
    );
}
