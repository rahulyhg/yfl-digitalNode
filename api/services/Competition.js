var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    coach: {
        type: Schema.Types.ObjectId,
        ref: 'Coach',
        required: true,
        index: true
    },
    athlete: [{
        type: Schema.Types.ObjectId,
        ref: 'Athlete',
        required: true,
        index: true
    }],
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    details: {
        type: String,
        required: true
    },
    isKey: {
        type: String,
        enum: ['Yes', 'No']
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected']
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Competition', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);