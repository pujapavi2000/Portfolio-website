import remote from '../remote.svg'
import { FaTwitter,FaFacebookSquare,FaLinkedin} from "react-icons/fa";

export default function Header() {

      const config = {
        subtitle : "Im a Full-Stack developer"
      }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
        <div className='w-1/2 flex flex-col'>
        <h1 className=' w-1/2 text-white text-6xl font-hero'>Hi , <br/> Im pavithra
       <p className='text-2xl'>{config.subtitle}</p>
       </h1>
<div className='flex gap-2 mt-5'>
    <a href='#' className='hover:text-white'><FaTwitter  size={35}/></a>
    <a href='#' className='hover:text-white'><FaFacebookSquare size={35} /></a>
    <a href='#' className='hover:text-white'><FaLinkedin size={35} /></a>
</div>
        </div>
        <img  className=' md:w-1/3' src = {remote}/>
    </section>
}