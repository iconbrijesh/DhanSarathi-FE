export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: "#ffffff", color: "#424242" }}

        >
            <div class="container-fluid">
                <a class="navbar-brand p-2" href="#">
                    <img src="images/logo.svg" alt="logo" style={{ width: "25%" }} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Signup</a>
                            </li>
                          
                             <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#">Support</a>
                            </li>

                            



                        </ul>

                    </form>
                </div>
            </div>
        </nav>


    );

}