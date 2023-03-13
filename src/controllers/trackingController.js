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

    if (tracking.userId === userId && tracking.order === order) {
        return res.status(200).json({
            statusCode: 200,
            message: 'You are already tracking this order.',
        });
    }

    const newOrder = new trackingSchema({
        userId,
        order,
    });

    await newOrder.save();

    return res.status(201).json({
        statusCode: 201,
        message: 'New order tracking created.',
    });
};

const userTracking = (req, res) => {
    const userId = req.headers['userId'];

    if (!userId) {
        return res.status(401).json({
            statusCode: 401,
            message: 'User id is required.',
        });
    }

    trackingSchema.find({ userId }, (err, trackings) => {
        if (err) {
            return res.status(500).json({
                statusCode: 500,
                message: 'Internal server error.',
            });
        }

        return res.status(200).json({
            statusCode: 200,
            trackings,
        });
    });
};

module.exports = {
    newOrderTrackings,
    userTracking,
};
