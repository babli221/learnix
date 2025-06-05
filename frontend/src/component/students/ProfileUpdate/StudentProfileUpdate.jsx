export default function StudentProfileUpdate() {
  return (
    <>
      {/* Student Profile Update Section */}
      <div className="container-xxl py-5">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title bg-white text-primary px-3 d-inline-block">
                Update Your Profile
              </h2>
            </div>
          </div>

          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <form>
                <div className="row g-3">
                  
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" required />
                      <label htmlFor="phone">Mobile Number</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select" id="gender" required>
                        <option value="">Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <label htmlFor="gender">Gender</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="date" className="form-control" id="dob" required />
                      <label htmlFor="dob">Date of Birth</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Address" id="address" style={{ height: '100px' }} required></textarea>
                      <label htmlFor="address">Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="file" className="form-control" id="profile" />
                      <label htmlFor="profile">Upload Profile Photo</label>
                    </div>
                  </div>

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
      {/* End Student Profile Update Section */}
    </>
  );
}
