const { ObjectId } = require('bson');
const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId:{ type: Schema.Types.ObjectId, default: ObjectId },
    reactionBody: {type: String, require: true, maxlength: 280 },
    username: { type: String, require: true},
    createdAt: { type: Date, default: Date.now, get: (timeStamp)=> timeStamp.toLocaleDateString()}
});

module.exports = reactionSchema; 