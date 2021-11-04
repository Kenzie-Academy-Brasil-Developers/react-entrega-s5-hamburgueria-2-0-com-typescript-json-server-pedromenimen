import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Routes;
