const Tweet = (props) => {
	return (
		<div className="tweet">
			<div className="tweet-header">
				<div>
					<span className="name">{props.name}</span>
					<span className="username"> @{props.username}</span>
				</div>
				<div className="date">{props.date}</div>
			</div>
			<div className="tweet-message">
			{props.message}
			</div>
    	</div>
	);
};
