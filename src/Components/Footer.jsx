import {BsFacebook, BsInstagram, BsLinkedin,BsTwitterX } from 'react-icons/bs'

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  return (
    <>
        <footer className='relative left-0 bottom-0 h-[10vh] py-15 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-700 sm:px-20'>
            <section className='text-lg mb-1' >
                &copy; {year} | All rights reserved
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                <a className='hover:text-blue-400 transition-all ease-in-out duration-300'>
                    <BsFacebook/>
                </a>
                <a className='hover:text-pink-400 transition-all ease-in-out duration-300'>
                    <BsInstagram/>
                </a>
                <a className='hover:text-black transition-all ease-in-out duration-300'>
                    <BsTwitterX/>
                </a>
                <a className='hover:text-blue-500 transition-all ease-in-out duration-300'>
                    <BsLinkedin/>
                </a>

            </section>
        </footer>
    </>
  )
}
