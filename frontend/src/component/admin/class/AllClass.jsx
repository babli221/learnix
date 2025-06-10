import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function AllClass() {

    const [allClasses, setAllClasses] = useState([])
    
        // --------------------- All API ---------------------
    
        function fetchClasses(){
             ApiServices.AllClass()
                .then((res) => {
                    // console.log(res)
                    if (res.data.success) {
                        // toast.success("All Teachers Fetched Successfully")
                        setAllClasses(res?.data?.data)
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
           fetchClasses()
        }, [])
    
        // --------------------- Delete API ---------------------
    
        function deleteClass(id){
            // console.log(id)
    
            let data ={
                _id : id,
                status : "false" 
            }
    
            ApiServices.DeleteClass(data)
            .then((res) => {
                   
                    if (res.data.success) {
                        toast.success("Class Deleted Successfully!")
                        fetchClasses()
                        
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
    return (
        <>
        {/* All Class */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">All Class</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S No.</th>
                                        <th scope="col">ClassName</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">TeacherName</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {allClasses.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{el?.name}</td>
                                                <td>{el?.description}</td>
                                                <td>{el?.teacherId?.name}</td>
                                                <td>{el?.classLink}</td>
                                                
                                                <td>{el?.status ? "Active" : "Inactive"}</td>
                                                <td>{el?.createdAt}</td>
                                                <td>
                                                    <Link to="/admin/updateclass" className="btn btn-success" >
                                                        <i className="fa-solid fa-pen-to-square" />
                                                    </Link>

                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>{
                                                        deleteClass(el._id)
                                                    }}> 
                                                        <i className="fa-solid fa-trash" />

                                                    </button>
                                                </td>

                                            </tr>
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}