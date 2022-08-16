// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from '../../models/Blog';
import ConnectDb from '../../middleware/mongoose'
const  handler = async(req, res)=>{

    if(req.method == 'POST'){
      let myblog = new Blog ({
        title: req.body.title,
        author: req.body.author,
        meta: req.body.meta,
        category: req.body.category,
        content: req.body.content,
        slug: req.body.slug,

      });
      console.log(req.body);
      await myblog.save();
      res.status(200).json({message: "Blog save Successfully"});

    }else{
      res.status(200).json({ name: 'Bad request' })
    }
    
  }

  export default ConnectDb(handler);
  