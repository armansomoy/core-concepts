import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = [
    'Arman Hossain',
    'Arif Hossain',
    'Arifa Akhter',
    'Mr. Arman Hossain',
    'Mr. Arif Hossain',
    'Mrs. Arifa Akhter'
  ];
  const products = [
    {name: 'photoshop', pricing: '$90.99'} ,
    {name: 'Illustator', pricing: '$80.99'}, 
    {name: 'Lightgroom', pricing: '$120.99'} ,
    {name: 'Premiar Pro', pricing: '$120.99'} 
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React App</p>

        <Users></Users>

        <Counter></Counter>

        <ul>
          {
            names.map(name => <li>{name}</li> )
          }
          {
            products.map(product => <li>{product.name}{product.pricing}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product} ></Product> )
        }

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
          
        <Person name="Nayok Rubel" name2="Shabana" names={names[0]}></Person>
        <Person name="Nayok Manna" name2="Shabana" names={names[1]}></Person>
        <Person name="Nayok Shakib" name2="Shabana" names={names[2]}></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] =useState([]);
  useEffect( () => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
      .then(data => setUsers(data));
    },
    []
  )
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Counter (){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}



function Product(props) {
  const productStyle= {
      backgroundColor : 'lightgray',
      border: '1px solid gray',
      borderRadius: '5px',
      height: '250px',
      width: '350px',
      float: 'left',
      color: 'black',
      margin: '10px',
      padding: '10px'
  }
  const {name, pricing} = props.product;
  return (
    <div style={productStyle}>
        <h3>Name : {name} </h3>
  <h1>{pricing}</h1>
        <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  var style = {
     border: '2px solid cyan',
     margin: '10px',
     padding: '20px',
     borderRadius: '10px' 
    }
    console.log(props);
  return (
  <div style={style}>
    <h1> Name : { props.name}</h1>
    <h3>{props.name2}</h3> 
    <h1>{props.names}</h1> 
  </div> 
  )  
}



export default App;
