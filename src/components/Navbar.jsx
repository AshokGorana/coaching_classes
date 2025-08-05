import React from 'react'

function Navbar() {

    return (
            <div className='Navbar border-2 border-white fixed top-0 bg-[#0f1824] left-0 w-full z-50 flex px-12 py-3 text-white md:px-12 items-center justify-between'>
                    <div className="leftNavbar">
                        <ul className='hidden md:flex gap-8 items-center'>
                            <li className='text-5xl'><a href="">TSG</a></li>
                            <li><a href="">Exams</a></li>
                            <li><a href="">Programs</a></li>
                            <li><a href="">Scholarship</a></li>
                            <li><a href="">Test Series</a></li>
                            <li><a href="">Study materials</a></li>
                        </ul>
                    </div>
                    <div className="rightNavbar flex gap-8">
                        <button className='bg-white text-[#0f1824] px-5 py-2 rounded-full cursor-pointer'>Talk to us</button>
                        <button className='border-2 border-white px-5 py-2 rounded-full cursor-pointer'>Login</button>
                    </div>
            </div>
    )
}

export default Navbar;