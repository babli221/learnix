import { Link } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function AllTeacher() {
    


    const [allTeachers, setAllTeachers] = useState([])

    // --------------------- All API ---------------------

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

    // --------------------- Delete API ---------------------

    function deleteTeacher(id){
        // console.log(id)

        let data ={
            _id : id,
            status : "false" 
        }

        ApiServices.DeleteTeacher(data)
        .then((res) => {
               
                if (res.data.success) {
                    toast.success("Teacher Deleted Successfully!")
                    fetchTeachers()
                    
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
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2">
                            <h2 className="my-5">All Teachers</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>


                                    </tr>
                                </thead>
                                <tbody>

                                    {allTeachers.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{el?.name}</td>

                                                <td>{el?.email}</td>
                                                <td>{el?.status ? "Active" : "Inactive"}</td>
                                                <td>
                                                    <Link to={"/admin/updateteacher/"+ el._id}  className="btn btn-success" >
                                                        <i className="fa-solid fa-pen-to-square" />
                                                    </Link>

                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>{
                                                        deleteTeacher(el._id)
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