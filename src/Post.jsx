import "./Post.css";

function Post({ title, author, date, time, image, text, separator }) {
  return (
    <div className="post">
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-meta">{author} • {date} • {time}</p>
        <p className="post-text">{text}</p>
        {separator && <div className="separator"></div>}
      </div>
    </div>
  );
}

export default Post;