import { Link } from "react-router-dom";

const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <div>
                <a className="logo" href=""><span>frist</span> blog</a>
            </div>    
            <ul  className="link">
                    <li><Link to="/" className="link">home</Link></li>
                    <li><Link to="/add" className="link">Add</Link></li>

            </ul>

        </nav>

        
     );
}
 
export default Navbar;
