import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [Products, setProducts] = useState([]);

  function handleCount() {
    setCount((count) => count + 1);
  }

  function handleAddProducts(product) {
    setProducts((Products) => [...Products, product]);
  }

  return (
    <div>
      <div className="nav">
        <h1>ShopingCard</h1>
        <p>
          🔔 <span>{count}</span>
        </p>
      </div>

      <ShopingCard countUpdate={handleCount} Products={Products} />
      <AddProduct handleAddItem={handleAddProducts} />
    </div>
  );
}

function ShopingCard({ countUpdate, Products }) {
  return (
    <div className="shoping">
      {Products.map((item) => (
        <Product item={item} key={item.id} countUpdate={countUpdate} />
      ))}
    </div>
  );
}

function Product({ item, countUpdate }) {
  return (
    <div className="card">
      <img src={item.img} alt={item.name} width="200" />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={countUpdate}>Buy now</button>
    </div>
  );
}

function AddProduct({ handleAddItem }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !img || !price) return;

    const newProduct = {
      id: crypto.randomUUID(),
      name,
      img,
      price,
    };

    handleAddItem(newProduct);

    setName("");
    setImg("");
    setPrice("");
  }

  return (
    <div className="center">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
        />

        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Image path (example: /assets/1.jpg)"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Product price"
        />

        <button>Add Product</button>
      </form>
    </div>
  );
}
