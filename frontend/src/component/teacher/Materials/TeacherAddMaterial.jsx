import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function TeacherAddMaterial() {
    //Make State
    const [teacherid, setTeacherId] = useState("")
    const [classid, setClassId] = useState("")
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")

    var nav = useNavigate()
    

    function handleForm(e) {
        e.preventDefault()

        // console.log(teacherid, classid, title, file, description)

        let data = {
            teacherid : teacherid,
            classid : classid,
            title : title,
            file : file,
            description : description

        }
        ApiServices.TeacherAddMaterial(data)
                    .then((res) => {
                        console.log(res.data)
                        if(res.data.success){
                            toast.success(res.data.message) 
        
                            setTeacherId("")
                            setClassId("")
                            setTitle("")
                            setFile("")
                            setDescription("")
                            
        
                            nav("/teacher/teacheraddmaterial")
        
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

                                    {/* Select Teacher */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="teacher" className="form-select" required
                                            value={teacherid}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}>
                                                <option value="">-- Select Teacher --</option>
                                                <option value="khurana">Mr. Khurana</option>
                                                <option value="khan">Mr. Khan</option>
                                                <option value="john">John</option>
                                                <option value="mohinder">Mohinder</option>
                                            </select>
                                            <label htmlFor="teacher">Teacher</label>
                                        </div>
                                    </div>

                                    {/* Select Class */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="class" className="form-select" required
                                            value={classid}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}>
                                                <option value="">-- Select Class --</option>
                                                <option value="react">React</option>
                                                <option value="javascript">JavaScript</option>
                                                <option value="java">Java</option>
                                            </select>
                                            <label htmlFor="class">Class</label>
                                        </div>
                                    </div>

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
                                                    setName(e.target.value)
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
                                                    setName(e.target.value)
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
                                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
                                            required 
                                            onChange={(e) => {
                                                    file(e.target.files[0])
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
