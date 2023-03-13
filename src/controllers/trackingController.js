const trackingSchema = require('../models/trackingSchema');

const newOrderTrackings = async (req, res) => {
    const order = req.body.order;
    const userId = req.headers['userId'];

    if (!userId) {
        return res.status(401).json({
            statusCode: 401,
            message: 'User id is required.',
        });
    }

    if (!order) {
        return res.status(400).json({
            statusCode: 400,
            message: 'Order is required.',
        });
    }

    const tracking = await trackingSchema.findOne({ userId, order });

    if (tracking.userId === userId) {
        return res.status(200).json({
            statusCode: 200,
            message: 'You are already tracking this order.',
        });
    }
};

module.exports = {
    newOrderTrackings,
};
