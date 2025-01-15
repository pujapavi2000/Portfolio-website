import website from './Shoppingcart.png'
import food from './Protfoil.png'
import landing from './download (1).jpg'

export default function PProjects() {
    const config ={
        projectheading : 'This are my best ptoject i have created by react.js and html and css and tailwind ',
        project1:'The simple Shopping cart Website Project is one of the most common software development projects. ',
         project2:'I have developed a personal Portfolio Website to showcase my skills, projects, and experience as a developer',
          //project3:'The E-Commerce Website Project is one of the most common software development projects. '
    }
const project ={
   
    project1:
    [
    {
    image :'website',
    content:'The E-Commerce Website Project is one of the most common software development projects.',
    link : 'https://www.google.co.in/'
},
{
    image :'food',
    content:'The E-Commerce Website Project is one of the most common software development projects.',
    link : 'https://www.google.co.in/'
},
{
    image :'landing',
    content:'The E-Commerce Website Project is one of the most common software development projects.',
    link : 'https://www.google.co.in/'
}

    ]
}
    return <section id="project"className="flex flex-col px-5 py-5 justify-center bg-primary">
        <div className="">
        <div className="flex justify-center flex-col">
        <h1 className="text-2xl text-white border-b-4 mb-5 w-[100px] justify-center font-bold  border-secoundary">Projects</h1>
        <p className='text-white'>{config.projectheading}</p>
        </div>
        </div>
        
        <div className="w-full mt-[9px] ">
        <div className='flex flex-col md:flex-row gap-10'>
        <div className='relative'>
        <img  className='h-[300px] w-[500px]'src={website}/>
        <div className='absolute left-0 bottom-0 right-0 top-[45px] w-full mt-[-45px] h-[300px] opacity-0  duration-500 hover:opacity-100 bg-secoundry'>
            <p className='text-white text-center py-5'>{config.project1}</p>
            <div className='flex justify-center'>
            <a className='btn' target ='_blank'  href='https://www.google.co.in/'>View project</a>
            </div>
        </div>
        </div>
        <div className='relative  ml-[107px]' >
        <img className='h-[300px] w-[500px]' src={food}/>
        <div className='project-desc'>
            <p className='text-white text-center py-5'>{config.project2}</p>
            <div className='flex justify-center'>
            <a className='btn' target ='_blank'  href='https://www.google.co.in/'>View project</a>
            </div>
        </div>
        </div>
        {/* <div className='relative'>
        <img className='h-[300px] w-[500px]' src={landing}/>
        <div className='project-desc'>
            <p className='text-white text-center py-5'>{config.project3}</p>
            <div className='flex justify-center'>
            <a className='btn' target ='_blank'  href='https://www.google.co.in/'>View project</a>
            </div>
        </div>
        </div> */}
        </div>
        </div>
     
    </section>

}