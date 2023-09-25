const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,

} = require('../../controllers/userController');

// api/users 

router.route('/').get(getUsers).post(createUser);

// api/users/:userid

router.route('/:userid')
.get(getOneUser)
.delete(deleteUser)
.put(updateUser);

module.exports = router;