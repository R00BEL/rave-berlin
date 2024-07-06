import Image from "next/image";
import Testimonials from "./components/testimonials/Testimonials";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import SmallBuyButton from "./components/SmallBuyButton";
import LargeBuyButton from "./components/LargeBuyButton";

import styles from "./style.module.css";

const HomePage = () => {
  return (
    <main className={"flex flex-col justify-between h-svh"}>
      <div>
        <div>
          <SmallBuyButton />
          <div className="flex justify-center">
            <div className="flex flex-col gap-2">
              <div>
                <Image
                  src="/feelTheRave.svg"
                  alt="Feel the rave Logo"
                  width={251.189}
                  height={148.8}
                  priority
                />
              </div>
              <div className="flex justify-between bg-black text-white px-2 font-black text-xs pt-px pb-1">
                <div>13/07/2024</div>
                <div>22:00</div>
              </div>
              <div>
                <Image
                  src="/berlin.svg"
                  alt="Berlin Logo"
                  width={252}
                  height={39}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Testimonials />
        </div>

        <div className="mt-8 flex flex-col gap-2.5 justify-center items-center w-full">
          <div className="px-2.5 py-1 bg-black text-white flex justify-center font-black text-xs w-svw sm:text-base">
            SECRET LOCATION // ILLEGAL EXPERIENCE // REAL BERLIN
          </div>

          <div className={"flex flex-wrap gap-2.5 w-full justify-center"}>
            <div className={styles.photo1}>
              <Image
                src={"/photo1.jpeg"}
                alt="A group of people dancing at a party with colorful lighting effects"
                fill
                sizes={"390px 200px"}
                priority
              />
            </div>
            <div className={styles.photo2}>
              <Image
                src={"/photo2.jpeg"}
                alt="A young woman dances at a party with colorful lighting effects, surrounded by other people."
                fill
                sizes={"390px 200px"}
                priority
              />
            </div>
          </div>

          <div className="px-2.5 py-1 bg-black text-white flex justify-center font-black text-xs w-full sm:text-base">
            TECHNO // DnB // HOUSE // TRANCE
          </div>
        </div>

        <div className={"flex justify-center item mt-10"}>
          <LargeBuyButton />
        </div>

        <div className="mt-12">
          <FrequentlyAskedQuestions />
        </div>
      </div>

      <div
        className={
          "flex justify-between sm:justify-center items-center bg-black px-5 py-1 mt-14 h-10 sm:p-9"
        }
      >
        <div
          className={"flex justify-between items-center sm:w-[48rem] w-full"}
        >
          <div className={"font-black text-xs sm:text-base text-white"}>
            CONTACT:
          </div>
          <div className={"font-black text-xs sm:text-base text-white"}>
            FELLTHERAVE@GMAIL.COM
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
