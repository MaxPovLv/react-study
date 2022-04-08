import './App.css';
import { Comments, Posts, Users } from './components';

export const App = () => {
  return (
      <div className={'main_cont'}>
        <div className={'users_posts'}>
          <Users/>
          <Posts/>
        </div>
        <Comments/>
      </div>
  );
}
