import Image from "next/image";
import Testimonials from "./components/Testimonials";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import SmallBuyButton from "./components/SmallBuyButton";
import LargeBuyButton from "./components/LargeBuyButton";

const HomePage = () => {
  return (
    <main className={"flex flex-col justify-between h-svh"}>
      <div>
        <div className={"flex sm:justify-center"}>
          <div className={"sm:w-[48rem] w-full"}>
            <div className="flex justify-end pr-3 sm:pr-0 pt-3.5 pb-7">
              <SmallBuyButton />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src="/feelTheRave.svg"
                    alt="Feel the rave Logo"
                    width="0"
                    height="0"
                    sizes={"(max-width: 384px) 16rem, (max-width: 640px) 24rem"}
                    className={"w-64 sm:w-96"}
                    priority
                  />
                </div>
                <div className="flex justify-between bg-black text-white px-2 font-black text-xs sm:text-base pt-px pb-1">
                  <div>13/07/2024</div>
                  <div>22:00</div>
                </div>
                <div>
                  <Image
                    src="/berlin.svg"
                    alt="Berlin Logo"
                    width="0"
                    height="0"
                    sizes={"(max-width: 384px) 16rem, (max-width: 640px) 24rem"}
                    className={"w-64 sm:w-96"}
                    priority
                  />
                </div>
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
            <div
              className={
                "w-full max-w-96 sm:max-w-[32rem] h-52 sm:h-96 relative"
              }
            >
              <Image
                className={"bg-[lightgray] object-cover object-center"}
                src={"/photo1.jpeg"}
                alt="A group of people dancing at a party with colorful lighting effects"
                fill
                sizes="(max-width: 384px) 100vw, (max-width: 640px) 384px, 32rem"
                priority
              />
            </div>
            <div
              className={
                "w-full max-w-96 sm:max-w-[32rem] h-52 sm:h-96 relative"
              }
            >
              <Image
                className={"bg-[lightgray] object-cover object-center"}
                src={"/photo2.jpeg"}
                alt="A young woman dances at a party with colorful lighting effects, surrounded by other people."
                fill
                sizes="(max-width: 384px) 100vw, (max-width: 640px) 384px, 32rem"
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
