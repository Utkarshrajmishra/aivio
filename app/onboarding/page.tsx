"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Line from "@/components/svg/line";
import OnboardingForm from "@/components/onboarding/form";
import Indexing from "@/components/onboarding/indexing";
import Loader from "@/components/common/loader";

const OnBoarding = () => {
  const [isMetaData, setIsMetaData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const resp = await fetch("/api/get-metadata");
        const data = await resp.json();
        setIsMetaData(data.exists);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMetaData();
  }, []);

  if (isLoading) {
    return (
      <section className="h-screen w-screen overflow-hidden bg-zinc-50">
        <Loader />
      </section>
    );
  }

  return (
    <section className="bg-zinc-50  overflow-hidden  font-sans text-neutral-800 flex items-center justify-center w-screen h-screen">
      {!isMetaData ? (
        <div className="flex z-50 bg-white border border-neutral-300 rounded-xl w-180 h-100 overflow-hidden">
          <div className="relative flex items-center justify-center  w-[40%] ">
            <Image
              src="/assets/stepper.jpg"
              alt="Stepper"
              fill
              className="object-cover relative"
            />
            <div className="absolute h-100 top-9 left-9 right-9">
              <Indexing />
            </div>
          </div>

          <div className="w-[60%] relative h-full p-8 flex overflow-hidden flex-col justify-between">
            <div>
              <Line className="absolute -top-40  -right-60 opacity-50 z-10" />
              <Line className="absolute -top-90 -left-70 opacity-50 z-10" />
              <Line className="absolute -bottom-90 -left-80 opacity-50 z-10" />
            </div>
            <div className="z-100 relative h-full flex overflow-hidden flex-col justify-between">
              <OnboardingForm />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default OnBoarding;
