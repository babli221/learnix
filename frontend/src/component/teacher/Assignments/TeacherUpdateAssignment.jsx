import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function TeacherUpdateAssignment() {
    const params = useParams();
    const nav = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [marks, setMarks] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [file, setFile] = useState(null);

    useEffect(() => {
        ApiServices.TeacherSingleAssignment({ _id: params.id })
            .then((res) => {
                if (res.data.success) {
                    setTitle(res.data.data.title);
                    setDescription(res.data.data.description);
                    setMarks(res.data.data.marks);
                    setDueDate(res.data.data.dueDate); 
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error("Something went wrong!");
                console.log(err);
            });
    }, [params.id]);

    function updateAssignment(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("_id", params.id);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("marks", marks);
        formData.append("dueDate", dueDate);
        if (file) {
            formData.append("file", file);
        }

        ApiServices.TeacherUpdateAssignment(formData)
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
            {/* Update Assignment */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Update Assignment
                        </h6>
                        <h1 className="mb-5">Enter Details to Update Assignment</h1>
                    </div>

                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={updateAssignment}>
                                <div className="row g-3">
                                    {/* Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Enter Assignment Title"
                                                required
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                            <label htmlFor="title">Title</label>
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
                                            <label htmlFor="description">Description</label>
                                        </div>
                                    </div>

                                    {/* Marks */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="marks"
                                                placeholder="Enter Marks"
                                                required
                                                value={marks}
                                                onChange={(e) => setMarks(e.target.value)}
                                            />
                                            <label htmlFor="marks">Marks</label>
                                        </div>
                                    </div>

                                    {/* Due Date */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="dueDate"
                                                required
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e.target.value)}
                                            />
                                            <label htmlFor="dueDate">Due Date</label>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Upload New File</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="file"
                                            
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Update Assignment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Assignment */}
        </>
    );
}
