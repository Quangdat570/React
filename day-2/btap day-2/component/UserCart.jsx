const UserCart = ({user}) => {
    return (
        <div className="cart col-3 text-center mt-5">
            <img src= { user.avatar } alt= { user.fullname } className="rounded-circle" />
            <div className="title-name"> { user.fullname } </div>
            <div className="job"> { user.job } </div>
        </div>
    );
};

const UserCartType = PropTypes.exact({
    id: PropTypes.string,
    fullname:  PropTypes.string,
    avatar:  PropTypes.string,
    job:  PropTypes.string,
});

UserCart.propTypes = {
    user: UserCartType,
};