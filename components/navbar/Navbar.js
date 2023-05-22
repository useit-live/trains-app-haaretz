'use client'
import Link from 'next/link';
import {usePathname} from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    return (
        <div
            className='py-5 flex flex-col items-between space-y-9 bg-black px-8 mx-auto text-slate-200 sticky top-0'>
            <nav className='flex items-center justify-between'>
                <Link href='/'
                      className='font-bold text-xl tracking-wide hover:tracking-widest transform-all ease-in-out duration-700'>
                    LOGO
                </Link>
                <div className='hidden md:flex items-center space-x-9'>
                    <Link href={'/'} className={pathName === '/' ? 'font-bold' : ''}>Home</Link>
                    <Link href={'/basel/departures'} className={pathName.includes('basel') ? 'font-bold' : ''}>Basel
                        trains</Link>
                    <Link href={'/geneva/departures'} className={pathName.includes('geneva') ? 'font-bold' : ''}>Geneva
                        trains</Link>
                </div>
                <button
                    onClick={() => {
                        document.querySelector('.mobile-menu').classList.toggle('hidden');
                    }}
                    className='md:hidden flex items-center'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>
            </nav>
            <div className='mobile-menu hidden md:hidden flex flex-col items-end space-y-2 px-9 pt-3 pb-3 text-sm'>
                <Link href={'/'} className={pathName === '/' ? 'font-bold' : ''}>Home</Link>
                <Link href={'/basel/departures'} className={pathName.includes('basel') ? 'font-bold' : ''}>Basel
                    trains</Link>
                <Link href={'/geneva/departures'} className={pathName.includes('geneva') ? 'font-bold' : ''}>Geneva
                    trains</Link>
            </div>
        </div>
    );
};

export default Navbar;
