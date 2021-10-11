import Head from "next/head";

const Title = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Sikal's personal portfolio website"/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
    );
};

export default Title;