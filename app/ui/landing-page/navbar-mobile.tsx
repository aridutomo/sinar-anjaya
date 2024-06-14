'use client';

import Image from 'next/image'
import { useState } from 'react';

export default function NavbarMobile() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <div className='px-4 py-3 fixed z-10 w-full'>
            <nav id="navbar-mobile">
                <div className="flex justify-between items-center">
                    <div>
                        <Image src='/img/logo/logo.png' alt='logo' width={130} height={130} />
                    </div>
                    <div>
                        <div
                            className="hamburgerIcon"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-[#03579D]"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-[#03579D] mt-1.5"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-[#03579D] mt-1.5"></span>
                        </div>
                        <div className={`absolute w-full h-fit top-0 left-0 bg-white z-10 ${isNavOpen ? ' block' : ' hidden'}`} >
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}