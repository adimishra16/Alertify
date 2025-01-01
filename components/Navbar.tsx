'use client'
import Link from 'next/link'
import { useState } from 'react'
// import MobileMenu


export default function Navbar(){
    const[isMobileMenuopen,setIsMobileOpen]=useState(false);

    return(
        <>
        <nav className='fixed top-0 left-0 border-b border-white/5 bg-black/60 backdrop-blur-xl z-50'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='flex h-16 items-center justify-between'>
                    {/*logo and brand*/}
                    <div className='flex items-center space-x-3'>
                       <Link href={'/'} className='flex items'>
                       </Link> 
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}