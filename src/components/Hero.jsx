import { motion } from "framer-motion";
import { styles } from "../styles";
// import { EarthCanvas, StarsCanvas} from './canvas';
import nishant from "../assets/logo/NishantImg.png";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// import { slideIn } from '../utils/motion';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] mx-auto">
      <div
        className={` absolute inset-0 
      top-5 max-w-7xl mx-auto
      items-start gap-5 xl:mt-12 md:flex-row flex-col md:justify-between flex overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex gap-5 md:max-w-4xl"
        >
          <div
            className="flex flex-col justify-center items-center
      mt-5"
          >
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className={`${styles.heroHeadText} flex flex-col text-white`}>
            <div className="">
              <h1>
                Hi,I&apos;m{" "}
                <span className="text-[#915eff]">Nishant Kumar Gupta</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop websites <br className="sm:block hidden" /> and web
                applications
              </p>
            </div>

            {/* github, linkdin icons  */}
            <div className=" flex gap-4 align-middle mt-4">
              <i
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/nishant-kumar-gupta-54b501257/"
                  );
                }}
                className="border-2 border-cyan-300 cursor-pointer text-cyan-300 text-[30px] hover:bg-cyan-300  hover:text-black p-2 rounded-full fa-brands fa-linkedin"
              ></i>
              <i
                onClick={() => {
                  window.open("https://github.com/Nishantwedone");
                }}
                className="border-2 border-cyan-300 cursor-pointer text-cyan-300 text-[30px] hover:bg-cyan-300  hover:text-black p-2 rounded-full fa-brands fa-github"
              ></i>
              <i
                onClick={() => {
                  window.open("https://www.instagram.com/nishant_gupta_001/");
                }}
                className="border-2 border-cyan-300 cursor-pointer text-cyan-300 text-[30px] hover:bg-cyan-300  hover:text-black p-2 rounded-full fa-brands fa-instagram"
              />
              <i
                onClick={() => {
                  window.open("https://leetcode.com/u/Nishantkumargupta26/");
                }}
                className="border-2 border-cyan-300 cursor-pointer text-cyan-300 text-[28px] hover:bg-cyan-300  hover:text-black p-2 rounded-full fa-brands fa-codepen"
              ></i>
            </div>
            <div>
              {/* resume button  */}
              <button
                className="text-white text-xl border-2 border-cyan-300 hover:bg-cyan-300 hover:text-black p-2 rounded-full"
                onClick={() => {
                  window.open("https://drive.google.com/file/d/1N5St3nTCzp93nhSuV0BUus1MvMitsCNh/view?usp=share_link");
                }}
              >
                Resume
              </button>
            </div>
          </div>
        </motion.div>
        <div className="z-10 xxs:mx-auto md:mx-0">
          <motion.img
            src={nishant}
            className="md:h-[470px] md:w-[470px] h-[300px] w-[300px] rounded-full"
            alt="Floating Image"
            animate={{
              y: [0, 24, 0],
              transition: {
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          />
        </div>
      </div>

      <div
        className="absolute xxs:bottom-10 bottom-30
      w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4
           border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
