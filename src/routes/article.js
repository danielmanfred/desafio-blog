import express from 'express'
import controller from '../controllers/article'

const router = express.Router()

router.get('/', controller.getAllArticles)
router.get('/:id', controller.getArticleById)
router.post('/', controller.createArticle)
router.put('/:id', controller.updateArticle)
router.delete('/:id', controller.removeArticle)

router.get('/getPaginatedArticles/:page/:limit', controller.getPaginatedArticles)

router.put('/:id/insertComment', controller.insertComment)
router.put('/:id/deleteComment/:commentId', controller.deleteComment)
router.put('/:id/editComment/:commentId', controller.editComment)

module.exports = app => app.use('/articles', router)
