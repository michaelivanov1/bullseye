import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {

    return (
        <div className="p-8 h-screen border-t border-opacity-20 border-white" style={{ height: '10vh' }}>
            <div className="w-full text-center flex justify-between items-center">
                <h1 className="text-subheader flex-grow">&copy; Bullseye. 2024</h1>
                <AiFillGithub size="2.0rem" />
            </div>
        </div>
    );
}

export default Footer;