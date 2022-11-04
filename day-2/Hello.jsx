const Hello = ({name}) => {
    return <h1> Hello { name}</h1>
};

Hello.propTypes ={
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Hello.defaultProps = {
    name : "User",
}
// export default Hello

//  ? thường sử dụng để trả về 1 trong 2 giá trị khác nhau