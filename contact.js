import Resume from './resume.svg';

export default function Contact() {
    return <section id="contact" className='flex flex-col bg-primary'>
     <div className='text-white flex flex-col items-center'>
        <h1 className='text-2xl border-b-4 mb-5 w-[90px] font-bold border-secoundary'>Contact</h1>
        <p className='pb-5'>If you want to discuss more in deatils please contact me </p>
        <p className='py-2'><span className='font-bold'>Email : </span><span>Pujapavi2000@gmail.com</span></p>
        <p className='py-2'><span className='font-bold'>Phone : </span> <span>9384605716</span></p>
        </div>
      
    </section>
}