import React, { Component } from 'react';
import ChatCard from './ChatCard'
import ChatManager from '../../modules/ChatManager'
export default class ChatList extends Component {
	state = {
		userId: localStorage.getItem('userId'),
        messages: [],
        messageInput: ""
	};
	scrollToBottom = () => {
		const chatDiv = document.getElementById('chat-messages');
		chatDiv.scrollTop = chatDiv.scrollHeight;
	};
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
            console.log(messagesFromDatabase);
            this.setState({
              messages: messagesFromDatabase
            });
          })
	}
	render() {
		return (
			<React.Fragment>
				<div className="chat-messages" id="chat-messages" key={this.state.userId}>
					{this.state.messages.map((message) => {
						return <ChatCard {...this.props} message={message} route={this.props.route} />;
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