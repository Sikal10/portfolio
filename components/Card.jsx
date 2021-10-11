import Link from "next/link";

const Card = ({item}) => {
    const {img, link} = item;

    return (
        <section className={"bg-white overflow-hidden rounded-lg relative h-[40vh] shadow-md cursor-pointer"}>
            {/*top*/}
            <article className={"flex space-x-1 bg-gray-300 h-[20px] items-center sticky z-10 "}>
                {/*circles*/}
                <div className={"ml-1 w-[6px] h-[6px] bg-white rounded-full "}/>
                <div className={"w-[6px] h-[6px] bg-white rounded-full "}/>
                <div className={"w-[6px] h-[6px] bg-white rounded-full "}/>

            </article>
            {/*bottom*/}
            <Link href={link}>
               <article className={"hover:brightness-75 duration-100"}>
                   <img src={img} className={"hover:translate-y-[-50%] hover:brightness-75 duration-1000 transition ease object-cover h-full w-full"} alt=""/>
               </article>
            </Link>
        </section>
    );
};

export default Card;