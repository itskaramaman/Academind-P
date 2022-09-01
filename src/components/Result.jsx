const Result = (props) => {
  return (
    <div className="container">
      <div className="card">
        {props.users.map((user) => (
          <p>
            {user.username} ({user.age})
          </p>
        ))}
      </div>
    </div>
  );
};

export default Result;
