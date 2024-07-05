"use client";

import Button from "@/components/commonComponents/button/Button";
import Link from "next/link";

const NoTickets = () => {
  return (
    <main
      className={
        "flex flex-col justify-center items-center px-2  h-svh box-border"
      }
    >
      <div className={"font-black text-2xl"}>All tickets are sold out</div>
      <div className={"text-center max-w-2xl"}>
        We regret to inform you that, at this time, all tickets have been sold
        out. We appreciate your interest and apologize for any inconvenience
        this may cause. Please check back later for any potential availability.
      </div>
      <div className={"mt-2"}>
        <Link href={"/"}>
          <Button label={"GO BACK"} />
        </Link>
      </div>
    </main>
  );
};

export default NoTickets;
