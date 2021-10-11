import '../styles/globals.css'
import ParticlesJs from "../components/ParticlesJs";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import {useRouter} from "next/router";
import Title from "../components/Title";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  return <>
    <Title title={"Code Sikal | Full-Stack Developer"} />
    <ParticlesJs />
    <main className={"dark:bg-black h-screen overflow-hidden z-10"}>
      <Navbar />
      <Component {...pageProps} />
      <BottomNav />
      {/*{path !== "/works" && <BottomNav />}*/}
    </main>
  </>
}

export default MyApp
