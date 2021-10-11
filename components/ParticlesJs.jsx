import Particles from "react-particles-js";

const ParticlesJs = () => {

    const particlesParam = {
        particles: {
            color: {
                value: '#778899'
            },
            "number": {
                "value": 60,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 10,
                "random": false
            },
            "move": {
                "direction": "random",
                "out_mode": "out"
            },
            "line_linked": {
                "enable": false
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "remove"
                }
            },
            "modes": {
                "remove": {
                    "particles_nb": 10
                }
            }
        }
    }

    return (
        <div className={""}>
            {/*<Particles className={"h-screen fixed top-0 bottom-0 left-0 right-0"} params={particlesParam} />*/}
            <Particles className={"h-screen absolute top-0 bottom-0 left-0 right-0"} params={particlesParam} />
        </div>
    );
};

export default ParticlesJs;