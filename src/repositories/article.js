import Article from '../models/Article'
import Comment from '../models/Comment'

const getAllArticles = async () => await Article.find().populate('authors', 'id username email')
                                                       .populate({ path: 'comments', populate: { path: 'user', select: 'id username email' } })

const getArticleById = async id => await Article.findById({ _id: id }).populate('authors', 'id username email')
                                                                      .populate({ path: 'comments', populate: { path: 'user', select: 'id username email' } })

const createArticle = async data => await (new Article(data)).save()

const updateArticle = async (id, data) => await Article.findByIdAndUpdate({ _id: id }, { $set: data })

const removeArticle = async id => await Article.deleteOne({ _id: id })

const getPaginatedArticles = async (page, limit) => await Article.paginate({}, { page, limit })

const insertComment = async (id, data) => {
    const comment = await new Comment(data)
    comment.save()
    await Article.updateOne({ _id: id }, { $push: { comments: comment.id } })
    return comment
}

const deleteComment = async (id, commentId) => { 
    await Article.updateOne({ _id: id }, { $pull: { comments: commentId } })
    await Comment.deleteOne({ _id: commentId })
}

const editComment = async (commentId, text) => await Comment.updateOne({ _id: commentId }, { text })

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    removeArticle,
    getPaginatedArticles,
    insertComment,
    deleteComment,
    editComment
}
