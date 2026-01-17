import Image from "next/image";
import Wrapper from "../common/wrapper";
import { HeaderConfig } from "@/config/header";
import Link from "next/link";
import { Button } from "../ui/button";
import GetStartedButton from "../auth/get-started";
import { getUserSession } from "@/lib/isAuthorized";

const Header = async() => {
  const user=await getUserSession()


  return (
    <header className="flex font-host w-full min-w-screen  justify-center h-20 backdrop-blur-md">
      <Wrapper className="h-full flex items-center justify-between">
        <Link href="/" className="flex">
          <Image
            src="/assets/logo.webp"
            width={50}
            height={50}
            alt="Logo"
            className="size-6.5"
          />
          <p className="text-neutral-900 font-sora text-2xl font-semibold tracking-tighter">
            AIVIO
          </p>
        </Link>
        <div className="flex gap-12">
          {HeaderConfig?.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-neutral-800 cursor-pointer text-base tracking-tight"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {
          user?
          <Link href="/dashboard" className="bg-orange-500 h-8.75 w-36  text-white cursor-pointer text-base tracking-tight rounded-md hover:bg-orange-600 gap-2 flex items-center justify-center">
            Dashboard
          </Link>
          :
        <div className="flex gap-4">
       
          <Button className=" bg-zinc-200  ounded-full cursor-pointer text-neutral-800 text-base tracking-tight hover:bg-neutral-300 rounded-full">
            Login
          </Button>
          <GetStartedButton/>
        </div>
   }
      </Wrapper>
    </header>
  );
};

export default Header;
