import { Route } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} exact path="/" />
      <Route component={LoginPage} exact path="/login" />
      <Route component={RegisterPage} exact path="/register" />
    </>
  );
};

export default App;
