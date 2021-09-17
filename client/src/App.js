import { React, useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const resetUserInputs = () => {
    setTitle("");
    setBody("");
  };

  const getPosts = async () => {
    await axios
      .get("https://post-app-deploy.herokuapp.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch(() => {
        alert("Error retrieving data!");
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  /* console.log(posts); */

  const savedPost = async (payload) =>
    await axios({
      url: "https://post-app-deploy.herokuapp.com/posts/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        resetUserInputs();
        getPosts();
      })
      .catch(() => {
        alert("Internal server error");
      });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      body,
    };
    //console.log(payload);
    savedPost(payload);
  };

  return (
    <>
      <div id="container">
        <h1 id="title">Post App - Fullstack application(MERN)</h1>
        <h2 id="subtitle">Welcome to my super App!</h2>
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              name="title"
              placeholder="Enter your title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              name="body"
              placeholder="Enter your body"
              value={body}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="posts-container">
          {posts.map((post, index) => (
            <div className="posts" key={index}>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
