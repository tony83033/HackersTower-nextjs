import React from 'react'

const workshop = () => {
  return (
   <>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
       Workshop
      </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
      Sorry! no active workshop found
      </p>
    </div>
    
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button> */}
  </div>
  
</section>

     </>
  )
}

export default workshop