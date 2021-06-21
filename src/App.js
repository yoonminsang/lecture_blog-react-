import { Route, Switch } from 'react-router-dom';
import 'App.css';
import PostListPage from 'pages/PostListPage';
import RegisterPage from 'pages/RegisterPage';
import WritePage from 'pages/WritePage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route component={PostListPage} exact path="/" />
        <Route component={LoginPage} exact path="/login" />
        <Route component={RegisterPage} exact path="/register" />
        <Route component={WritePage} exact path="/write" />
      </Switch>
    </>
  );
};

export default App;
