import React from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Blogs from '../../models/Blog'
import connectDb  from '../../middleware/mongoose'
const Blog = ({blogs}) => {
    
  console.log("My blog is ", blogs)
  return (
    
      <>
  {/* Jumbotron */}
 

  
   <div  className="p-6 shadow-lg rounded-lg my-10 mx-10 bg-gray-100 text-gray-700">
    <h2 className="font-semibold text-3xl mb-5">{blogs.author}</h2>
    <p>
     {blogs.title}
    </p>
    <hr className="my-6 border-gray-300" />
    <p>
      {blogs.content}
    </p>
    
  </div>
  
  {/* Jumbotron */}
</>

   
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URL) 
}
  
  let myblog = await Blogs.findOne({slug:context.query.slug})
  return {
    props: {blogs: JSON.parse(JSON.stringify(myblog))}, // will be passed to the page component as props
  }
}

export default Blog