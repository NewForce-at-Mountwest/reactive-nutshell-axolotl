import React, { Component } from 'react';

export default class MessageComponent extends Component {
	isUser = () => {
		if (this.props.message.userId === localStorage.getItem('userId')) {
			return (
				<button
					type="button"
					className="btn size1button"
					onClick={() => {
					}}
				>
					Edit
				</button>
			);
		} else {
        }

    };


	// handleFriendship = (e) => {
	// 	window.alert('Are you sure you want to add this friend?');
	// 	const friendshipObject = {
	// 		otherId: +e.target.id,
	// 		userId: +localStorage.getItem('userId')
	// 	};

	// 	return fetch(`http://localhost:1234/friends`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(friendshipObject)
	// 	}).then((d) => d.json()).then(()=> window.alert("They're now your friend!"))
	// };

	render() {
		return (
			<React.Fragment>
				<div key={this.props.message.id} className="chat">
					<span id={this.props.message.userId} className="chat-name" >
						{this.props.message.user.username.split(' ')[0]}:
					</span>{' '}
                    <p onClick={()=>this.props.clickedMessage(this.props.message)}>{this.props.message.message}</p>
					{this.isUser()}
				</div>
			</React.Fragment>
		);
	}
}