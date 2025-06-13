// import logo from "../assets/images/logo.png";
import "../index.css";

function Home() {
    return (
        <main >
            <div className="container w-[100%] ">
                <div className='  rounded-xl flex justify-between items-center w-full border-2 border-primary dark:bg-[var(--color-Neutral800)] p-2 mb-6'>
                    <div className=' flex items-center gap-2  text-amber-50' style={{ clipPath: 'inset(0px 135px 0px 0px) ;' }}>
                        <img className='' src="/src/assets/images/logo.svg " alt="img_logo" />
                        <p className="dark:text-white font-bold text-xl relative right-35">Extensions</p>
                    </div>
                    <button className='hover:pointer'> <img className='hover:cursor-pointer bg-white dark:bg-[var(--color-Neutral700)] p-3 rounded-xl' src="/src/assets/images/icon-sun.svg" alt="img_darkMode" /> </button>

                </div>
                <div className=' flex justify-between items-center w-full border-2 border-primary   rounded-xl p-4 mb-6'>

                    <h2 className="dark:text-white font-bold text-xl ">Extension List</h2>
                    <div className='flex gap-2'>
                        <button className='border-1  dark:border-(--color-Neutral600) hover:border-0 rounded-2xl px-4 py-1 hover:cursor-pointer dark:hover:bg-[var(--color-Red500)] dark:text-white   dark:hover:text-black '>All</button>
                        <button className='border-1 dark:border-(--color-Neutral600) hover:border-0 rounded-2xl px-4 py-1 hover:cursor-pointer dark:hover:bg-[var(--color-Red500)] dark:text-white   dark:hover:text-black'>Active</button>
                        <button className='border-1 dark:border-(--color-Neutral600) hover:border-0 rounded-2xl px-4 py-1 hover:cursor-pointer dark:hover:bg-[var(--color-Red500)] dark:text-white   dark:hover:text-black '>Inactive</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home