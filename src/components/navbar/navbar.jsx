import '../style.css'
import './navStyle.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <h3 className='navbar-home'>HOME</h3>
            <div className='navbar-list'>
                <h4 className='navbar-list-menu'>ABOUT</h4>
                <h4 className='navbar-list-menu'>SERVICE</h4>
            </div>
        </div>
    );
};

export default Navbar;