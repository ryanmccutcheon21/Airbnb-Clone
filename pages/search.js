import Header from '../components/Header'
import Footer from '../components/Footer'

function Search() {
    return (
        <div className='h-screen'>
            <Header />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays for 5 number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover: shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;'>Cancellation Flexibility</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover: shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;'>Type of Place</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover: shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;'>Price</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover: shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;'>Rooms and Beds</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover: shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;'>More filters</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search