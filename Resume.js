import Resume from './resume.svg';

export default function RResume() {
     const config ={
        link : ''
     }
      
    return <section id="resume"className='flex flex-col md:flex-row bg-secoundry'>
        <div className='md:w-1/2 py-5'>
        <img  className="ml-[210px] h-[342] w-[362px]"src={Resume}/>
        </div>
        <div className='md:w-1/2 flex md:justify-center flex-col ml-[306px]'>
        <div className='flex flex-col justify-center md:justify-center text-white'>
        <h1 className='text-2xl border-b-4 mb-5 w-[90px] font-bold border-primary'>Resume</h1>
        <p className='pb-5'>Here you can see my resume <a className="btn"href={config.link}>Download</a></p>
        </div>
        </div>
    </section>
}