import Logo from "../logo"

function FooterComponent() {
    const footerItemClass = `text-sm`
    return (
        <footer className=' w-[80%] mx-auto'>
            <div className="text-[#94a3b8] flex my-20 mt-40 gap-20 flex-wrap">
                <div className='flex flex-col gap-2'>
                    <p className='text-md text-white'>Getting Started</p>
                    <p className={footerItemClass}>Installation</p>
                    <p className={footerItemClass}>Editor Setup</p>
                    <p className={footerItemClass}>Using with Preprocessors</p>
                    <p className={footerItemClass}>Optimizing for Production</p>
                    <p className={footerItemClass}>Browser Support</p>
                    <p className={footerItemClass}>Upgrade Guide</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-md text-white'>Core Concepts</p>
                    <p className={footerItemClass}>Utility-First Fundamentals</p>
                    <p className={footerItemClass}>Handling Hover, Focus and Other States</p>
                    <p className={footerItemClass}>Responsive Design</p>
                    <p className={footerItemClass}>Dark Mode</p>
                    <p className={footerItemClass}>Reusing Styles</p>
                    <p className={footerItemClass}>Adding Custom Styles</p>
                    <p className={footerItemClass}>Functions & Directies</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-md text-white'>Customization</p>
                    <p className={footerItemClass}>Configuration</p>
                    <p className={footerItemClass}>Content Configuration</p>
                    <p className={footerItemClass}>Theme Configuration</p>
                    <p className={footerItemClass}>Customizing Screens</p>
                    <p className={footerItemClass}>Customizing Colors</p>
                    <p className={footerItemClass}>Customizing Spacing</p>
                    <p className={footerItemClass}>Plugins</p>
                    <p className={footerItemClass}>Presets</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-md text-white'>Community</p>
                    <p className={footerItemClass}>GitHub</p>
                    <p className={footerItemClass}>Discord</p>
                    <p className={footerItemClass}>Twitter</p>
                    <p className={footerItemClass}>YouTube</p>
                </div>
            </div>
            <hr />
            <div className="my-6">
                <Logo />
            </div>
        </footer>
    )
}

export default FooterComponent
