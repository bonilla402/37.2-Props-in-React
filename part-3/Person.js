const Person = ({ name, age, hobbies  }) => {

	let displayName = name.length > 8 ? name.substring(0, 6) : name;
	let votingMessage = age >= 18 ? "Please go vote!" : "You must be 18";
	let votingStatusClass = age >= 18 ? "voting-status blue" : "voting-status red";

    return (
        <div className="person">
            <p>Learn some information about this person:</p>
			<br></br>
            <p><strong>Name:</strong> {displayName}</p>
            <p><strong>Age:</strong> {age}</p>
            <div>
                <strong>Hobbies:</strong>
                <Hobbies hobbies={hobbies} />
            </div>
			<p className={votingStatusClass}>{votingMessage}</p>		
        </div>
    );
}