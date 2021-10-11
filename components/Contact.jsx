import contact from "../public/images/email.svg"
import Image from "next/image";
import {useRef} from "react";
import emailjs from 'emailjs-com';
import {toast} from "react-toastify";

const Contact = () => {
    const formRef = useRef();

    const sendMessage = async (e) => {
        e.preventDefault();
        const senderName = formRef.current.user_name.value;
        try {
            const response = await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_USER_ID);
            if (response.text === "OK") {
                formRef.current.reset();
                toast.success(`Hello ${senderName}. I'll get back to you ASAP.`);
            }
        } catch (err) {
            toast.error(err.text)
        }
    };


    return (
        <main className={"flex h-[81vh] relative"}>
            {/*left*/}
            <section className={"hidden md:flex flex-1 flex items-center justify-center"}>
                <article className={"relative w-[75%] h-[65%]"}>
                    <Image src={contact} layout={"fill"}/>
                </article>
            </section>

            {/*right*/}
            <section className={"flex-1"}>
                <article className={"space-y-2 md:mt-28 mt-24 p-5 md:p-10 lg:p-0"}>
                    <h3 className={"lg:text-[3.5vw] md:text-[4vw] text-4xl font-serif font-bold tracking-wider dark:text-[#e3e3e5] text-[#66697e]"}>GET<span
                        className={"text-[#57a3e4]"}>IN</span>TOUCH</h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className={"text-gray-500 font-serif text-[3vw] md:text-[1.5vw] dark:text-[#707493] lg:text-base"}>I'm
                        excited to learn about your project.</p>
                    {/*form*/}
                    <div>
                        <form className={"space-y-3"} ref={formRef} onSubmit={sendMessage}>
                            <input className={"contact-form"} required name={"user_name"} type="name" placeholder={"Name"}/>
                            <input className={"contact-form"} required name={"user_subject"} type="name"
                                   placeholder={"Subject"}/>
                            <input className={"contact-form"} required name={"user_email"} type="name" placeholder={"Email"}/>
                            <textarea rows={5} required className={"text-area"} name={"message"} placeholder={"Your Message"}/>
                            <button
                                className={"border border-gray-200 px-4 py-1 rounded-md ring-offset-1 bg-white hover:ring ring-blue-400 text-gray-600 dark:text-blue-500 font-bold"}>Send
                            </button>
                        </form>
                    </div>
                </article>
            </section>

        </main>
    );
};

export default Contact;