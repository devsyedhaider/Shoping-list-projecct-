import img1 from "./assets/1.jpg";

const ShopingItems = [
  {
    id: 118836,
    name: "Product 1",
    image: img1,
    balance: 900,
  },
  {
    id: 933372,
    name: "Product 2",
    image: img1,
    balance: 20,
  },
  {
    id: 499476,
    name: "Product 3",
    image: img1,
    balance: 30,
  },
];

export default function App() {
  return (
    <div>
      <div className="nav">
        <h1>ShopingCard</h1>
        <p>
          🔔
          <span>0</span>
        </p>
      </div>
      <ShopingCard />
    </div>
  );
}

function ShopingCard() {
  return (
    <div className="shoping">
      {ShopingItems.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

function Product({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.balance}</p>
      <button>Buy now</button>
    </div>
  );
}
