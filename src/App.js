import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  const khaza = ['laily akhter','khaza Minhaz','khaza abdul hanif','khaza abdul monib'];
  const products = [
    { name: 'photoShop', price: '$89.90' },
    { name: 'illustrator', price: '$60.90' },
    { name: 'PDF Reader', price: '$6.90' },
    { name: 'premiere EI', price: '$67.90' }


  ]

  const familyMember = khaza.map(member => member);
  console.log(familyMember);








  return (
    <div className="App">
      <header className="App-header">
        <p>I am react person</p>
        <Counter></Counter>
        <Users></Users>
        {
          khaza.map(member => <li>{member}</li>)
        }
        
        {
          products.map(product => <li>{product.name}</li>)
        }
        <Products product={products[0]}>  </Products>
        <Products product={products[1]}>  </Products>

        {
          products.map( pd => <Products product={pd}>  </Products> )
        }
        
        <Person name={khaza[0]} place='inDunia'></Person>
        <Person name='khaza abdul Monib' place='inDunia'></Person>
        <Person name="khaza abdul hanif" place='inAkhirah'></Person>
        <Person name="khaza abdul kibria" place='inAkhirah'></Person>

      </header>
    </div>
  );
}








function Counter(){
  const [count, setCount] = useState(1)
  // const handleIncrease = () => setCount(count + 1);
  return (
  <div>
    <h1>Count: {count}</h1>
    <button onMouseMove ={ () => setCount(count - 1) }>Decrease</button>
    <button onClick={ () => setCount(count + 1) }>Increase</button>
  </div>
  )
}


function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px'

  }
  
  return (
    <div style={{ border: '2px solid yellow', margin: '10px' }}>
      <h1> Khaza Family Member name: {props.name} </h1>
      <h3> place: {props.place}</h3>

    </div>
  )
}


function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )



}

function Users(){
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data))
  },[])
  return(
    <div>
     <h3>Dynamic users: {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.email}</li>)
       }
     </ul>
  </div>
  )
}








export default App;
