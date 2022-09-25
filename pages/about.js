import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        About Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        The organisation is founded by Anand Kumar, Mirtunjay paul, Sumit pal.
        We provide hands-on training, mentorship for FREE and have an inclusive
        community.
      </p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Anand Kumal
            </h2>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/84x84"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Sumit pal</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/88x88"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Mirtunjay paul
            </h2>
            <p className="text-gray-500">Event Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default about