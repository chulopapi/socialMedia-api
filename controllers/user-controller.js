const { User, Thought } = require('../models');

const userController = {
    async getAllUsers(req,res) {
        try {
            const users = await User.find({})
            .select('-__v')
            res.json(users)
        }
        catch(err) {
            res.status(400).json(err)
        }
    }
}
module.exports = userController
