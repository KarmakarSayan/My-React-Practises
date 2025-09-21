// import React from 'react';
import './Dashboard.css';// only import css file
function Dashboard() {
  let cart = [
    {
      id: 1,
      name: "Iphone",
      price: 100000,
      img: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
    },
    {
      id: 1,
      name: "Iphone",
      price: 100000,
      img: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
    },
    {
      id: 1,
      name: "Iphone",
      price: 100000,
      img: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
    },
    {
      id: 1,
      name: "Iphone",
      price: 100000,
      img: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg"
    }]
  return (
    <>
      <h1>Dashboard Page</h1>
      {cart.map((item) => {
        return (
      <>

        <div className="items">
          <b> Item_id:{item.id}</b>
          <p> Item_name:{item.name}</p>
          <p> Item_price:{item.price}</p>
          <img style={{height:"200px",width:"200px"}} src={item.img} alt={item.name} />
        </div>
      </>
      )
      })}
    </>
  )
}

export default Dashboard;