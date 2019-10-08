import React, { Component } from 'react';
import ChatCard from './ChatCard'
import ChatManager from '../../modules/ChatManager'
export default class ChatList extends Component {

	state = {
		userId: localStorage.getItem('userId'),
        messages: [],
        messageInput: "",
        chatToEdit: {}
    };
    //update chat with inline edit
    updateChat = evt => {
        evt.preventDefault();
        //if you press enter
        if (evt.keyCode === 13)
       { const editedChat = {
          id: this.state.chatToEdit.id,
          message: this.state.messageInput,
          userId: this.state.chatToEdit.userId
        };
        //chat manager update function
        ChatManager.update(editedChat)
        //gets all messages again
          .then(ChatManager.getAll)
          //thens puts parsed info in messages
          .then(chats => {
            this.setState({
              messages: chats,
              chatToEdit: {}
            });
          });}
    };
    //scrolls to bottom of chat messages
	scrollToBottom = () => {
		const chatDiv = document.getElementById('chat-messages');
		chatDiv.scrollTop = chatDiv.scrollHeight;
    };
    //
	handleFieldChange = (e) => {
		const stateToChange = {};
		stateToChange[e.target.id] = e.target.value;
		this.setState(stateToChange);
	};
	Message = (e) => {
		e.preventDefault();
		const item = {
			message: this.state.messageInput,
            userId: +this.state.userId,

		};
		ChatManager.post(item).then(ChatManager.getAll).then(newMsgs=> this.setState({messages: newMsgs})
        )}
	componentDidMount() {
        ChatManager.getAll().then(messagesFromDatabase => {
            this.setState({
              messages: messagesFromDatabase
            });
          })
    };
    ChangetoInput =(clickMessage)=> {
        this.setState({
            chatToEdit: clickMessage,
            messageInput: clickMessage.message
        }
        )
    }
	render() {
		return (
			<React.Fragment>
				<div className="chat-messages" id="chat-messages" key={this.state.userId}>
					{this.state.messages.map((message) => {
						return this.state.chatToEdit.id===message.id ?(
                            <> <input type= "text" required className="form-control"onChange={this.handleFieldChange}id="messageInput"value={this.state.messageInput}onKeyUp={this.updateChat}/></>

                        ):<ChatCard {...this.props} clickedMessage={this.ChangetoInput} message={message} route={this.props.route} />;
					})}
				</div>
				<div className="chat-input">
					<form className="form-control chat">
						<input
							type="text"
							id="messageInput"
							placeholder="Don't be shy! Say Hi!"
							onChange={this.handleFieldChange}
						/>
						<button type="submit" onClick={this.Message} className="btn size1button">
							Submit
						</button>
					</form>
				</div>
			</React.Fragment>
		);
	}
}