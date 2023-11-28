const CommentList = ({ comments }) => {
  const getRenderedContent = (comment) => {
    if (comment.status === "rejected") {
      return "This comment has been rejected";
    } else if (comment.status === "approved") {
      return comment.content;
    } else {
      return "This comment is awaiting moderation";
    }
  };
  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{getRenderedContent(comment)}</li>
  ));

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
