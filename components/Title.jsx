import Head from "next/head";

const Title = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="portfolio-sikal10.vercel.app"/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
    );
};

export default Title;