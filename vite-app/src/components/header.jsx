
import styles from './header.module.css';



const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div className={styles.logo_container}>
                <a class="navbar-brand" href="#">
                    <img src="./src/assets/logo.png" alt="Bootstrap" className={styles.logo}></img>
                </a>

            </div>

            <div>

                
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Meet the Team</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href = "#">Contact Us</a>
                    </li>
                </ul>
                </div>
                
            </div>
            
        </div>
    </nav>
  );
}

export default Header;