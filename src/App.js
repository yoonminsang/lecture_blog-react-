import { Route, Switch } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route component={PostListPage} exact path="/" />
        <Route component={LoginPage} exact path="/login" />
        <Route component={RegisterPage} exact path="/register" />
      </Switch>
    </>
  );
};

export default App;
