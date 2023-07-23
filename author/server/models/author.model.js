const mongoose = require("mongoose")



const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        minlength: [3, "Name must be at least 3 charachter"]
    }
}, { timestamps: true })


module.exports = mongoose.model("Author", AuthorSchema)
