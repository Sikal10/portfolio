import Link from "next/link";
import {BsPerson, BsCodeSlash, BsLightbulbOff} from "react-icons/bs";
import {MdOutlineForwardToInbox, MdWorkOutline} from "react-icons/md";
import {TiHomeOutline} from "react-icons/ti";
import {FaRegLightbulb} from "react-icons/fa";
import useDarkMode from "../helpers/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <section className={"md:flex items-center bg-[#4c4f65] dark:bg-[#15151e] mt-1 md:justify-between relative"}>
            <div onClick={toggleDarkMode} className={"hidden md:flex"}>
                {darkMode ? <FaRegLightbulb className={"ml-10 text-4xl text-white cursor-pointer"} /> : <BsLightbulbOff className={"ml-10 text-4xl text-white cursor-pointer"} /> }
            </div>

            <article className={"flex space-x-5 md:space-x-0 mt-1 p-3 justify-end items-center"}>
                {/*top*/}
                <Link href={"/"}>
                    <div className={"nav-item group"}>
                        <TiHomeOutline className={"nav-icon"} />
                        <button className={"md:nav-text hidden"}>Home</button>
                    </div>
                </Link>
                <Link href={"/about"}>
                    <div className={"nav-item group"}>
                        <BsPerson className={"nav-icon"} />
                        <button className={"md:nav-text hidden"}>About</button>
                    </div>
                </Link>
                <Link  href={"/skills"}>
                    <div className={"nav-item group"}>
                        <BsCodeSlash className={"nav-icon"} />
                        <button className={"md:nav-text hidden"}>Skills</button>
                    </div>
                </Link>
                <Link href={"works"}>
                    <div className={"nav-item group"}>
                        <MdWorkOutline className={"nav-icon"} />
                        <button className={"md:nav-text hidden"}>Works</button>
                    </div>
                </Link>
                <Link href={"/contact"}>
                    <div className={"nav-item group md:w-[80px]"}>
                        <MdOutlineForwardToInbox className={"nav-icon"} />
                        <button className={"md:nav-text hidden"}>Contact</button>
                    </div>
                </Link>
            </article>

        </section>
    );
};

export default Navbar;