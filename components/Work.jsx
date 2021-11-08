import Card from "./Card";
import {projects} from "../data/data";

const Work = () => {
    return (
        <main className={"flex h-[81vh] relative overflow-y-scroll scrollbar-hide mb-2"}>
            <section className={" grid md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 py-1"}>
                {projects.map((item) => <Card item={item} key={item.id} />)}
            </section>
        </main>
    );
};

export default Work;