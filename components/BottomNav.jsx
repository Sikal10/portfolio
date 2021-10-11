import {FaTwitter, FaLinkedinIn, FaGithub, FaCodepen} from "react-icons/fa";
import {BsLightbulbOff} from "react-icons/bs";
import useDarkMode from "../helpers/useDarkMode";
import {FaRegLightbulb} from "react-icons/fa";


const BottomNav = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <section className={"flex relative justify-between py-3 items-center bg-[#4c4f65] dark:bg-[#15151e]"}>
            <article className={"md:ml-8 space-x-5 md:space-x-10 -bottom-[1.5vh] md:-bottom-1 flex px-3 relative justify-start items-center"}>
                {/*bottom*/}
                <a rel="noreferrer" target={"_blank"} href={"https://www.twitter.com/sikal_sikal"}>
                        <FaTwitter className={"nav-icon hover:text-blue-400 transition cursor-pointer duration-200 ease"} />
                </a>
                <a rel="noreferrer" target={"_blank"}  href={"https://www.linkedin.com/in/sikal_sikal"}>
                        <FaLinkedinIn className={"nav-icon hover:text-blue-400 transition cursor-pointer duration-200 ease"} />
                </a>
                <a rel="noreferrer" target={"_blank"} href={"https://www.github.com/sikal10"}>
                        <FaGithub className={"nav-icon hover:text-blue-400 transition cursor-pointer duration-200 ease"} />
                </a>
                <a rel="noreferrer" target={"_blank"} href={"https://www.codesandbox.io/u/sikal_sikal"}>
                        <FaCodepen className={"nav-icon hover:text-blue-400 transition cursor-pointer duration-200 ease"} />
                </a>
            </article>
            <div className={"md:hidden items-end"} onClick={toggleDarkMode}>
                {darkMode ? <FaRegLightbulb className={"icon"} /> : <BsLightbulbOff className={"icon"} /> }
            </div>
        </section>
    );
};

export default BottomNav;