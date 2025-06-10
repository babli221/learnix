import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function AddTeacher() {

    // Make States

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [qualification, setQualification] = useState("")
    const [profilePic, setProfilePic] = useState("")

    var nav = useNavigate()
    

    function handleForm(e) {
        e.preventDefault()

        // console.log(name, email, password, contact, address, qualification, profilePic)

        let data = {
            name: name,
            email: email,
            contact: contact,
            address: address,
            qualification: qualification,
            password: password,
            profile : profilePic
        }

        ApiServices.AddTeacher(data)
            .then((res) => {
                console.log(res.data)
                if(res.data.success){
                    toast.success(res.data.message) 

                    setName("")
                    setEmail("")
                    setPassword("")
                    setContact("")
                    setAddress("")
                    setQualification("")

                    nav("/admin/allteacher")

                }else{
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
            {/* Add Teacher */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Teacher
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Teacher</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">

                        <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
                                <div className="row g-3 ">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Name Of Teacher"

                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"

                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="Password"
                                                placeholder="Password"


                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="Password">Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Contact"


                                                value={contact}
                                                onChange={(e) => {
                                                    setContact(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Contact</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Address"


                                                value={address}
                                                onChange={(e) => {
                                                    setAddress(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Address</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Qualification"


                                                value={qualification}
                                                onChange={(e) => {
                                                    setQualification(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Qualification</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="file"
                                                placeholder="Profile"

                                                onChange={(e) => {
                                                    setProfilePic(e.target.files[0])
                                                }}
                                            />
                                            <label htmlFor="file">Profile</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Teacher
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Teacher */}
        </>
    )
}