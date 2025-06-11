import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState("")
        const [newPassword, setNewPassword] = useState("")
        
    
        function updatePass(e){
            e.preventDefault()
    
            let data = {
                _id : sessionStorage.getItem("id"),
                currentPassword : currentPassword,
                newPassword : newPassword
            }
    
            ApiServices.TeacherChangePassword(data)
             .then((res) => {
                    if (res.data.success) {
                        toast.success(res.data.message)
                        
                    }
                    else {
                        toast.error(res.data.message)
                    }
                })
                .catch((err) => {
                    toast.error("Something went wrong!")
                    console.log(err)
                })
        }
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

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                            <form>
                                <div className="row g-3">
                                    
                                    {/* Current Password */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="currentPassword"
                                                placeholder="Current Password"
                                                required
                                                value={currentPassword}
                                                onChange={(e) => {
                                                    setCurrentPassword(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="currentPassword">Current Password</label>
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
                                                value={newPassword}
                                                onChange={(e) => {
                                                    setNewPassword(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="newPassword">New Password</label>
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
