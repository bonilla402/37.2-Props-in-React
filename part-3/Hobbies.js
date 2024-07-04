const Hobbies = ({ hobbies }) => {
    return (
        <ul>
            {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
            ))}
        </ul>
    );
}