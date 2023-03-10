import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); 
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-11 flex justify-between dark:text-white'>
            <h1 className="text-xl font-burtons">PERSONAL SITE </h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl shadow-xl hover:shadow-black dark:hover:shadow-gray-200'/></li>
              <li>
                <a className='text-white px-4 py-2 rounded-md ml-8 bg-gradient-to-r from-cyan-500 to-teal-500
                shadow-lg hover:shadow-yellow-200' href="#">Resume</a></li>
            </ul>
          </nav>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
            <Image alt="image" src={deved} layout='fill' objectFit='cover' /> 
          </div>

          <div className='text-center p-10'>
            <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl dark:teal-400'>MANIKANDAN A</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>AUTOMOTIVE BODY-IN-WHITE DESIGN ENGINEER</h3>
            <p className='text-md pt-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-200'>Automotive Body In White Design engineer who avids a greater role to play in the design of automotive BIW </p>
            <a href="https://www.mercedes-benz.co.in/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE"><span className='text-gray-800 text-sm hover:text-yellow-600 dark:text-white dark:hover:text-yellow-200'>@ Mercedes Benz Research and Development India</span></a>  
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href="https://twitter.com/this_is_M_a_n_i"><AiFillTwitterCircle className='hover:text-teal-600'/></a>
            <a href="https://www.linkedin.com/in/manikandan-appavoraj/"><AiFillLinkedin className='hover:text-teal-600'/></a>
            <a href="#contact"><AiTwotoneMail className='hover:text-teal-600'/></a>
          </div>

          
        </section>

        <section className='py-10 text-center'>
          <div>
            <h3 className='text-3xl py-1 text-teal-600 dark:text-teal-400'>SERVICES I OFFER</h3>
            <div className='border-t-2 mx-auto w-20 mt-1 border-gray-800 dark:border-gray-200'></div>
            <p className='text-md py-5 leading-8 text-gray-800 mx-auto md:text-lg dark:text-gray-200'>Since the beginning of my journey as a freelance developer, I have done remote work for a year</p>
            <p className='text-md py-1 leading-8 text-gray-800 mx-auto md:text-lg dark:text-gray-200'>I offer a wide range of services, including programming and teaching</p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image alt="image" className='mx-auto' src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 '>
                Creating elegant designs suited for your needs design theory
              </p>
              <h4 className='py-4 font-medium text-teal-700'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image alt="image" className='mx-auto' src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 '>
                Creating elegant designs suited for your needs design theory
              </p>
              <h4 className='py-4 font-medium text-teal-700'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image alt="image" className='mx-auto' src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 '>
                Creating elegant designs suited for your needs design theory
              </p>
              <h4 className='py-4 font-medium text-teal-700'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
          
        <section className='py-10'>
          <div className='text-center'>
            <h3 className='text-3xl py-1 text-teal-600 dark:text-teal-400'>PORTFOLIO</h3>
            <div className='border-t-2 mx-auto w-20 mt-1 border-gray-800 dark:border-gray-200'></div>
            <p className='text-md py-5 leading-8 text-gray-800 mx-auto md:text-lg dark:text-gray-200'>Since the beginning of my journey as a freelance developer, I have done remote work for a year</p>
            <p className='text-md py-1 leading-8 text-gray-800 mx-auto md:text-lg dark:text-gray-200'>I offer a wide range of services, including programming and teaching</p>
          </div>

          <div className='flex flex-col gap-10 py-10 px-20 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image alt="image" src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="image" src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="image" src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="image" src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="image" src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt="image" src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
          
        </section>
      </main>

      <section id="contact" className='bg-gray-800'>
        <div className='p-10'>
          <div className='text-center'>
            <h3 className='text-3xl py-1 text-teal-600 dark:text-teal-400'>CONTACT ME ! </h3>
            <div className='border-t-2 mx-auto w-20 mt-1 border-gray-200'></div>
          </div>
          <div className='max-w-4xl mx-auto'>
            <form className='flex flex-col px-10 md:px-20 sm:px-30'>
              <label className='text-xl mt-5 mb-2 text-gray-200'>Name</label>
              <input type="text" className=' bg-gray-300 border-gray-300 border-2 rounded-lg outline-none p-2 text-teal-600 shadow-lg focus:border-teal-600'></input>
              <label className='text-xl mt-5 mb-2 text-gray-200'>Purpose</label>
              <textarea rows={3} cols={4}  type='textarea' className='bg-gray-300 border-gray-300 border-2 rounded-lg p-2 text-teal-600 shadow-lg outline-none focus:border-teal-600'></textarea>  
              <button className='text-white mt-10 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500
                  shadow-lg hover:shadow-yellow-200 inline-block text-center'  type='submit'>Looking forward</button>
            </form>

            
          </div>
        </div>
         <a href="https://www.linkedin.com/in/naveen-kumar-bba000216/"><p className=' text-gray-500 mt-5 pb-2 text-center hover:text-yellow-600'>Website Created by Naveen A</p></a>
      </section>

    </div>
  )
}
