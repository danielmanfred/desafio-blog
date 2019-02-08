import repository from '../repositories/Article'

const getAllArticles = async (req, res) => {
    try {
        const articles = await repository.getAllArticles()
        res.json({ articles })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const getArticleById = async (req, res) => {
    try {
        const article = await repository.getArticleById(req.params.id)
        res.json({ article })
    }   
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const createArticle = async (req, res) => {
    try {
        const article = await repository.createArticle(req.body)

        res.status(201).json({ 
            message: 'Article created successfully',
            article
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to create article',
            error: err.message
        })
    }
}

const updateArticle = async (req, res) => {
    try {
        await repository.updateArticle(req.params.id, req.body)
        res.json({ message: 'Article updated successfully' })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to update the article',
            error: err.message
        })
    }
}

const removeArticle = async (req, res) => {
    try {
        await repository.removeArticle(req.params.id)
        res.json({ message: 'Article deleted successfully' })
    }
    catch (err) {
        res.status(400).json({ 
            message: 'Failed to delete the article',
            error: err.message
        })
    }
}

const getPaginatedArticles = async (req, res) => {
    try {
        const articles = await repository.getPaginatedArticles(+req.params.page, +req.params.limit)
        res.json({ articles })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const insertComment = async (req, res) => {
    try {
        const comment = await repository.insertComment(req.params.id, req.body)
        res.json({ 
            message: 'Comment added successfully',
            comment
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to add comment',
            error: err.message
        })
    }
}

const deleteComment = async (req, res) => {
    try {
        await repository.deleteComment(req.params.id, req.params.commentId)
        res.json({ message: 'Comment deleted successfully' })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to delete comment',
            error: err.message
        })
    }
}

const editComment = async (req, res) => {
    try {
        await repository.editComment(req.params.commentId, req.body.text)
        res.json({ message: 'Comment edited successfully' })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to edit comment',
            error: err.message
        })
    }
}

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