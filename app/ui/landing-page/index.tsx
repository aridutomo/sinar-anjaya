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
                className="absolute right-0 bottom-0"
            />
            <div className='w-[55%] h-full flex items-center px-20'>
                <div className='px-7 py-16 rounded-lg'>
                    <p className='text-3xl font-semibold'>Selamat Datang di <b>PT. SINAR ANJAYA</b></p>
                    <div className='h-5'></div>
                    <p className='text-lg'>
                        Kami hadir sebagai solusi terbaik untuk memenuhi segala kebutuhan Anda
                        akan timah segel, dengan produk berkualitas tinggi dan layanan yang professional.
                    </p>
                    <div className='h-10'></div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Order Sekarang</button>
                </div>
            </div>
        </div>
    );
}