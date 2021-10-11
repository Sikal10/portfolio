import {useEffect} from "react";
import Image from "next/image";
import codeSikal from "../public/images/codeSikal.svg";

const Home = () => {
    useEffect(() => {
        window.addEventListener("deviceMotion", (event) => {
            console.log(event.acceleration);
        })
    }, [])
    return (
            <main className={"md:flex-row flex flex-col h-[81vh]"}>
                {/*left*/}
                <section className={"md:flex-1 md:ml-10 px-12 md:mt-10 md:flex md:items-center md:justify-center"}>
                    {/*leftwrapper*/}
                    <article className={"md:p-[50px] space-y-5 pt-[115px]"}>
                        <h2 className={"font-bold md:text-6xl text-5xl text-gray-500 tracking-wide dark:text-[#707493]"}>CODE<span className={"dark:text-[#e3e3e5]"}>SIKAL</span></h2>
                        <p className={"md:hidden text-gray-500 dark:text-[#707493] font-semibold"}>Fullstack Developer<span className={"text-[#57a3e4] font-bold"}>/</span>Node<span className={"font-bold text-[#57a3e4]"}>/</span>React</p>
                        <section className={"h-[50px] overflow-hidden hidden md:flex"}>
                            {/*content-wrapper*/}
                            <div className={"animate-move"}>
                                <p className={"h-[50px] text-2xl font-bold flex items-center text-purple-500"}>Fullstack
                                    Developer</p>
                                <p className={"h-[50px] text-2xl font-bold flex items-center text-purple-500"}>UI/UX
                                    Designer</p>
                                <p className={"h-[50px]text-2xl font-bold flex items-center text-purple-500"}>Writer</p>
                            </div>
                        </section>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={"w-[70%] hidden dark:text-[#e3e3e5] md:flex text-gray-500 text-lg font-semibold"}>Hi, I'm Abiola, a Full-Stack Web Developer. I use an artistic approach to
                            solve problems Efficiently.
                        </p>
                    </article>
                </section>
                {/*right*/}
                <section className={"flex-1 flex items-center justify-center"}>
                    <div className={"md:w-[70%] w-[50%] h-[45%] relative"} >
                        <Image src={codeSikal} objectFit={"contain"} layout={"fill"} />
                    </div>
                </section>
            </main>
    );
};

export default Home;