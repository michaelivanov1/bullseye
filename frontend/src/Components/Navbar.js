const Navbar = () => {
    return (
        <nav className="bg-primary p-14">
            <div className="mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">My Website
                        <img src="../images/logo.png"/>
                    </div>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white text-2xl">Home</a></li>
                        <li><a href="#" className="text-white text-2xl">About</a></li>
                        <li><a href="#" className="text-white text-2xl">Services</a></li>
                        <li><a href="#" className="text-white text-2xl">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;