function Car(props) {
    console.log(props.title);
    
    return (
        <div style={{ width: 400 }}>
            <img width={400} src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut consequuntur sed.</p>
            <button>Add to cart</button>
            <td bgcolor="orange">asdasd </td>
        </div>
    )
}

export default Car





// function sum(num1, num2) {
//     console.log(num1);
//     console.log(num2);
//     console.log(num1 + num2);


// }

// sum(4, 9)