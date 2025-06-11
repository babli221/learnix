import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { toast } from "react-toastify";

export default function UpdateStudent() {
  const params = useParams();
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(""); 

  useEffect(() => {
    ApiServices.SingleStudent({ _id: params.id })
      .then((res) => {
        if (res.data.success) {
          setName(res.data.data.name);
          setContact(res.data.data.contact);
          setGender(res.data.data.gender);
          setDob(res.data.data.dob);
          setAddress(res.data.data.address);
          setPreview(res.data.data.image); 
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
  }, [params.id]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  function updateStudent(e) {
    e.preventDefault();

    const data = {
      _id: params.id,
      name,
      contact,
      gender,
      dob,
      address,
      image, 
    };

    ApiServices.UpdateStudent(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          nav("/admin/allstudent");
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
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="DOB"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                      <label>Date of Birth</label>
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
                    <label className="form-label">Choose Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={handleImageChange}
                    />
                    {preview && (
                      <img
                        src={preview}
                        alt="preview"
                        className="mt-2"
                        width="100"
                        height="100"
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                      />
                    )}
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
