export default function Navbar() {
    return (
        <div className='navbar fixed z-10 w-full'>
            {/* Navbar content */}
            <nav>
                <div className='flex justify-between items-center px-20 py-5'>
                    <div>
                        <a href='#' className='text-2xl font-semibold'>LOGO</a>
                    </div>
                    <div>
                        <ul className='flex space-x-10'>
                            <li><a href='#'>Beranda</a></li>
                            <li><a href='#'>Produk</a></li>
                            <li><a href='#'>Tentang Kami</a></li>
                            <li><a href='#'>Kontak</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}