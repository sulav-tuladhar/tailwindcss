import { useState } from "react";

function HerosectionComponent() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const textCss = 'text-sky-500';

  const openModal = () => setModal(!modal);

  return (
    <>
      {
        modal && (
          <div className="absolute h-[100%] w-[100%] bg-[#0f172acc] backdrop-blur-sm text-[#94A3B8]">
            <div className="w-[60%] mx-auto mt-20 bg-[#1e293b] rounded-md">
              <div className="flex space-x-3 px-4 py-3">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
                <input
                  type="text"
                  className="bg-transparent outline-none w-[100%]"
                  placeholder="Search documentation"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="bg-[#475569] text-[#94A3B8] h-6 w-7 rounded-full flex items-center justify-center" onClick={() => openModal()}>
                  <img src="./icons/close-icon.svg" className="h-4" alt="close-icon" />
                </button>
              </div>
              <div className="h-20">
                <p className="text-center mt-6">{input ? input : "No Content! Please type something"}</p>
              </div>
              <div className="flex justify-end text-sm p-2 px-4">
                {/* <p>Search by Sulav Tuladhar</p> */}
              </div>
            </div>
          </div>
        )
      }
      <div className="text-white flex flex-col items-center justify-center py-40 gap-6">
        <h1 className="text-6xl font-extrabold text-center max-w-5xl">Rapidly build mordern websites without ever leaving your HTML</h1>
        <p className="text-[#94a3b8] text-center max-w-3xl font-semibold text-lg">
          A utility-first CSS framework packed with classes like <span className={textCss}>flex </span> , <span className={textCss}>pt-4</span>, <span className={textCss}>text-center</span> and <span className={textCss}>rotate-90</span> that can be composed to build any design, directly in your markup.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-sky-500 py-3 px-4 rounded-md"> Get started </button>
          <div
            className="rounded-md flex justify-center items-center gap-4 text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700  space-x-3 px-4 py-3 bg-white cursor-pointer"
            onClick={() => openModal()}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
            <p>Quick search ...</p>
            <p>Ctrl K</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HerosectionComponent
