const User = ({user}) => {
    if (user) {
        return (
            <div>
                <Hello name={user.name} />
                <button>Log out</button>
                {user.isAdmin && <button>Admin Page</button>}
            </div>
        )
    } 
    return (
        <div>
            <button>Đăng nhập</button>
            <button> Đăng ký</button>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.exact,
    name: PropTypes.string,
    isAdmin: PropTypes.bool,
}
User.defaultProps = {
    user:"",
}