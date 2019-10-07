import React, { Component } from "react";
import { Button } from "react-bootstrap";
class ChatCard extends Component {
  render() {
    return (
      <div className="card">
        <div className={this.props.indexProp === 0 ? "first-Chat" : "card-content"}>
          <h4>
            Chat Name:{" "}
            <span className="card-Chat">{this.props.Chat.chat}</span>
          </h4>
          <Button
            variant="light"
            id="edit-btn"
            onClick={() => {
              this.props.history.push(`/Chats/${this.props.Chat.id}/edit`);
            }}
          >
            Edit Chat
          </Button>
          {/* create button to delete Chat */}
          <Button
            variant="light"
            id="delete-btn"
            onClick= {()=>this.props.deleteChat(this.props.Chat.id)}
          >
            Delete Chat
          </Button>
        </div>
      </div>
    );
  }
}

export default ChatCard;
