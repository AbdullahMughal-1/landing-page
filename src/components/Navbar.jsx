import React from 'react'
import logo from '../assets/Icon.jpg'
import icon from '../assets/right.png'
import { useState, useEffect } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6';



const navLinkClass = "hover:text-[#28CB8B]  text-[#263238] transition-colors ";
const navLinkClass2 = "hover:text-white  text-[#263238] transition-colors ";


const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [isSticky, setisSticky] = useState(false)

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }




    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setisSticky(true)
            } else {
                setisSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    })



    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 " : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="" className='text-2xl font-semibold flex gap-4' > <img className='items-center w-10 inline-block' src={logo} alt="" /><span className=' text-[#263238]  '>NEXCENT</span></a>


                    <ul className="md:flex gap-12 hidden  text-[#263238] ">
                        <li className={navLinkClass} ><a href="#">Home</a></li>
                        <li className={navLinkClass} ><a href="#">Features</a></li>
                        <li className={navLinkClass}><a href="#">Community</a></li>
                        <li className={navLinkClass}><a href="#">Blog</a></li>
                        <li className={navLinkClass} ><a href="#">pricing</a></li>
                    </ul>
                    <div className="  space-x-12 hidden lg:flex items-center">
                        <button className="cursor-pointer bg-[#28CB8B] text-white py-2 px-5 rounded-xl flex items-center gap-2 group ">
                            Register Now
                            <img src={icon} alt="" className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="cursor-pointer">
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 text-gray-700' />) : (<FaBars className='h-6 w-6 text text-gray-700' />)
                            }
                        </button>
                    </div>

                </div>

                <div>
                    <ul className={`  text-[#263238] block text-base space-y-4 px-4 mt-16 py-7 bg-[#28CB8B] ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}  `} >
                        <li className={navLinkClass2} ><a href="#">Home</a></li>
                        <li className={navLinkClass2} ><a href="#">Features</a></li>
                        <li className={navLinkClass2}><a href="#">Community</a></li>
                        <li className={navLinkClass2}><a href="#">Blog</a></li>
                        <li className={navLinkClass2} ><a href="#">pricing</a></li>
                    </ul>
                </div>




            </nav>




        </header>
    );
}

export default Navbar
