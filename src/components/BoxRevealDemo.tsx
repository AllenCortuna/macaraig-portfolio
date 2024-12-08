import Image from "next/image";
import BoxReveal from "./ui/box-reveal";

export async function BoxRevealDemo() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center">
      <div className="h-full max-w-lg items-center justify-center overflow-hidden p-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3rem] leading-10 font-bold py-3">
            Introduction to Computing
            <span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-10 text-sm font-light text-zinc-500 tracking-wider">
            Introduction to Computing examines the fundamental ideas of
            technology and computers. It covers fundamental subjects such
            operating systems, networking, data management, computer hardware
            and software, and basic programming. Currently enhancing my skills
            and deepening my knowledge in Ul/ UX Design. Actively learning
            design principles, prototyping, and user research to create
            impactful experiences. Passionate about crafting functional,
            intuitive, and user-friendly interfaces that meet real-world needs.
          </h2>
        </BoxReveal>
      </div>

      <div className="md:w-1/2 md:p-20">
        <Image src="/img/home.png" width={500} height={500} alt="box" / >
      </div>
    </div>
  );
}
