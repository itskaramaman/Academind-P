import Card from "../ui/Card";

const UserList = (props) => {
  if (props.users.length === 0) {
    return;
  }
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
