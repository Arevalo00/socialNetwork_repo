const { User, Thought} = require('../models');

// get all users aggregate 

const userCount = async () => {
    const numberOfUsers = await User.aggregate()
    .count('userCount');
    return numberOfUsers;
};

// get all users 

module.exports = {
    async getUsers( req, res) {
        try {
            const users = await User.find();

            const userObj = {
                users,
                userCount: await userCount(),
            };
            res.json(userObj);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    // get one user 

    async getOneUser (req, res) {
        try {
            const user = await User.findOne({_id: req.params.userid})
            .select('__v');

            if (!user) {
                return res.status(400).json({message: 'No User with that id'}
                )
            }
            res.json ({
               user, 
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
            
        }
    },
    //create new user 

    async createUser( req, res ) {
        try {
            const user = await User.create(req.body);
            res.json(user);
            
        } catch (error) { 
            res.status(500).json(error);
            
        }
    },
    // delete user 

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({_id: req.params.userid})

            if (!user) {
                return res.status(400).json({message: 'This user is not found'}); 
            }

            res.json({message: 'deleted user'});
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
            
        }
    },

    // update user 

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userid},
                { runValidators: true , new: true }
                
            );
            if (!user){
                return res.status(400).json({message: 'No user with that id '});
            }
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
            
        }
    }
};
