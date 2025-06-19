import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Magnet from "../components/Animations/Magnet/Magnet";
import { Link } from "react-scroll";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I craft scalable and efficient solutions
   that empower businesses to thrive
    in the digital landscape.`;
  return (
    <div className="">
      <section id="home" className="flex flex-col justify-end min-h-screen">
        <div className="flex flex-col justify-end min-h-screen ">

          <AnimatedHeaderSection
            subTitle={"404 No Bugs Found"}
            title={"ZAHRAN"}
            text={text}
            textColor={"text-black"}
          />
          <div className="self-end p-10 -mt-15">
            <Magnet padding={100} disabled={false} magnetStrength={5}>


              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                className="inline-block px-8 py-3 bg-black text-white rounded-full text-lg font-semibold transition-transform hover:scale-105"
              >
                View My Work
              </Link>
            </Magnet>
          </div>
        </div>
        {/* <figure
          className="absolute inset-0 -z-50"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas
            shadows
            camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          >
            <ambientLight intensity={0.5} />
            <Float speed={0.5}>
              <Planet scale={isMobile ? 0.7 : 1} />
            </Float>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 5, -9]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 3, 1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[-5, -1, -1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[10, 1, 0]}
                  scale={16}
                />
              </group>
            </Environment>
          </Canvas>
        </figure> */}
      </section>
    </div>
  );
};

export default Hero;
