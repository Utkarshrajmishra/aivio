import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-zinc-50 flex justify-center  h-screen w-full">
<div className="fixed z-100">
<Header/>
</div>
    <Hero/>
    </section>
  );
}
