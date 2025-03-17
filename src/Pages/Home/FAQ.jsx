import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Who is eligible to donate blood?",
            answer:
                "Anyone who is in good health, at least 18 years old, and weighs over 110 pounds is eligible to donate blood. Certain health conditions may exclude someone from donating, so it's best to check with a donation center.",
        },
        {
            question: "How often can I donate blood?",
            answer:
                "You can donate whole blood once every 56 days. If you're donating platelets or plasma, the frequency may vary depending on the type of donation and center guidelines.",
        },
        {
            question: "Is donating blood safe?",
            answer:
                "Yes, donating blood is safe. The process is conducted by trained professionals using sterile equipment. Your health will be monitored throughout the donation process.",
        },
        {
            question: "What should I do after donating blood?",
            answer:
                "After donating, you should rest for 10-15 minutes, drink plenty of fluids, and have a snack. It's important to avoid strenuous activities for the next 24 hours.",
        },
        {
            question: "Can I donate blood if I have a medical condition?",
            answer:
                "It depends on the medical condition. Common conditions like high blood pressure or diabetes may allow you to donate, but it's important to consult with your doctor or the donation center first.",
        },
    ];

    return (
        <section className="py-12 px-6 mt-14 bg-red-50 mb-5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-700 border-b-4 border-red-500 inline-block pb-2">
                    Frequently Asked Questions
                </h2>
                <p className="mt-6 text-lg text-gray-700">
                    Here are some common questions about blood donation. If you have more questions, feel free to reach out to us!
                </p>
            </div>

            {/* Accordion FAQ Section */}
            <div className="mt-12 max-w-5xl mx-auto">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg mb-4 p-4 border-l-4 border-red-500"
                    >
                        <div
                            onClick={() => toggleAccordion(index)}
                            className="cursor-pointer flex justify-between items-center"
                        >
                            <h3 className="text-xl font-semibold text-red-700">{item.question}</h3>
                            <span
                                className={`text-xl font-bold text-red-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                ⬇
                            </span>
                        </div>
                        {activeIndex === index && (
                            <p className="mt-3 text-gray-600">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
