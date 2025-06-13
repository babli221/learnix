import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function UpdateClass() {
  const params = useParams();
  const nav = useNavigate();

  const [className, setClassName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [description, setDescription] = useState("");
  const [classlink, setClasslink] = useState("");
  const [allTeachers, setAllTeachers] = useState([]);

  useEffect(() => {
    let data = { _id: params.id };
    
    ApiServices.SingleClass(data)
      .then((res) => {
        if (res.data.success) {
          setClassName(res.data.data.name);
          setTeacherId(res.data.data.teacherId);
          setDescription(res.data.data.description);
          setClasslink(res.data.data.classLink);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });

    //  Fetch all teachers
    ApiServices.AllTeacher()
      .then((res) => {
        if (res.data.success) {
          setAllTeachers(res.data.data);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch teachers");
      });
  }, []);

  function updateClass(e) {
    e.preventDefault();

    let data = {
      _id: params.id,
      name: className,
      teacherId: teacherId,
      description: description,
      classLink: classlink,
    };

    ApiServices.UpdateClass(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          nav("/admin/allclass");
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
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Update Class
            </h6>
            <h1 className="mb-5">Enter Details Of Update Class</h1>
          </div>
          <div className="row g-4 justify-content-center d-flex">
            <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={updateClass}>
                <div className="row g-3 ">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="className"
                        placeholder="Name Of Class"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                      />
                      <label htmlFor="className">Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select
                        name="teacher"
                        id="teacherSelect"
                        className="form-select"
                        value={teacherId}
                        onChange={(e) => setTeacherId(e.target.value)}
                      >
                        <option value="">-- Select a Teacher --</option>
                        {allTeachers.map((el) => (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="teacherSelect">Teacher</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <label>Description</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Class Link"
                        value={classlink}
                        onChange={(e) => setClasslink(e.target.value)}
                      />
                      <label>Class Link</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Update Class
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
