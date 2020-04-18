import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getPosts, deletePost, updatePost, savePost } from "../../services/userService";
const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";


class Users extends Component {
  state = {
    posts: []
  };



   handleAdd = async () => {
    const newPost = {
        title: "new Title ...",
        body: "new Body  ...",
        userId: 1
      };
      const { data: post } = await savePost(newPost);
      console.log(post);
      toast.success("handleAdd");
      const posts = [post, ...this.state.posts];
      this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "Updated";
    const { data: updatedPost } = await updatePost(post)
    console.log(updatedPost);
    toast.success("handleUpdate");
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    await deletePost(post.id);
    toast.success("handleDelete");
    const posts = this.state.posts.filter(item => item.id !== post.id);
    this.setState({ posts });
  };

  async componentDidMount() {
   
    const { data: posts } = await getPosts();
    this.setState({ posts }); // = { posts: posts }
}

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary mt-1 mb-1" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Users;