'use client'
import Link from 'next/link'
import { useState } from 'react'
// import MobileMenu


export default function Navbar(){
    const[isMobileMenuopen,setIsMobileOpen]=useState(false);

    return(
        <>
        <nav className='fixed top-0 left-0 border-b text-white border-white/5 bg-black/60 backdrop-blur-xl z-50'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='flex h-16 items-center justify-between'>
                    {/*logo and brand*/}
                    <div className='flex items-center space-x-3'>
                       <Link href={'/'} className='flex items-center space-x-3'>
                       <div className='h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to blue-600 flex items-center justify-center'>
                       <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                       </div>
                       <span font-semibold text-wrapclassName='text-lg '>
                        SafeReport
                       </span>
                       </Link> 
                    </div>
                    {/* main navigation */}
                    <div className='hidden md:flex items-center space-x-6'></div>
                    <Link
                    href={'/track-report'}
                    className='text-sm text-zinc-400 hover:text-white transition-colors'
                    >
                      Track Report
                    </Link>
                    <Link
                    href={'/how-it-works'}
                    className='text-sm text-zinc-400 hover:text-white transition-colors'
                    >
                      How it works
                    </Link><Link
                    href={'/resources'}
                    className='text-sm text-zinc-400 hover:text-white transition-colors'
                    >
                      Resources
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}
