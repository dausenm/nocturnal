import logo from '../assets/logo.png'; // Import the logo


function Header() {
    return (
        <header>
            <img src={logo} alt="Nocturnal Tavern Logo" className="header-logo" />
        </header>
    );
}

export default Header;
