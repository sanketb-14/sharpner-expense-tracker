const User = require('../models/UserModel');


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            status: 'success',
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch users',
            error: error.message,
        });
    }
};


exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await User.create({ name, email });
        res.status(201).json({
            status: 'success',
            data: newUser,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to create user',
            error: error.message,
        });
    }
};


exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found',
            });
        }
        await user.destroy();
        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete user',
            error: error.message,
        });
    }
};

