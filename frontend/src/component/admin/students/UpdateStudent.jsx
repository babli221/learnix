import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function UpdateStudent() {
  const params = useParams();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [className, setClassName] = useState("");

  const [allClasses, setAllClasses] = useState([]);

  // --------------------- All API ---------------------
  function fetchClasses() {
    ApiServices.AllClass()
      .then((res) => {
        if (res.data.success) {
          setAllClasses(res?.data?.data);
        } else {
          toast.error(res.data?.message || "Failed to fetch class list");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.log(err);
      });
  }

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    ApiServices.SingleStudent({ _id: params.id })
      .then((res) => {
        if (res.data.success) {
          setName(res.data.data.name);
          setContact(res.data.data.contact);
          setAddress(res.data.data.address);
          setQualification(res.data.data.qualification);
          setClassName(res.data.data.class); 
        } else {
          toast.error(res.data?.message || "Failed to load student");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.log(err);
      });
  }, [params.id]);

  function updateStudent(e) {
    e.preventDefault();

    const data = {
      _id: params.id,
      name,
      contact,
      address,
      qualification,
      class: className,
    };

    ApiServices.UpdateStudent(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data?.message || "Student updated successfully");
          nav("/admin/allstudent");
        } else {
          toast.error(res.data?.message || "Update failed");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.log(err);
      });
  }

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Update Student
            </h6>
            <h1 className="mb-5">Enter New Details Of Student</h1>
          </div>
          <div className="row g-4 justify-content-center d-flex">
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={updateStudent}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                      <label>Contact</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select
                        name="class"
                        id="classSelect"
                        className="form-select"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                      >
                        <option value="">-- Select a Class --</option>
                        {allClasses.map((el) => (
                          <option key={el._id} value={el._id}>
                            {el.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="classSelect">Class</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <label>Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Qualification"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                      />
                      <label>Qualification</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Update Student
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
