import { Bot, BotIcon } from "lucide-react";
import Wrapper from "../common/wrapper";
import { Button } from "../ui/button";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="font-host flex justify-center py-20">
      <Wrapper>
        <div className="max-w-5xl mt-16">
          <h1 className="text-neutral-800 text-7xl font-sora  tracking-tight">
            AI chatbots for exceptional customer experiences.
          </h1>
          <p className="text-neutral-500 font-light tracking-tight text-2xl mt-8">
            Add a powerful AI chatbot widget to your website and start engaging
            visitors instantly. Answer questions in real time, capture qualified
            leads, and guide users with human-like conversations.
          </p>
          <div className="mt-8 gap-4 flex">
            <Button className="text-md  bg-orange-500 text-white hover:bg-orange-500  h-12 w-32 rounded-full">
              Create a bot
            </Button>
            <Button className="text-md  bg-zinc-200 hover:bg-zinc-200/70 text-neutral-800 h-12  w-32 rounded-full">
              How it work?
            </Button>
          </div>
        </div>
        <div className="mt-10">
  <div className="relative w-full  p-10 h-137.5 rounded-3xl overflow-hidden">
    {/* Background Image */}
    <Image
      src="/hero.jpg"
      fill
      alt="hero-bg"
      className="object-cover"
    />

    {/* Overlay Image */}
    <Image
      src="/image.png"
      width={400}
      height={400}
      alt="overlay"
      className="absolute w-full h-full  rounded-3xl shadow-xl"
    />
  </div>
</div>


      </Wrapper>
    </main>
  );
};

export default Hero;
