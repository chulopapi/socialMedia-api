
const moment = require('moment');
const { Schema, model, Types } = require('mongoose');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            required: true,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        userName: {
            type: String,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
);
