import Button from "@/components/commonComponents/button/Button";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <div>
        <div className="flex justify-end pr-3 pt-3.5 pb-7">
          <Button label={"BUY TICKET"} />
        </div>
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
    </main>
  );
};

export default HomePage;
