// import logo from "../assets/images/logo.png";

function Home() {
    return (
        <main >
            <div className="container w-[100%]">
                <div className='bg-white dark:bg-gray-800 rounded-xl flex justify-between items-center w-full border-2 border-primary p-4 mb-6'>
                    <div className='flex items-center gap-2'>
                        <img className='' src="/src/assets/images/logo.svg" alt="img_logo" />

                    </div>
                    <button className='hover:pointer'> <img className='hover:cursor-pointer bg-white dark:bg-gray-500 p-3 rounded-xl' src="/src/assets/images/icon-sun.svg" alt="img_darkMode" /> </button>

                </div>
                <div className=' flex justify-between items-center w-full border-2 border-primary bg-white dark:bg-gray-800  rounded-xl p-4 mb-6'>

                    <h2 className="font-bold">Extension List</h2>
                    <div className='flex gap-2'>
                        <button className='border-1 border-primary rounded-2xl px-4 py-1 hover:cursor-pointer hover:bg-red-500'>All</button>
                        <button className='border-1 border-primary rounded-2xl px-4 py-1 hover:cursor-pointer hover:bg-red-500'>Active</button>
                        <button className='border-1 border-primary rounded-2xl px-4 py-1 hover:cursor-pointer hover:bg-red-500'>Inactive</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home