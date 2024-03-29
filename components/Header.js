import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router'; // so we can route to different pages on site

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuests, setNumOfGuests] = useState(1);
    const router = useRouter(); // create router variable

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    // Create function to send user to search page
    // Use object in push function to add search parameters to the URL
    // so when sending URL to someone it will show with the queries they
    // search on that site
    // pathname is needed and sends to /search page
    // query object has query values you want passed into URL
    // URL example with this function
    // 
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuests
            }
        })
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* Left */}
            {/* use router const and .push method to return user to homempage when clicked */}
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    alt="header"
                />
            </div>
            {/* Middle - Search */}
            <div
                className='flex items-center border-2 rounded-full py-2 md:border-2 md:shadow-sm'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    placeholder={placeholder || 'Start your search'}
                    className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
                />
                <SearchIcon
                    className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>
            {/* Right */}
            <div
                className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon
                    className='h-6 cursor-pointer'
                />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2
                            className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input
                            type='number'
                            className='w-12 pl-2 text-lg outline-none text-red-400' value={numOfGuests}
                            onChange={e => setNumOfGuests(e.target.value)} min={1} />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={search} className='flex-grow text-red-400'>Search</button>
                        {/* using search function to route to search page on click */}
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header