const Skills = () => {
    return (
        <main className={"flex flex-col md:flex-row h-[81vh]"}>
            {/*left*/}
            <section className={"flex-1 md:ml-10 mt-20 md:mt-0 flex items-center justify-center"}>
                {/*leftwrapper*/}
                <article className={"md:px-[50px] px-[30px] space-y-5 mb-4"}>
                    <h2 className={"md:text-5xl text-4xl font-serif font-bold tracking-wider dark:text-[#e3e3e5] text-gray-500 font-serif"}>MYSKILLSET</h2>
                    <p className={"skills-p"}>The main area of my expertise is frontend and backend development and everything related to this side of the web.
                        HTML, CSS, JS (ES5, ES6), building small & medium Web Apps,
                        React.js, Node,Go(Golang), and building features rich content, animations, and just coding layouts.
                    </p>
                    <p className={"skills-p"}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        As of late, I've also been dabbling in some newer technologies like React Native. More than anything,
                        I am always eager to learn and adapt to the ever-changing facets of the web.
                    </p>
                </article>
            </section>
            {/*right*/}

            <section className={"flex-1 flex flex-col justify-center items-center space-y-5"}>
                <section className={"h-[150px] overflow-hidden"}>
                    <div className={"animate-about text-purple-500 uppercase"}>
                        <p className={"skills"}>HTML 5</p>
                        <p className={"skills"}>CSS 3</p>
                        <p className={"skills"}>JavaScript</p>
                        <p className={"skills"}>React</p>
                        <p className={"skills"}>NextJS</p>
                        <p className={"skills"}>Tailwindcss</p>
                        <p className={"skills"}>Node js</p>
                        <p className={"skills"}>Mongodb</p>
                        <p className={"skills"}>Express</p>
                        <p className={"skills"}>Redux</p>
                        <p className={"skills"}>Git</p>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Skills;