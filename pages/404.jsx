import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Button from "@/components/button";
import Link from "next/link";
import styles from "@/styles";
import Image from "next/image";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Custom404 = () => {
  return (
    <div
      className={`${poppins.variable} ${styles.flexCenter} ${styles.xPaddings} bg-tertiary w-full h-[100vh]`}
    >
      <div className="z-10">
        <div className="flex flex-1 pb-6">
          <Image src="/404.png" width={740} height={220} quality={100} alt="not found" />
        </div>
        <div className="flex flex-1 justify-center items-center pb-6">
          <p className=" max-w-[600px] text-dimWhite font-poppins font-normal text-[24px] leading-[140%] text-center">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-1 justify-center  pb-6">
          <Link href="/" passHref>
            <Button appearance={"default"}> Go Home</Button>
          </Link>
        </div>
      </div>
      <div className="z-0">
        <div className="bg-primary-radial-gradient sm:w-[130px] sm:h-[130px] w-[80px] h-[80px] rounded-full absolute lg:top-[30%] lg:left-[15%] top-[25%] left-[15%]" />
        <div className="bg-primary-radial-gradient sm:w-[130px] sm:h-[130px] w-[80px] h-[80px] rounded-full absolute lg:top-[15%] lg:left-[75%] top-[20%] left-[65%]" />
        <div className="bg-primary-radial-gradient sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] rounded-full absolute top-[75%] left-[40%]" />
        <div className="bg-primary-radial-gradient sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] rounded-full absolute top-[75%] left-[80%]" />
        <div className="bg-primary-radial-gradient sm:w-[42px] sm:h-[42px] w-[30px] h-[30px] rounded-full absolute top-[85%] left-[18%]" />
        <div className="bg-primary-radial-gradient sm:w-[42px] sm:h-[42px] w-[30px] h-[30px] rounded-full absolute top-[85%] left-[60%]" />
        <div className="blur-gradient w-[25%] h-[25%] rounded-full absolute top-[15%] left-[5%]" />
        <div className="blur-gradient w-[25%] h-[25%] rounded-full absolute top-[65%] left-[65%]" />
      </div>
    </div>
  );
};

export default Custom404;
