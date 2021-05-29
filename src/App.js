import { Route } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} exact path="/" />
    </>
  );
};

export default App;
