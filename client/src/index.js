import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Nevbar from "./Nevbar";
import ContactList from "./component/ContactList";
import AddContact from "./component/AddContact";
import EditContact from "./component/EditContact";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Nevbar />
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/allcontact" component={ContactList}></Route>
        <Route path="/addcontact" component={AddContact}></Route>
        <Route path="/editcontact/:id" component={EditContact}></Route>
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
