const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RewardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    points: {
        type: Number,
        default: 0
    }
})

const Reward = mongoose.model('Reward', RewardSchema);

module.exports = Reward;