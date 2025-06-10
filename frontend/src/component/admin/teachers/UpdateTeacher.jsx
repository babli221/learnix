import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"

export default function UpdateTeacher() {

    let params = useParams()
    // console.log(params.id)

    const nav = useNavigate()

    const [teacherName, setTeacherName] = useState("")
    const [teacherEmail, setTeacherEmail] = useState("")

    const [contact, setContact] = useState("")
    const [profilePic, setProfilePic] = useState("")

    // Things to do onLoad of this component
    useEffect(() => {
        let data = {
            _id: params.id
        }

        ApiServices.SingleTeacher(data)
            .then((res) => {
                if (res.data.success) {
                    // toast.success(res.data.message)
                    setTeacherName(res.data.data.name)
                    setTeacherEmail(res.data.data.email)
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error("Something went wrong!")
                console.log(err)
            })
    }, [])

    // Actual Update Code

    function updateTeacher(e){
        e.preventDefault();

        let data = {
            _id : params.id,
            name : teacherName,
        }

        ApiServices.UpdateTeacher(data)
         .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setTeacherName("")
                    setTeacherEmail("")
                    nav("/admin/allteacher")
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
            {/* Update Teacher */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update New Teacher
                        </h6>
                        <h1 className="mb-5">Enter New Details Of Teacher</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">

                        <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={updateTeacher}>
                                <div className="row g-3 ">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Name Of Teacher"

                                                value={teacherName}
                                                onChange={(e) => {
                                                    setTeacherName(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Name</label>
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"

                                                value={teacherEmail}
                                                onChange={(e) => {
                                                    setTeacherEmail(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div> */}


                                    {/* <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Contact"
                                                placeholder="Contact"

                                                 value={contact}
                                                onChange={(e)=>{
                                                    setContact(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="Contact">Contact</label>
                                        </div>
                                    </div> */}

                                    {/* <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="file"
                                                placeholder="Profile"
                                                 
                                                onChange={(e)=>{
                                                    setProfilePic(e.target.files[0])
                                                }}
                                            />
                                            <label htmlFor="email">Profile</label>
                                        </div>
                                    </div> */}

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update New Teacher
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Teacher */}
        </>
    )
}