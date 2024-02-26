import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What is the gameplay like in Lethal Cooking?",
    answer:
      "The gameplay in Lethal Cooking revolves around navigating through a terrifying kitchen environment while solving puzzles, avoiding hazards, and evading sinister entities lurking in the shadows.",
  },
  {
    question: "How do I play?",
    answer: "To play Lethal Cooking, you'll need to navigate through the kitchen environment using the controls provided (VR controllers). Explore your surroundings, interact with objects, solve puzzles, and stay alert to survive the horrors that await.",
  },
  {
    question: "Is Lethal Cooking suitable for all ages? ",
    answer:
      "Lethal Cooking is intended for mature audiences due to its intense horror themes, jump scares, and unsettling atmosphere. It may not be suitable for younger players or those who are sensitive to horror content.",
  },
  {
    question: "Can I play Lethal Cooking on consoles, or is it PC only? ",
    answer:
      "Lethal Cooking is currently available for PC only. We do not have plans for console releases at this time.",
  },
];

export default Faq;
