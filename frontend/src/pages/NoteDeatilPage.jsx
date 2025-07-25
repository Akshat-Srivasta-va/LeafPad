import { ArrowLeft, ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { Link } from "react-router";

const NoteDeatilPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching the note", error);
        toast.error("Failed to fetch the Note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async() => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
await api.delete(`/notes/${id}`);
toast.success("Note Deleted");
navigate("/");
    } catch(error) {
      console.log("Error in deleting note:", error);
toast.error("Failed to delete Note");
    }
  };
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content")
      return;
    }
    setSaving(true)

    try {
await api.put(`/notes/${id}`, note)
toast.success("Note updated sucessfully");
navigate("/")
    } catch (error) {
      console.log("Error in saving note:", error);
toast.error("Failed to update Note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline rounded-2xl"
            >
              <Trash2Icon className="h-5 w-5 " />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <br />
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>

              <div className="card-actions justify-end">
<button className="btn btn-primary rounded-2xl" disabled={saving} onClick={handleSave}>
{saving ? "Saving..." : "Save Changes"}
</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDeatilPage;
