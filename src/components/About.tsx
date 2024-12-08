import Image from "next/image";
import BoxReveal from "./ui/box-reveal";

export async function About() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center">
      <div className="h-full max-w-lg items-center justify-center overflow-hidden p-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2rem] text-[#a65a31] leading-5 font-bold py-3">
            Hello I am<span className="text-[#a65a31]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3rem] leading-10 font-bold py-3">
            Imarie Macaraig <span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-10 text-sm font-light text-zinc-500 tracking-wider">
            Welcome to my portfolio! Explore my UI/UX design projects,I am
            highly passionate about UI/UX Design! discover the skills that drive
            my work, and find ways to get in touch with me for potential
            collaborations or opportunities.
          </h2>
        </BoxReveal>
      </div>

      <div className="md:w-1/2 md:p-5">
        <Image src="/img/about.png" width={500} height={500} alt="box" />
      </div>
    </div>
  );
}
