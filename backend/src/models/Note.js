import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true    // otherwise it would be optional
    }, 
    content: {
        type:String,
        required:true
    },
},
{timestamps:true}  //  automatically adds two fields by mongoDB to each document:  createdAt   updatedAt
)


const Note = mongoose.model("Note", noteSchema)

export default Note;