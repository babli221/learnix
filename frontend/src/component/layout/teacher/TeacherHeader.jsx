import { Link } from "react-router-dom";

export default function TeacherHeader() {
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



                        <div className="nav-item dropdown">
                           
                             <Link to="" className="nav-item nav-link active">
                            Home
                        </Link>
                          
                        </div>

                        <div className="nav-item dropdown">
                            <Link
                                to=""
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Profile Update
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to="teacherprofileupdate" className="dropdown-item">
                                    Profile-Update
                                </Link>


                            </div>
                        </div>

                        

                        <div className="nav-item dropdown">
                            <Link
                                to=""
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Change-Password
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to="changepassword" className="dropdown-item">
                                    Change-Password
                                </Link>


                            </div>
                        </div>
















                    </div>
                    <Link to="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                        Logout
                        <i className="fa fa-arrow-right ms-3" />
                    </Link>
                </div>
            </nav>
            {/* Navbar End */}

        </>
    )
}