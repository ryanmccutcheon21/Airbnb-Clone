import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

function Search() {
    const router = useRouter();
    console.log(router.query)
    // shows our search router.push object from Header.js and what we
    // can pull from that object to show on the page

    // use destructuring to get this out of the object
    // .query method on next.js router lets us pull this information
    const { location, startDate, endDate, numOfGuests } = router.query;
    // add these to HTML

    // use format from date-fns to format the startDate in URL to clean it up
    // takes two arguments
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    // turn them into a string and save to variable
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div className='h-screen'>
            <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {numOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
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