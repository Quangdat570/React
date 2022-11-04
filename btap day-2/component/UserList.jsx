const UserList = ({ users }) => {
    const list = users.map((user) => <UserCart user={user}/> )
    return <div className="User-list d-flex flex-wrap mt-5">{list}</div>
};

UserList.propTypes = {
    users: PropTypes.arrayOf(UserCartType),
};