import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ParticlesJs from "../components/ParticlesJs";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Title from "../components/Title";

function MyApp({ Component, pageProps }) {

  return <>
    <Title title={"Sikal | Full-Stack Developer"} />
    <ParticlesJs />
    <main className={"dark:bg-black h-screen overflow-hidden z-10"}>
      <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
      <BottomNav />
      {/*{path !== "/works" && <BottomNav />}*/}
    </main>
  </>
}

export default MyApp
