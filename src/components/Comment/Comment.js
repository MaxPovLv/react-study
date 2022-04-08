import '../styles.css';

export const Comment = ({ comment }) => {
  return (
      <div className={'element_style'}>
        <span>{comment.body}</span>
      </div>
  );
}
