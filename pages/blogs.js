import React from 'react'
import Blog from '../models/Blog';
import ConnectDb from '../middleware/mongoose'
import mongoose from "mongoose"
import Link from 'next/link';
const blogs = ({blogs}) => {
  console.log(blogs)
  return (
    <>
    <div className="container">
  <section className="text-gray-600 body-font overflow-hidden ml-20 mr-20">
    <div className="container px-5 py-20 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100">

        {blogs.map((item)=>{

        
        return <div key={item._id} className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">
              {item.category}
            </span>
            <span className="mt-1 text-gray-500 text-sm">{item.createdAt.slice(0,10)}</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              {item.title}
            </h2>
            <p className="leading-relaxed">
              {item.content.slice(0,210)}
            </p>
            <Link href={`/blog/${item.slug}`}><a className="text-indigo-500 inline-flex items-center mt-4">
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a></Link>
          </div>
        </div>
        })}
        
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URL) 
}
  let myblogs = await Blog.find();
  return {
    props: {blogs: JSON.parse(JSON.stringify(myblogs))}, // will be passed to the page component as props
  }
}

export default blogs;