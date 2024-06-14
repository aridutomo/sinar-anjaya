import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='navbar fixed z-10 w-full'>
            {/* Navbar content */}
            <nav>
                <div className='flex justify-between items-center px-20 py-5'>
                    <div>
                        <Image src='/img/logo/logo.png' alt='logo' width={130} height={130} />
                    </div>
                    <div>
                        <ul className='flex space-x-10'>
                            <li>
                                <a href='#'
                                    className='text-base md:text-[15px] font-semibold'>
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href='#'
                                    className='text-base md:text-[15px] font-semibold'>
                                    Produk
                                </a>
                            </li>
                            <li>
                                <a href='#'
                                    className='text-base md:text-[15px] font-semibold'>
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a href='#'
                                    className='text-base md:text-[15px] font-semibold'>
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}