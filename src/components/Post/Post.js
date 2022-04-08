import '../styles.css';

export const Post = ({ post }) => {
  return (
      <div className={'element_style'}>
        <span>{post.title}</span>
      </div>
  );
}
