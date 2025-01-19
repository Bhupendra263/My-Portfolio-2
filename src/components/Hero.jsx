// import { motion } from "framer-motion";
// import { styles } from "../styles";
// // import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1
//             className={`${styles.heroHeadText} text-white`}
//             style={{ fontSize: "3.5rem" }}
//           >
//             Hi, I'm <span className="text-[#915EFF]">Bhupendra</span>
//           </h1>
//           <p
//             className={`${styles.heroSubText} mt-2 text-white-100`}
//             style={{ fontSize: "1.5rem" }}
//           >
//             I specialize in problem-solving, building <br className="sm:block hidden" />
//             user-friendly web applications and managing databases
//           </p>
//         </div>
//       </div>

//       {/* Centered and Moved Down Image */}
//       <div className="absolute inset-0 flex justify-center items-center">
//         <img
//           src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/200.webp?cid=790b7611wyr7cdp75kd9lexngyta0uxuut4sk19m5onl3xfw&ep=v1_gifs_search&rid=200.webp&ct=g"
//           alt="Gaming Computer"
//           className="w-[80%] sm:w-[500px] h-auto mt-120"  // Responsive width and height
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{ fontSize: "3.5rem" }}
          >
            Hi, I'm <span className="text-[#915EFF]">Bhupendra</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{ fontSize: "1.5rem" }}
          >
            I specialize in problem-solving, building <br className="sm:block hidden" />
            user-friendly web applications and managing databases
          </p>
        </div>
      </div>

      {/* Centered and Moved Down Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/200.webp?cid=790b7611wyr7cdp75kd9lexngyta0uxuut4sk19m5onl3xfw&ep=v1_gifs_search&rid=200.webp&ct=g"
          alt="Gaming Computer"
          className="w-full sm:w-[500px] h-auto mt-[500px] max-w-[100%]"  // Responsive width and height
        />
      </div>
    </section>
  );
};

export default Hero;
