import Footer from "../components/Footer";
import Header from "../Header/Header";
function Landing() {
    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (!localStorage.key("chat")) {
            localStorage.setItem("chat", 1);
        }
        const chatData = [
            {
                sender: "user",
                text: "What's Mindstride?",
            },
            {
                sender: "bot",
                text: `Hi, Mindstride is a RAG-based chat assistant designed to support mental health, personal growth, and self-improvement. Ask me anything you want to know about mental health, personal growth, or self-improvement.`,
            },
        ];
        const mindstrideDB = indexedDB.open("mindstride");
        mindstrideDB.onsuccess = (event) => {
            const db = event.target.result; 

            const tx = db.transaction("chats", "readwrite");
            const store = tx.objectStore("chats");
            store.add(chatData);

            tx.oncomplete = () => {
                console.log("Transaction completed");
            };
        };

        mindstrideDB.onerror = (event) => {
            console.error("Error opening database:", event);
        };
        window.location.href = "/chat";
    };

    return (
        <>
            <div className="bg-gradient-to-t from-violet-50 to-indigo-200">
                <Header />

                <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                            <div>
                                <div className="text-center lg:text-left">
                                    <h1
                                        id="about"
                                        className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent sm:text-3xl lg:text-4xl"
                                    >
                                        An AI assistant designed to support mental health, personal
                                        growth, and self improvement.
                                    </h1>
                                    <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                        This project leverages advanced AI technologies to provide a
                                        personalized and insightful experience, drawing from the
                                        wisdom of over 70 books on mental well-being, personal
                                        development, and self-discovery.
                                    </p>

                                    <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl focus:outline-none hover:scale-105"
                                            onClick={handleNameSubmit}
                                        >
                                            Chat Now
                                            <svg
                                                className="w-5 h-5 ml-3 text-white animate-pulse"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                                            294
                                        </p>
                                        <p className="ml-3 text-sm text-gray-900 font-pj">
                                            Chats
                                            <br />
                                            Delivered
                                        </p>
                                    </div>

                                    <div className="hidden sm:block">
                                        <svg
                                            className="text-gray-400"
                                            width="16"
                                            height="39"
                                            viewBox="0 0 16 39"
                                            fill="none"
                                            stroke="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line
                                                x1="0.72265"
                                                y1="10.584"
                                                x2="15.7226"
                                                y2="0.583975"
                                            ></line>
                                            <line
                                                x1="0.72265"
                                                y1="17.584"
                                                x2="15.7226"
                                                y2="7.58398"
                                            ></line>
                                            <line
                                                x1="0.72265"
                                                y1="24.584"
                                                x2="15.7226"
                                                y2="14.584"
                                            ></line>
                                            <line
                                                x1="0.72265"
                                                y1="31.584"
                                                x2="15.7226"
                                                y2="21.584"
                                            ></line>
                                            <line
                                                x1="0.72265"
                                                y1="38.584"
                                                x2="15.7226"
                                                y2="28.584"
                                            ></line>
                                        </svg>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                                            10M+
                                        </p>
                                        <p className="ml-3 text-sm text-gray-900 font-pj">
                                            Tokens
                                            <br />
                                            Generated
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery rounded-xl grid place-items-center">
                                <img
                                    className="w-4/5 rounded-xl px-16"
                                    src="/books/book-1.webp"
                                    alt="a dream catcher"
                                />
                                <img
                                    className="w-4/5 px-16"
                                    src="/books/book-2.webp"
                                    alt="a piano"
                                />
                                <img
                                    className="w-4/5 px-16"
                                    src="/books/book-3.webp"
                                    alt="a live concert"
                                />
                                <img
                                    className="w-4/5 px-16"
                                    src="/books/book-4.webp"
                                    alt="Paris"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* // <!-- FAQ --> */}
            <div
                id="faq"
                className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-t from-slate-50 to-violet-50"
            >
                {/* <!-- Title --> */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
                        Frequently Asked Questions
                    </h2>
                </div>
                {/* <!-- End Title --> */}

                <div className="max-w-5xl mx-auto">
                    {/* <!-- Grid --> */}
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                What is Mindstride?
                            </h3>
                            <p className="mt-2 text-gray-600 ">
                                Mindstride is a chat assistant designed to support mental
                                health, personal growth, and self-improvement. It leverages
                                advanced AI technologies and draws insights from over 70 books
                                on these topics to provide personalized guidance and support.
                            </p>
                        </div>
                        {/* <!-- End Col --> */}

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                How does Mindstride support mental health?
                            </h3>
                            <p className="mt-2 text-gray-600 ">
                                Mindstride offers guidance and support to enhance mental
                                well-being by providing insights, strategies, and techniques
                                drawn from a vast collection of books on mental health. It aims
                                to help users manage stress, anxiety, and other mental health
                                challenges.
                            </p>
                        </div>
                        {/* <!-- End Col --> */}

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                What kind of personal growth can I achieve with Mindstride?
                            </h3>
                            <p className="mt-2 text-gray-600 ">
                                Mindstride assists users in their journey towards personal
                                development by offering tailored advice and tools for
                                self-improvement. It covers areas such as goal setting, habit
                                formation, mindfulness, and emotional intelligence to help users
                                grow and achieve their potential.
                            </p>
                        </div>
                        {/* <!-- End Col --> */}

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                How does Mindstride use AI technologies?
                            </h3>
                            <p className="mt-2 text-gray-600 ">
                                Mindstride uses a range of AI technologies including the OpenAI
                                API for querying GPT-3.5 and the Hugging Face Inference API for
                                creating embeddings. These technologies help to manage and query
                                text chains effectively, ensuring that users receive accurate
                                and insightful responses.
                            </p>
                        </div>
                        {/* <!-- End Col --> */}

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                How is the information in Mindstride sourced and managed?
                            </h3>
                            <p className="mt-2 text-gray-600 ">
                                Mindstride draws its knowledge from over 70 books on mental
                                well-being, personal development, and self-discovery. It uses
                                Langchain for managing and querying text chains and a vector
                                database (Pinecone) for efficient information retrieval,
                                ensuring that the responses are based on reliable and
                                comprehensive sources.
                            </p>
                        </div>
                        {/* <!-- End Col --> */}

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Is my data safe with Mindstride?
                            </h3>
                            <p className="mt-2 text-gray-600 ">
                                Yes, Mindstride prioritizes user privacy and data security. It
                                is hosted on AWS Lambda, which provides a secure and scalable
                                infrastructure. Your interactions with Mindstride are kept
                                confidential and are used solely to improve your experience with
                                the application.
                            </p>
                        </div>
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
            </div>
            {/* // <!-- End FAQ --> */}
            <Footer />
        </>
    );
}

export default Landing;
