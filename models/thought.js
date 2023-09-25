
const {Schema, model} = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({
    thoughtText: {type: String, require: true},

    createdAt: { type: Date, default: Date.now, get: (timeStamp)=> timeStamp.toLocaleDateString()},

    username: { type: String, require: true},
    
   reactions:[
        reactionSchema
   ]


  
},
{
    toJSON: {
        virtuals:true,
        getters: true
    }
}

)
thoughtSchema.virtual('reactionCount')
.get( function(){
    return this.reactions.length;
})


const Thought = model('thought', thoughtSchema);

module.exports = Thought;