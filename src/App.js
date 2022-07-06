import React from "react";
import Mainpg from "./components/Main";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import VirtualMeet from "./components/VirtualMeet";
import InPersonMeetForm from "./components/InPersonMeetForm";
import VirtualMeetForm from "./components/VirtualMeetForm";
import InPersonMeet from "./components/InPerson";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Mainpg} />
        <Switch>
          <Route exact path="/" component={Mainpg} />
          <Route path="/Mainpg" component={Mainpg} />
          <Route path="/VirtualMeet" component={VirtualMeet} />
          <Route path="/VirtualMeetForm" component={VirtualMeetForm} />
          <Route path="/InPersonMeetForm" component={InPersonMeetForm} />
          <Route path="/InPersonMeet" component={InPersonMeet} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </React.Fragment>
    </>
  );
}

export default App;
