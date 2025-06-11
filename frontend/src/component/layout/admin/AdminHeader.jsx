import { Link, useNavigate } from "react-router-dom";

export default function AdminHeader() {

    const nav = useNavigate()

    function logout(){
        sessionStorage.clear()
        nav("/")
    }

    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a
                    href="index.html"
                    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
                >
                    <h2 className="m-0 text-primary">
                        <i className="fa fa-book me-3" />
                        Learnix
                    </h2>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="" className="nav-item nav-link active">

                            Dashboard
                        </Link>


                        <div className="nav-item dropdown">
                            <Link
                                to=""
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Teachers
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to="addteacher" className="dropdown-item">
                                    Add Teacher
                                </Link>
                                <Link to="allteacher" className="dropdown-item">
                                    All Teacher
                                </Link>

                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <Link
                                to=""
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Class
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to="addclass" className="dropdown-item">
                                    Add Class
                                </Link>
                                <Link to="allclass" className="dropdown-item">
                                    All Class
                                </Link>

                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <Link
                                to=""
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Student
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to="addstudent" className="dropdown-item">
                                    Add Student
                                </Link>
                                <Link to="allstudent" className="dropdown-item">
                                    All Student
                                </Link>

                            </div>
                        </div>

                        

                        <Link to="adminchangepassword" className="nav-item nav-link active">
                            Change-Password
                        </Link>


                    </div>
                    <button className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" onClick={logout}>
                        Logout
                        <i className="fa fa-arrow-right ms-3" />
                    </button>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}