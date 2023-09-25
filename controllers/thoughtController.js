const { User, Thought} = require('../models'); 

module.exports = {
// get all thoughts 

async getThoughts( req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json(error);
        
    }
},
// get one thought 

async getoneThought(req, res) {
    try {
        const thought = await Thought.findOne({_id: req.params.thoughtId})
        .select('__v');

        if (!thought){
            return res.status(400).json({message: 'No thought with that id'});
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
},
// create thought

async createThought( req, res ) {
    try {
        const thought =await Thought.create(req.body);
        res.json(thought);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
},
//delete thought 

async deleteThought( req, res ) {
    try {
        const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});

        if (!thought) {
            res.status(400).json({message: 'No thought with that id'})
        }
        res.json({message: 'the thought was deleted'});
    } catch (error) {
        res.select(500).json(error)
    }
},
// update thought 

async updateThought( req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true},
        );
        if (!thought){
            res.status(400).json({message: 'No thought with this id :( '});
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
        
    }
}
};