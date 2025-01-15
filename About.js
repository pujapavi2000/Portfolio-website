import reabout from '../reabout.svg';

export default function About() {
    const config = {
        aboutcc : "Hi i'm pavithra. I'm a full stack web developer.I build beautiful website using react.js and tailwind",
        aboutcc1 : "Proficient in React.js, JavaScript (ES6+), HTML, CSS, responsive design, and front-end development.",
        abouctcc2:"In backend Java,MysqL,Sturks Framework"
        
    }

    return <section  id ="about"className='flex flex-col md:flex-row bg-secoundry'>
        <div className='md:w-1/2 py-5'>
            <img src={reabout}/>
        </div>
        <div className='md:w-1/2 flex justify-center flex-col ml-[306px]'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-2xl border-b-4 mb-5 w-[120px] font-bold border-primary'>About me</h1>
        <p className='pb-5'>{config.aboutcc}</p>
        <p className='pb-5'>{config.aboutcc1}</p>
        <p>{config.abouctcc2}</p>
        </div>
        </div>
    </section>
}