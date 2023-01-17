const mongoose = require("mongoose");
const { PhoneSchema } = require("./Schemas");
const PhoneModel = mongoose.model("Phone", PhoneSchema);

module.exports = {
    PhoneModel,
}