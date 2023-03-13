const { model, Schema } = require('mongoose');

const trackingSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        order: {
            type: String,
            required: true,
        },
        statusTracking: {
            type: String,
            default: 'active',
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamps: true }
);

module.exports = model('Tracking', trackingSchema);
