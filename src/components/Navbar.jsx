import React from 'react'

function Navbar() {

    return (
            <div className='Navbar fixed top-0 bg-[#0f1824] left-0 w-full z-50 flex px-3 py-4 text-white items-center justify-between'>
                    <div className="leftNavbar flex justify-center items-center gap-9">
                        <i className="ri-menu-line"></i>
                        <span className='font-bold text-4xl'>TSG</span>
                        <ul className='flex gap-8 items-center'>
                            <li><a href="">Exams</a></li>
                            <li><a href="">Programs</a></li>
                            <li><a href="">Scholarship</a></li>
                            <li><a href="">Test Series</a></li>
                            <li><a href="">Study materials</a></li>
                        </ul>
                    </div>
                    <div className="rightNavbar flex gap-5">
                        <button className='bg-white text-[#0f1824] text-sm px-4 h-9 rounded-full cursor-pointer'>Talk to us</button>
                        <button className='border-2 border-white text-sm px-4 h-9 rounded-full cursor-pointer'>Login</button>
                    </div>
            </div>
    )
}

export default Navbar;