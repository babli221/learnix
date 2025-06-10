import { useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function TeacherAddAnnouncement() {

    //Make State
    
    const [classid, setClassId] = useState("")
    const [teacherid, setTeacherId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")

    var nav = useNavigate()
            
        
            function handleForm(e) {
                e.preventDefault()
        
                // console.log(classid, teacherid, title, description, file)
        
                let data = {
                    classId : classid,
                    teacherId : teacherid,
                    title : title,
                    description : description,
                    file : file
        
                }
                ApiServices.TeacherAddAnnouncement(data)
                            .then((res) => {
                                console.log(res.data)
                                if(res.data.success){
                                    toast.success(res.data.message) 
                
                                    
                                    setClassId("")
                                    setTeacherId("")
                                    setTitle("")
                                    setDescription("")
                                    setFile("")
                                    
                                    
                
                                    nav("/teacher/teacheraddannouncement")
                
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
            {/* Add Announcement Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Announcement
                        </h6>
                        <h1 className="mb-5">Enter Details of New Announcement</h1>
                    </div>

                    <div className="row g-4 justify-content-center d-flex">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
                                <div className="row g-3">

                                    {/* Title */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="announcementTitle"
                                                placeholder="Enter Announcement Title"
                                                required
                                                value={title}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="announcementTitle">Title</label>
                                        </div>
                                    </div>

                                    {/* Class Selection */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="announcementClass" className="form-select" required
                                            value={classid}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}>
                                                <option value="">-- Select Class --</option>
                                                <option value="react">React</option>
                                                <option value="java">Java</option>
                                                <option value="javascript">JavaScript</option>
                                            </select>
                                            <label htmlFor="announcementClass">Class</label>
                                        </div>
                                    </div>

                                    {/* Teacher Selection */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select id="announcementTeacher" className="form-select" required
                                            value={teacherid}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}>
                                                <option value="">-- Select Teacher --</option>
                                                <option value="khurana">Mr Khurana</option>
                                                <option value="khan">Mr Khan</option>
                                                <option value="john">John</option>
                                                <option value="mohinder">Mohinder</option>
                                            </select>
                                            <label htmlFor="announcementTeacher">Teacher</label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="announcementDescription"
                                                placeholder="Enter Description"
                                                style={{ height: '100px' }}
                                                value={description}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            ></textarea>
                                            <label htmlFor="announcementDescription">Description</label>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="col-12">
                                        <label className="form-label fw-bold">Attach File (if any)</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="announcementFile"
                                            accept=".pdf,.doc,.docx,.jpg,.png"
                                            onChange={(e) => {
                                                    file(e.target.files[0])
                                                }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Announcement
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Announcement Section */}
        </>
    );
}
