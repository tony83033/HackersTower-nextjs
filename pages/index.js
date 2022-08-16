import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Typewriter from "typewriter-effect";
// import Head from 'next/dist/shared/lib/head'

export default function Home() {
  

  return (
    <>
      <Head>
      <title>HackersTower</title>
        <meta name="description" content="HackersTower Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
  {/* ========================================================================================================================== */}
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          WANT TO LEARN
          <br className="hidden lg:inline-block" />
          <Typewriter
          options={{
            
            autoStart: true,
            loop: true,
            delay: 69,
          }}
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("ETHICAL HACKING.")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("BUG BOUNTY.")
       .pauseFor(1000)
       .deleteAll()
       .typeString("PYTHON.")
       .pauseFor(1000)
       .deleteAll()
       .typeString("PENTESTING.")
       .pauseFor(1000)
       .deleteAll()
       .typeString("BASH SCRIPT.")
       .pauseFor(1000)
       .deleteAll()
       .typeString("DevOps.")
       .pauseFor(1000)
       .deleteAll()
       .typeString("CYBER SECURITY.")
       .pauseFor(1000)
       .deleteAll()
       
       
       .start();
       }}
       />
        </h1>
        <p className="mb-8 leading-relaxed">
          We provide FREE hands-on training in various fields of computer
          science and have an inclusive community focussing on a learn by doing
          approach. A complete solution to all your mentorship needs, including
          learning resources, communities to be a part of, opportunities, and
          much more.
        </p>
        {/* <p class=" leading-relaxed">We make Hacking simple & easy to understand.</p> */}
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
            Get started
          </button>
          {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About</button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="sideimg.png"
        />
      </div>
    </div>
  </section>

  <>
  {/* ======================================================================================================== */}
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl  title-font mb-2 text-gray-900 font-bold">
          FEATURES
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-2xl">
          What makes our courses special?
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Structured Learning
            </h2>
            <p className="leading-relaxed text-base">
              Learning made easy. Complete syllabus is covered while never
              compromising on quality.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx={6} cy={6} r={3} />
                <circle cx={6} cy={18} r={3} />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Notes
            </h2>
            <p className="leading-relaxed text-base">
              Get complete notes for all lectures so that you can focus on
              learning and practising.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Assignments
            </h2>
            <p className="leading-relaxed text-base">
              Assignments and questions are provided to understand the concepts
              well.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Doubt Support
            </h2>
            <p className="leading-relaxed text-base">
              Clear all your doubts through LIVE discord support.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Guidance
            </h2>
            <p className="leading-relaxed text-base">
              Get expert guidance with career, open source and internships, jobs
              around the world.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Projects
            </h2>
            <p className="leading-relaxed text-base">
              Learn by doing and apply your knowledge via projects and open
              source contributions.
            </p>
          </div>
        </div>
      </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
    </div>
  </section>
</>

</>

    </>
  )
}
