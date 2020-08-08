import React, { Component } from "react";
import {Button,Container,Image,Menu, Icon,Label, Divider} from "semantic-ui-react"
import "./info.css"
const UserInfo = props => {
  return (
    <div className="user-info">
      <div className="avatar">
        <Image src={props.user.avatar_url} style={{marginLeft: '2px'}} alt="avatar" circular  size ="tiny"/>
      </div>
      <div className="content">
        <h1>{props.user.name}</h1>
        <p>
       <strong> <span style ={{color:"orange"}}>Bio: </span>
          {props.user.bio}</strong>
        </p>
        <p>
<strong><span style ={{color:"orange"}}>Username:</span> {props.user.login} </strong>
        </p>
        <Menu compact>
    <Menu.Item as='a'>
      <Icon name='star' /> Followers
      <Label color='red' floating>
      {props.user.followers}
      </Label>
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='users' /> Following
      <Label color='teal' floating>
      {props.user.following}
      </Label>
    </Menu.Item>
  </Menu>
  <br></br>
  <br></br>
  <strong><span style ={{color:"orange"}}>Link:</span></strong>
  <br></br>
  <br></br>
  <Label as='a' image size ="large">
      <img src={props.user.avatar_url} />
      <a href = {props.user.html_url}>{props.user.html_url}</a>
    </Label>
    <Divider/>
      </div>
    
      
      <div>
        <h4> Developer: Ayush..</h4>
      </div>
      </div>
  );

};

export default UserInfo;