import '../styles.css';

export const User = ({ user }) => {
  return (
      <div className={'element_style'}>
        <span>Userame: {user.username}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Name: {user.name}</span><br/>
      </div>
  );
}
