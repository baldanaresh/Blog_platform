const prisma=require('../prismaClient');

const createPost=async(req,res)=>{
    const {title,content}=req.body;
    const {userId}=req.user;

    try{
        const post=await prisma.post.create({
            data:{
                title,
                content,
                authorId:userId,
            },
        });
        res.status(201).json({message:'post created successfully',post});
    }catch(error){
         res.status(500).json({ error: 'Something went wrong' });
    }
};

//to update the post

const updatePost=async (req,res)=>{
    const {id}=req.params;
    const {title,content}=req.body;
    const {userId}=req.user;

    try{
        const post = await prisma.post.findUnique({ where: { id: Number(id) } });
     
        // Ensure the user is the author of the post
        if (post.authorId !== userId) {
      return res.status(403).json({ error: 'You are not allowed to edit this post' });

      //update the post
    }
     const updatedPost = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, content },
    });
     res.status(200).json({ message: 'Post updated successfully', updatedPost });
    }catch(error){
        res.status(500).json({error:'something went wrong'});
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                comments: {
                    include: {
                        user: true
                    }
                }
            }
        });

        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await prisma.post.delete({
            where: {
                id: parseInt(id),
            }
        });

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};
// const userId = req.user.userId;

const addComment = async (req, res) => {
    // console.log('Request headers:', req.headers);
    // console.log('Request body:', req.body); // Log the request body

    const userId = req.user.userId;

    try {
        const newComment = await prisma.comment.create({
            data: {
                content: req.body.content, // Get content from request body
                userId: userId,
                postId: parseInt(req.params.postId, 10), // Convert postId to integer
            }
        });

        return res.status(201).json(newComment);
    } catch (error) {
        console.error('Error adding comment:', error);
        return res.status(500).json({ message: 'Error adding comment', error: error.message });
    }
};


module.exports = { 
    createPost,
    updatePost ,
    getAllPosts,
    deletePost,
    addComment 
};
  