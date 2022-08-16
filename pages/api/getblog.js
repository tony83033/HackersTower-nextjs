import Blog from '../../models/Blog';
import ConnectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    let myblogs = await Blog.find()
    res.status(200).json({myblogs});

}

export default ConnectDb(handler);