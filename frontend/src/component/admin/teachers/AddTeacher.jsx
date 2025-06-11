import { useState } from "react";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddTeacher() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        qualification: "",
        contact: "",
        address: ""
    });

    const [profilePic, setProfilePic] = useState(null);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("qualification", data.qualification);
        formData.append("contact", data.contact);
        formData.append("address", data.address);
        if (profilePic) {
            formData.append("profile", profilePic);
        }

        ApiServices.AddTeacher(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success("Teacher Added");
                    navigate("/admin/allteacher");
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(() => {
                toast.error("Something went wrong");
            });
    };

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Teacher
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Teacher</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="row g-3">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Name"
                                                name="name"
                                                value={data.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                name="email"
                                                value={data.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                                name="password"
                                                value={data.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="qualification"
                                                placeholder="Qualification"
                                                name="qualification"
                                                value={data.qualification}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="qualification">Qualification</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="contact"
                                                placeholder="Contact"
                                                name="contact"
                                                value={data.contact}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contact">Contact</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                placeholder="Address"
                                                name="address"
                                                value={data.address}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="address">Address</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="profile"
                                                name="profile"
                                                onChange={handleFileChange}
                                            />
                                            <label htmlFor="profile">Profile Picture</label>
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
        </>
    );
}
