import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function TeacherAddAssignment() {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")
    const [marks, setMarks] = useState("")
    const [duedate, setDueDate] = useState("")

    var nav = useNavigate()

    function handleForm(e) {
        e.preventDefault()

        console.log(file)

        const formData = new FormData();
        formData.append("teacherId", sessionStorage.getItem("teacherId"))
        formData.append("classId", sessionStorage.getItem("classId"))
        formData.append("title", title)
        formData.append("marks", Number(marks)) // ✅ Fix: ensure number
        formData.append("dueDate", duedate)     // ✅ Fix: use date string
        formData.append("description", description)
        formData.append("file", file)

        ApiServices.TeacherAddAssignment(formData)
            .then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message)

                    setTitle("")
                    setDescription("")
                    setMarks("")
                    setDueDate("")
                    setFile(null)

                    nav("/teacher/teacheraddassignment")
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong")
                console.log("Error Details:", err.response?.data)
            })
    }

    return (
        <>
            {/* Add Assignment */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Assignment
                        </h6>
                        <h1 className="mb-5">Enter Assignment Details</h1>
                    </div>

                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
                                <div className="row g-3">

                                    {/* Assignment Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Assignment Title"
                                                required
                                                value={title}
                                                onChange={(e) => {
                                                    setTitle(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="title">Assignment Title</label>
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
                                                onChange={(e) => {
                                                    setDescription(e.target.value)
                                                }}
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
                                                placeholder="Total Marks"
                                                required
                                                value={marks}
                                                onChange={(e) => {
                                                    setMarks(e.target.value)
                                                }}
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
                                                placeholder="Due Date"
                                                required
                                                value={duedate}
                                                onChange={(e) => {
                                                    setDueDate(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="dueDate">Due Date</label>
                                        </div>
                                    </div>

                                    {/* Upload File */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold">Upload Assignment File</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="file"
                                            
                                            required
                                            onChange={(e) => {
                                                setFile(e.target.files[0])
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Assignment
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
