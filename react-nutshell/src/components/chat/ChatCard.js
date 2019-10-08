import React, { Component } from 'react';
export default class MessageComponent extends Component {
    //renders messages from chatinput to chatroom
	render() {
		return (
			<React.Fragment>
				<div key={this.props.message.id} className="chat">
					<span id={this.props.message.userId} className="chat-name" >
						{this.props.message.user.username.split(' ')[0]}:
					</span>{' '}
                    <p onClick={()=>this.props.clickedMessage(this.props.message)}>{this.props.message.message}</p>
				</div>
			</React.Fragment>
		);
	}
}