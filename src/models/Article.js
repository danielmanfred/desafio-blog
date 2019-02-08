import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import slug from 'mongoose-slug-updater'

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    permalink: {
        type: String,
        slug: 'title',
        required: true
    },
    image: {
        type: String, // Image URL
    },
    authors: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        default: []
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: []
    }],
    lastUpdateDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

articleSchema.plugin(mongoosePaginate)
articleSchema.plugin(slug)

export default mongoose.model('Article', articleSchema)
