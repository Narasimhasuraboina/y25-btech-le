const MenuItem = (props) => {
    return (
        <>
            <h2> Name: {props.name}</h2>
            <h2>Category:{props.category}</h2>
            <h3>Price: {props.price}</h3>
        </>
    )
}
export default MenuItem;