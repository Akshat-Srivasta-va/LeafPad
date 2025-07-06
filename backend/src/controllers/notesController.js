import Note from "../models/Note.js";

// export const getAllnotes =  (req, res) => {               // In browser address bar, only GET requests are triggered.
//   res.status(200).send("You just fetched the notes");
// }

// or  like a function

export async function getAllnotes(_, res) {   // _ is because 'req' is declared but its value is never read.  so we cal also do it
  try {
    const notes = await Note.find().sort({createdAt: -1}); // -1 will sort it in desc order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error to getAllNotes Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.staus(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.log("Error to getNoteById Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error to createNotes Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        // .id because in router.put("/:id", updateNote);
        new: true,
      }
    );
    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updateNote);
  } catch (error) {
    console.log("Error in updateNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note Deleted sucessfully" });
  } catch (error) {
    console.log("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
