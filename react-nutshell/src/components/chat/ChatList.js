import React, { Component } from "react";
//import the components we will need
import ChatCard from "./ChatCard";
import ChatManager from "../../modules/ChatManager";
import { Button } from "react-bootstrap";

class ChatList extends Component {
  //define what this component needs to render
  // set the array of Chats in state
  state = {
    Chats: []
  };
  // method to delete one Chat
  deleteChat = id => {
    ChatManager.delete(id).then(() => {
      ChatManager.getAll().then(Chats => {
        this.setState({
          Chats: Chats
        });
      });
    });
  };

  componentDidMount() {
    console.log("Chat LIST: ComponentDidMount");
    //call getAll from ChatManager to bring back all Chats for a user and hang on to that data; put it in state
    ChatManager.getAll().then(Chats => {
      this.setState({
        Chats: Chats
      });
    });
  }
  // render the Chats and return the keys to be used in the Chat card
  render() {
    console.log("ChatList: Render");

    return (
      <>
        <section className="section-content">
          {/* create button to create a new Chat on click of submit button */}
        <h1>ChatRoom</h1>
        </section>
        <div className="container-cards">
          {this.state.Chats.map((Chat, index) => (
            <ChatCard
              key={Chat.id}
              indexProp= {index}
              Chat={Chat}
              deleteChat={this.deleteChat}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ChatList;
