import { useState } from "react"

import { toast, ToastContainer } from "react-toastify"
import ApiServices from "../../layout/ApiServices"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const nav = useNavigate()

    function handleForm(e){
        e.preventDefault()

        // console.log(email, password)

        let data = {
            email : email,
            password : password
        }

        ApiServices.Login(data)
        .then((res)=>{
            console.log(res.data)

            if(res.data.success){
                toast.success("Login Successful")
                sessionStorage.setItem("name",res.data.data.name)
                sessionStorage.setItem("email",res.data.data.email)
                sessionStorage.setItem("userType",res.data.data.userType)
                sessionStorage.setItem("token",res.data.token)

                if(res.data.data.userType == "1"){

                    nav("/admin")
                }
                else if(res.data.data.userType == "2"){
                    nav("/teacher")
                }
                else{
                    nav("/student")

                }
            }
            else{
            toast.error(res.data.message)

            }
        })
        .catch((err)=>{
            toast.error("Something Went Wrong")
            console.log(err)
        })
    }

    return (
        <>
       
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Login</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Pages
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    >
                                        Login
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Login Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Login Form
                        </h6>
                        <h1 className="mb-5">Enter Your Details</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">

                        <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
                                <div className="row g-3 ">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"

                                                value={email}

                                                onChange={(e)=>{
                                                    setEmail(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="email">Your Email</label>
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

                                                onChange={(e)=>{
                                                    setPassword(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="Password">Your Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login End */}
        </>

    )
}