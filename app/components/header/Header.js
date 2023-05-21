import Link from "next/link";

const Header = () => {
    return (
        <header className='flex justify-evenly bg-blue-200 py-4'>
            <Link href={'/'} className='font-bold'>Home</Link>
            <Link href={'/basel/departures'} className='font-bold'>Basel trains</Link>
            <Link href={'/geneva/departures'} className='font-bold'>Geneva trains</Link>
        </header>
    );
};

export default Header;