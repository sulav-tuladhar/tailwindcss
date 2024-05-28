function AboutsectionComponent() {
    return (
        <section className="text-white flex flex-col items-center justify-center py-40 gap-6">
            <h2 className="text-4xl font-extrabold">"Best practices" don't actually work</h2>
            <p className="w-[54%] text-center text-[#94a3b8]">
                I’ve written a <span className="text-sky-500">few thousand words </span> on why traditional “semantic class names” are the reason CSS
                is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If
                you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder
                how you ever worked with CSS any other way.
            </p>
            <div className="flex gap-2 mt-4">
                <img src="./images/avatar.png" alt="avatar-icon" className="h-12 w-12"/>
                <div className="flex flex-col">
                    <p>Sulav Tuladhar</p>
                    <p className="text-[#94a3b8] text-sm">Creator of This Website</p>
                </div>
            </div>
        </section>
    )
}

export default AboutsectionComponent
