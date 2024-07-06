import { memo } from "react";

const QuestionsAnswers = [
  {
    id: "1",
    question: "What is FEEL THE RAVE?",
    answers:
      "FEEL THE RAVE is an exclusive open-air rave event featuring the best in Techno, Trance, and House music. Tickets are available for 20€ through a secret link. Be sure to grab yours before they sell out!",
  },
  {
    id: "2",
    question: "What is included with my ticket?",
    answers:
      "Your ticket grants you access to the rave, featuring a night filled with live performances from top DJs, immersive light shows, and an electrifying atmosphere.",
  },
  {
    id: "3",
    question: "How will I get the rave location?",
    answers:
      "On July 12, 2024 (one day before the rave), you will receive an email with a geopin that will provide the exact location of the event. Make sure to check your inbox for this important information!",
  },
  {
    id: "4",
    question: "Can I refund my ticket?",
    answers:
      "Unfortunately, tickets are non-refundable. However, you can transfer your ticket to another person if you are unable to attend. Please contact our support team for assistance with ticket transfers.",
  },
  {
    id: "5",
    question: "Is there an age requirement?",
    answers:
      "Yes, you must be at least 18 years old to attend FEEL THE RAVE. Be sure to bring a valid ID for entry.",
  },
  {
    id: "6",
    question: "Where is the rave located?",
    answers:
      "The location is a secret and will be revealed to ticket holders on July 12, 2024. We promise an exciting and unique open-air venue perfect for an epic night of music and dancing under the stars!",
  },
];

const FrequentlyAskedQuestions = memo(() => {
  return (
    <div className={"flex sm:justify-center"}>
      <div className={"mx-3.5 sm:w-80"}>
        <div className={"flex justify-center text-xl font-black mb-5"}>FAQ</div>
        <div className={"flex flex-col gap-4"}>
          {QuestionsAnswers.map((qa) => (
            <div key={qa.id}>
              <div className={"font-black text-xs"}>{qa.question}</div>
              <div className={"text-xs"}>{qa.answers}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

FrequentlyAskedQuestions.displayName = "FrequentlyAskedQuestions";

export default FrequentlyAskedQuestions;
