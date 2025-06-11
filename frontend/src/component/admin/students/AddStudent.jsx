import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function AddStudent() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [qualification, setQualification] = useState("")
    

    const nav = useNavigate()

    function handleForm(e) {
        e.preventDefault()

        let data = {
            name: name,
            email: email,
            password: password,
            contact: contact,
            address: address,
            qualification: qualification,
            
        }

        ApiServices.AddStudent(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setName("")
                    setEmail("")
                    setPassword("")
                    setContact("")
                    setAddress("")
                    setQualification("")
                    setGender("")  // reset gender
                    setDob("")  // reset dob
                    nav("/admin/allstudent")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong")
                console.log(err)
            })
    }

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Student
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Student</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
                                <div className="row g-3">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <label>Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label>Email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label>Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Contact"
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                            />
                                            <label>Contact</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            <label>Address</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Qualification"
                                                value={qualification}
                                                onChange={(e) => setQualification(e.target.value)}
                                            />
                                            <label>Qualification</label>
                                        </div>
                                    </div>

                                    
                                    {/* Date of Birth Field */}
                                   

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Student
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
