import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function TeacherAddMaterial() {
    //Make State

    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")

    var nav = useNavigate()


    function handleForm(e) {
        e.preventDefault()

        console.log(file)

        // let data = {
        //     teacherId: sessionStorage.getItem("teacherId"),
        //     classId: sessionStorage.getItem("classId"),
        //     title: title,
        //     file: file,
        //     description: description

        // }

        const formData = new FormData();
        formData.append("teacherId", sessionStorage.getItem("teacherId"));
        formData.append("classId", sessionStorage.getItem("classId"));
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", file); // ✅ Correct way to send file


        ApiServices.TeacherAddMaterial(formData)
            .then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message)



                    setTitle("")

                    setDescription("")


                    nav("/teacher/teacheraddmaterial")

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
            {/* Add Material */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Material
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Material</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
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
                                                onChange={(e) => {
                                                    setTitle(e.target.value)
                                                }}
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
                                                value={description}
                                                onChange={(e) => {
                                                    setDescription(e.target.value)
                                                }}
                                                style={{ height: '100px' }}
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

                                            required

                                            onChange={(e) => {
                                                setFile(e.target.files[0])
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Material
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Material */}
        </>
    );
}
