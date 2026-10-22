import React from 'react'
import React,{useEffect, useState} from 'react'

const App = () => {
  const[product, setProduct] = useState([]);
  const[loading, setLoading] = useState(true);
  const url = "https://dummyjson.com/products"

  async function loadData() {
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log("DATA", data.products);
      // Save the products array in React state.
      // React will automatically update the UI.
      setProducts(data.products);
    }
    catch(error){
      console.log("ERROR", err);
    }
    finally{
      setLoading(false);
    }
    useEffect(()=>{
      loadData();
    }, []);
    
  }

  
  return (
    <div style={{height:'500px', width:'500px', padding:'20px', border:'1px solid gray'}}>
      <h2>STORE</h2>
      <table border="1">
        <thead>
          <tr>
            <td>S.No.</td>
            <td>Title</td>
            <td>Image</td>
            <td>Category</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
  {product.map((i, index) => (
    <tr key={i.id}>
      <td>{index + 1}</td>
      <td>{i.title}</td>
      <td><img src={i.images[0]} width="100" /></td>
      <td>{i.category}</td>
      <td>{i.price}</td>
    </tr>
  ))}
</tbody>
</table>
      <div>
        <button onClick={addProduct}>ADD</button>
        <button onClick={deleteProduct}>DELETE</button>
      </div>
    </div>
  )
}

export default App