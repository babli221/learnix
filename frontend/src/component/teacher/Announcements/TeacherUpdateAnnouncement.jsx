import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function TeacherUpdateAnnouncement() {
    const params = useParams();
    const nav = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    useEffect(() => {
        ApiServices.TeacherSingleAnnouncement({ _id: params.id })
            .then((res) => {
                if (res.data.success) {
                    setTitle(res.data.data.title);
                    setDescription(res.data.data.description);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something went wrong!");
                console.log(err);
            });
    }, [params.id]);

    function updateAnnouncement(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("_id", params.id);
        formData.append("title", title);
        formData.append("description", description);
        if (file) {
            formData.append("file", file);
        }

        ApiServices.TeacherUpdateAnnouncement(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    nav("/teacher/singleclass/"+sessionStorage.getItem("classId")+ "/" +sessionStorage.getItem("teacherId"));
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something went wrong!");
                console.log(err);
            });
    }

    return (
        <>
            {/* Update Announcement */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Announcement
                        </h6>
                        <h1 className="mb-5">Enter Updated Details</h1>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={updateAnnouncement}>
                                <div className="row g-3">
                                    {/* Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Announcement Title"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                required
                                            />
                                            <label htmlFor="title">Title</label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                placeholder="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required
                                            />
                                            <label htmlFor="description">Description</label>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="fileUpload"
                                                onChange={(e) => setFile(e.target.files[0])}
                                            />
                                            <label htmlFor="fileUpload">Upload File</label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Announcement
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Update Announcement */}
        </>
    );
}
