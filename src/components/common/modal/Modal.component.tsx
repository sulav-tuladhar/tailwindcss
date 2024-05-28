
function ModalComponent({ modal, setInput, input, openModal }: { modal: boolean, setInput: (e: string) => void, input: string, openModal: () => void }) {
    return (
        <div>
            {
                modal && (
                    <div className="">
                        <div className="  w-[60%] mx-auto mt-20 ">
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
                                <p>Search by Sulav Tuladhar</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ModalComponent
