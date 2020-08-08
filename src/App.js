import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import { thunk_fetch } from "./actions/fetchaction";
import {Button,Container,Image,Menu, Icon} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";
import "./App.css"

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.dispatch(thunk_fetch(username));
    this.getUsername.value = "";
  };
  render() {
    console.log(this.props.data);
    return (
     
 
      <div className="App">
         <div  className="d" >
     <h2><span style ={{color :"black"}}><Icon name ="github" size ="large"/>GITVIEWER</span>.com </h2> 
      </div>
<div className="for">
        <form onSubmit={this.handleSubmit} >
          <h2 className="title"><Icon name ="github"/>Enter<span style ={{color :"yellow"}}> the</span> Github <span style ={{color :"yellow"}}>Username :</span></h2>
          <div class="ui icon input">
          <input
            type="text"
            placeholder="Enter Github Username :"
            required
            ref={input => (this.getUsername = input)}
          />
          <i aria-hidden="true" class="search icon"></i>
          </div>
        
          <br></br>
          <Button className="button" color ="yellow" style ={{marginTop:"10px"}}>Submit</Button>
        </form>
        </div>
        <div className ="df">
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (
          <h3 className="error">No such User exists.</h3>
        ) : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <UserInfo user={this.props.data.userData} />
        ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(App);