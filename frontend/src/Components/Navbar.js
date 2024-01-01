const Navbar = () => {
    return (
        <nav className="bg-primary p-14">
            <div className="mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">My Website</div>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Services</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;