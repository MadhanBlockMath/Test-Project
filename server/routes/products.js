const express = require("express");
const router = express.Router();

const products = [
  {
    "id": 1,
    "name": "Apple iPhone 15 Pro",
    "price": 129999,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 2,
    "name": "MacBook Pro 16”",
    "price": 249999,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 3,
    "name": "Sony WH-1000XM4 Headphones",
    "price": 29999,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 119999,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "name": "Canon EOS R5 Camera",
    "price": 339999,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 6,
    "name": "Apple Watch Series 9",
    "price": 45999,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 7,
    "name": "Dell XPS 13 Laptop",
    "price": 149999,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 8,
    "name": "Nike Air Max Sneakers",
    "price": 12999,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 9,
    "name": "Samsung 4K Smart TV",
    "price": 89999,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 10,
    "name": "Logitech MX Master 3 Mouse",
    "price": 9999,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
]


router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
