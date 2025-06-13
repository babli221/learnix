import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function TeacherUpdateMaterial() {
    const params = useParams();
    const nav = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    useEffect(() => {
        ApiServices.TeacherSingleMaterial({ _id: params.id })
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

    function updateMaterial(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("_id", params.id);
        formData.append("title", title);
        formData.append("description", description);
        if (file) {
            formData.append("file", file);
        }

        ApiServices.TeacherUpdateMaterial(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    nav("");
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
            {/* Update Material */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Material
                        </h6>
                        <h1 className="mb-5">Enter Details To Update Material</h1>
                    </div>

                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={updateMaterial}>
                                <div className="row g-3">
                                    {/* Material Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Enter Title"
                                                required
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                            <label htmlFor="title">Material Title</label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                placeholder="Enter Description"
                                                style={{ height: '100px' }}
                                                required
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                            <label htmlFor="description">Material Description</label>
                                        </div>
                                    </div>

                                    {/* Upload File */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold">Upload Material File</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="file"
                                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Material
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Material */}
        </>
    );
}
