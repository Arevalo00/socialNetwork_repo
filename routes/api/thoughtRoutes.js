const router = require('express').Router();

const {
    getThoughts,
    getoneThought,
    createThought,
    deleteThought,
    updateThought,
    
} = require('../../controllers/thoughtController');

// api/thoughts

router.route('/').get(getThoughts).post(createThought);

// api/thoughts/:thoughtId

router.route('/:thoughtId')
.get(getoneThought)
.put(updateThought)
.delete(deleteThought);

module.exports =router; 