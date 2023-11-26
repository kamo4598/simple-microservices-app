import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
