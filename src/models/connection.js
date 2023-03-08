const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        pwd: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamps: true }
);

module.exports = model('User', userSchema);
