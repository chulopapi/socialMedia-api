// Thought controllers

const { User, Thought } = require('../models');

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({})
            .select('-__v')
            res.json(thoughts)
        }
        catch(err) {
            res.status(400).json(err)
        }
    }
}

module.exports = thoughtController