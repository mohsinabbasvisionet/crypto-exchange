import React, { useState } from 'react';

function Blogs() {
    const [blogData, setBlogData] = useState([
        { id: 1, title: 'Blog 1', subtitle: 'Subtitle 1', author: 'Author 1' },
        { id: 2, title: 'Blog 2', subtitle: 'Subtitle 2', author: 'Author 2' },
        { id: 3, title: 'Blog 3', subtitle: 'Subtitle 3', author: 'Author 3' },
        // Add more blog data here
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [newBlog, setNewBlog] = useState({ id: '', title: '', subtitle: '', author: '' });

    const handleView = (blogId) => {
        console.log('View blog:', blogId);
    };

    const handleEdit = (blogId) => {
        console.log('Edit blog:', blogId);
    };

    const handleDelete = (blogId) => {
        console.log('Delete blog:', blogId);
        setBlogData((prevData) => prevData.filter((blog) => blog.id !== blogId));
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
    };

    const handleAddBlog = () => {
        setBlogData((prevData) => [...prevData, newBlog]);
        setNewBlog({ id: '', title: '', subtitle: '', author: '' });
        handleModalClose();
    };

    return (
        <div>
            <h2>Blogs</h2>
            <button className="btn btn-success mb-3" onClick={handleModalOpen}>+</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Unique blog Id</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {blogData.map((blog) => (
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.subtitle}</td>
                        <td>{blog.author}</td>
                        <td>
                            <button className="btn btn-primary btn-sm" onClick={() => handleView(blog.id)}>View</button>
                            <button className="btn btn-warning btn-sm" onClick={() => handleEdit(blog.id)}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(blog.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal" >
                        <form className="form_modal">
                            <h3>Add Blog</h3>
                            <div className="form-group">
                                <label>Unique blog Id:</label>
                                <input
                                    type="text"
                                    name="id"
                                    value={newBlog.id}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newBlog.title}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Subtitle:</label>
                                <input
                                    type="text"
                                    name="subtitle"
                                    value={newBlog.subtitle}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Author:</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={newBlog.author}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <button type="button" onClick={handleAddBlog} className="btn btn-primary">Add</button>
                            <button type="button" onClick={handleModalClose} className="btn btn-secondary">Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blogs;
