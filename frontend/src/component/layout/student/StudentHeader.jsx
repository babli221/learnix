import { Link, useNavigate } from "react-router-dom";

export default function StudentHeader() {

    const nav = useNavigate()

    function logout() {
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



                        <div className="nav-item dropdown">

                            <Link to="" className="nav-item nav-link active">
                                Home
                            </Link>

                        </div>

                        <Link to="studentchangepassword" className="nav-item nav-link active">
                            Student-Change-Password
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