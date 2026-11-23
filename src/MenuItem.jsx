
const MenuItem = (props) => {
    return (
        <div className="menu-card">
            <h2>{props.name}</h2>
            <p>Category: {props.category}</p>
            <h3>₹{props.price}</h3>
        </div>
    )
}

export default MenuItem;
