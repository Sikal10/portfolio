import Image from "next/image";
import codeSikal from "../public/images/codeSikal.svg";

const About = () => {
    return (
        <main className={"flex relative overflow-y-scroll scrollbar-hide flex-col md:flex-row h-[81vh] "}>
            {/*left*/}
            <section className={"hidden md:flex flex-1 flex items-center justify-center"}>
                <div className={"w-[70%] h-[70%] relative"} >
                    <Image src={codeSikal} objectFit={"contain"} layout={"fill"} />
                </div>
            </section>
            {/*right*/}
            <section className={"md:flex-1 md:flex md:items-center md:justify-center"}>
                {/*leftwrapper*/}
                <article className={"md:p-[50px]  px-[40px] space-y-2 my-8 md:mt-0 md:space-y-5"}>
                    <h2 className={"text-gray-500 font-serif flex items-center"}><span className={"md:text-2xl dark:text-[#707493] font-bold text-4xl uppercase md:normal"}>About</span><span className={"font-bold text-4xl text-gray-600 dark:text-[#e3e3e5] md:text-6xl"}>ME</span></h2>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className={"about-p"}>Hi, I'm Abiola, a <span className={"text-[#57a3e4] font-bold"}>Full-Stack Web Developer</span>. I use an artistic approach to
                        solve problems <span className={"text-[#57a3e4] font-bold"}>Efficiently</span>.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I've been professionally connected with the web development industry and information technology for quite
                        some years.
                        Effectiveness in the industry today requires an acute parity between <span className={"text-[#57a3e4] font-bold"}>development</span> and
                        <span className={"text-[#57a3e4] font-bold"}> artistic</span> tastes.
                    </p>

                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className={"about-p"}>I'm Interested in the entire <span className={"text-[#57a3e4] font-bold"}> Frontend</span>  and
                        <span className={"text-[#57a3e4] font-bold"}> Backend</span>  spectrum and working on ambitious projects with positive people.
                        I admire simple content structure, clean design models, and <span className={"text-[#57a3e4] font-bold"}> responsive</span>  interactions.
                        I enjoy coding from scratch and enjoy bringing concepts and designs to life in the <span className={"text-[#57a3e4] font-bold"}> browser</span>.</p>

                    <p className={"md:w-[70%] dark:text-[#707493] text-gray-500 md:text-md"}>I enjoy transforming ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences.</p>
                </article>
            </section>

        </main>
    );
};

export default About;