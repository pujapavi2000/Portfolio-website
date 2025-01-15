import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Hheader() {
    const [togglemenu ,settogglemenu ] = useState(false)
    return (
        <header className="flex justify-between px-5 h-[36px] bg-indigo-500">
            <a href ="#" class="font-bold text-2xl">Pavithra</a>
            <nav className="hidden md:block  h-[131px]">
            <ul className = "flex">
                <li><a href="/" class="text-white">Home</a></li>
                <li><a href="#about" class="text-white">About</a></li>
                <li><a href="#project" class="text-white" >Projects</a></li>
                <li><a href="#resume" class="text-white" >Resume</a></li>
                <li><a href="#contact" class="text-white">Contact</a></li>
            </ul>
            </nav>
             {togglemenu &&  <nav className="block md:hidden navbar">
            <ul  onClick={()=> settogglemenu (!togglemenu)}className = "flex flex-col">
                <li><a href="/" class="text-white">Home</a></li>
                <li><a href="#about" class="text-white">About</a></li>
                <li><a href="#project" class="text-white" >Projects</a></li>
                <li><a href="#resume" class="text-white" >Resume</a></li>
                <li><a href="#contact" class="text-white">Contact</a></li>
            </ul>
            </nav>}
            <button className='block md:hidden' onClick={()=> settogglemenu (!togglemenu)}><Bars3Icon className='text-white h-5'/></button>
        </header>
    );
}