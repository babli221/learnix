import { useEffect, useState } from "react"
import ApiServices from "../../layout/ApiServices"
import { toast } from "react-toastify"


export default function AddClass() {

    // Make States
    const [name, setName] = useState("")
    const [teachername, setTeacherName] = useState("")
    const [description, setDescription] = useState("")
    const [classlink, setClassLink] = useState("")

    const [allTeachers, setAllTeachers] = useState([])

    function fetchTeachers(){
             ApiServices.AllTeacher()
                .then((res) => {
                    // console.log(res)
                    if (res.data.success) {
                        // toast.success("All Teachers Fetched Successfully")
                        setAllTeachers(res?.data?.data)
                        // console.log(res?.data?.data)
                    }
                    else {
                        toast.error(res.data.message)
                    }
                })
                .catch((err) => {
                    toast.error("Something Went Wrong");
                    console.log(err)
                })
        }
        //make useEffect and call that function in it.
    
        useEffect(() => {
           fetchTeachers()
        }, [])

    function handleForm(e) {
        e.preventDefault()
        //console.log(name, teachername, description, classlink)
        let data = {
            name : name,
            description : description,
            teacherId : teachername,
            classLink : classlink
        }

        ApiServices.AddClass(data)
        .then((res) => {
            console.log(res.data)
            if(res.data.success){
                toast.success(res.data.message)

                setName("")
                setTeacherName("")
                setDescription("")
                setClassLink("")

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
            {/* Add Class */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Add New Class
                        </h6>
                        <h1 className="mb-5">Enter Details Of New Class</h1>
                    </div>
                    <div className="row g-4 justify-content-center d-flex">

                        <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleForm}>
                                <div className="row g-3 ">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Name Of Class"

                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="text">Name</label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        {/* <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Name Of Teacher"
                                                value={teachername}
                                                onChange={(e) => {
                                                    setTeacherName(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="text">TeacherID</label>
                                        </div> */}
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="Description"
                                                value={description}
                                                onChange={(e) => {
                                                    setDescription(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="text">Description</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="text"
                                                placeholder="ClassLink"
                                                value={classlink}
                                                onChange={(e) => {
                                                    setClassLink(e.target.value)
                                                }}
                                            />
                                            <label htmlFor="text">ClassLink</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select name="" id="" className="form-select"  onChange={(e) => {
                                                    setTeacherName(e.target.value)
                                                }}>
                                                {allTeachers.map((el,index)=>{
                                                    return(
                                                        <>
                                                <option value={el._id}>{el.name}</option>
                                                        
                                                        </>
                                                    )
                                                })}
                                                
                                            </select>
                                            <label htmlFor="text">Teacher</label>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Add New Class
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Class */}
        </>
    )
}