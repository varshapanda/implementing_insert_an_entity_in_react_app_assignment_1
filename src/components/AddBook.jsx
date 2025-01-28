// src/components/AddBookForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBookForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Added book successfully')
    navigate("/");
  };

  return (
    <div className="add-book-form-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cover Image URL:
          <input
            type="url"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
