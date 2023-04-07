import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [color,setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNavbar = () => {
        setNavbar(!navbar)
    }
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >=90){
                setColor('#ffffff');
                setTextColor('#000000')
            }else{
                setColor('transparent')
                setTextColor("#ffffff")
            }
        };
        window.addEventListener('scroll', changeColor)
    },[])
 

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-400 '>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href="/"><h1 style={{color: `${textColor}`}} className='font-bold text-3xl'>Travel360</h1></Link>
            
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 '>
                    <Link href="/">Home</Link>
                </li>
                <li className='p-4 '>
                    <Link href="/">About Us</Link>
                </li>
                <li className='p-4 '>
                    <Link href="/">Services</Link>
                </li>
                <li className='p-4 '>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
            {/* Responsive button */}
            <div onClick={handleNavbar} className='block sm:hidden z-10'>
                {navbar ? <AiOutlineClose size={20}style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
                
            </div>
            {/* Menu for smaller screen */}
            <div className={navbar ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-400 text-center ease-in duration-400' :
                            'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-400 text-center ease-in duration-400'}>
                <ul>
                    <li className='p-4 text-3xl hover:text-black'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='p-4 text-3xl hover:text-black'>
                        <Link href="/">About Us</Link>
                    </li>
                    <li className='p-4 text-3xl hover:text-black'>
                        <Link href="/">Services</Link>
                    </li>
                    <li className='p-4 text-3xl hover:text-black'>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar