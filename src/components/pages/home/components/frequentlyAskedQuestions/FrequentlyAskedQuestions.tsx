import { memo } from "react";

const QuestionsAnswers = [
  {
    id: "1",
    question: "How can I get my location?",
    answers: "12/07 you will get the email with the geo pin to the spot",
  },
  {
    id: "2",
    question: "How can I get my location?",
    answers: "12/07 you will get the email with the geo pin to the spot",
  },
  {
    id: "3",
    question: "How can I get my location?",
    answers: "12/07 you will get the email with the geo pin to the spot",
  },
  {
    id: "4",
    question: "How can I get my location?",
    answers: "12/07 you will get the email with the geo pin to the spot",
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
