import Image from 'next/image';

export default function Index() {
    return (
        <div id="index-landing-page" className="h-full relative">
            <Image
                src="/img/bg-index-1.png"
                alt="bg-index"
                objectFit="cover"
                quality={100}
                width={700}
                height={1080}
                className="absolute right-0 bottom-0 xl:w-[700px] lg:w-[600px] md:w-[550px]"
            />
            <div className='w-[55%] h-full flex items-center px-20'>
                <div className='px-7 py-16 rounded-lg'>
                    <p className='text-3xl lg:text-2xl font-semibold'>Selamat Datang di Timah Segel <b>MASTER</b> <br /> By Sinar Anjaya</p>
                    <div className='h-5'></div>
                    <p className='text-lg lg:text-base md:text-sm'>
                        Kami hadir sebagai solusi terbaik untuk memenuhi segala kebutuhan Anda
                        akan timah segel, dengan produk berkualitas tinggi dan layanan yang professional.
                    </p>
                    <div className='h-10'></div>
                    <button className='bg-[#000000] text-white px-4 py-2 rounded-md text-base lg:text-sm md:text-xs'>Order Sekarang</button>
                </div>
            </div>
        </div>
    );
}