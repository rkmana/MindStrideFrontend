import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../Header/Homeheader";

function Home() {
  const navigate = useNavigate();

  const handleNameSubmit = () => {
    const isSignedIn = localStorage.getItem("isSignedIn") === "true"; 
    
      navigate("/chat"); // Redirect to chat if signed in
    
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
                    growth, and self-improvement.
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                    This project leverages advanced AI technologies to provide a
                    personalized and insightful experience, drawing from the
                    wisdom of over 70 books on mental well-being, personal
                    development, and self-discovery.
                  </p>

                  <div className="mt-8 sm:mt-10">
                    <button
                      type="button"
                      className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none hover:bg-gray-600"
                      onClick={handleNameSubmit}
                    >
                      Chat Now
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">294</p>
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
                      {/* SVG Lines */}
                      <line x1="0.72" y1="10.58" x2="15.72" y2="0.58" />
                      <line x1="0.72" y1="17.58" x2="15.72" y2="7.58" />
                      <line x1="0.72" y1="24.58" x2="15.72" y2="14.58" />
                      <line x1="0.72" y1="31.58" x2="15.72" y2="21.58" />
                      <line x1="0.72" y1="38.58" x2="15.72" y2="28.58" />
                    </svg>
                  </div>

                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">10M+</p>
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
                  alt="Book 1"
                />
                <img
                  className="w-4/5 px-16"
                  src="/books/book-2.webp"
                  alt="Book 2"
                />
                <img
                  className="w-4/5 px-16"
                  src="/books/book-3.webp"
                  alt="Book 3"
                />
                <img
                  className="w-4/5 px-16"
                  src="/books/book-4.webp"
                  alt="Book 4"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div
        id="faq"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-t from-slate-50 to-violet-50"
      >
        {/* FAQ Content */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
