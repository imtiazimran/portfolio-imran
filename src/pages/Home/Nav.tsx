
const Nav = () => {
    return (
        <div className="z-[10000] bg-[#1A0B2E] fixed w-full flex justify-between py-3 px-10 text-white">
            <div>logo</div>
            <div className="flex gap-4 cursor-pointer">
                <a>Home</a>
                <a>Skills</a>
                <a>Experience</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
    );
};

export default Nav;