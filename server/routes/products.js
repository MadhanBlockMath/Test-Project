const express = require("express");
const router = express.Router();

const products = [
  {
    "id": 1,
    "name": "Apple iPhone 15 Pro",
    "price": 129999,
    "image": "https://www.google.com/imgres?q=Apple%20iPhone%2015%20Pro&imgurl=https%3A%2F%2Fistation.in%2Fwp-content%2Fuploads%2F2021%2F07%2Fiphone-15-pro-mobile-2.jpg&imgrefurl=https%3A%2F%2Fistation.in%2Fproduct%2Fiphone-15-pro%2F&docid=Xf2V-immooFCIM&tbnid=dRKJdcRV_RXEJM&vet=12ahUKEwimzL60iMaOAxX-wTgGHdMAI9oQM3oECCcQAA..i&w=679&h=679&hcb=2&ved=2ahUKEwimzL60iMaOAxX-wTgGHdMAI9oQM3oECCcQAA"
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
    "image": "https://images.unsplash.com/photo-1583225033110-dbf0114d9f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 119999,
    "image": "https://images.unsplash.com/photo-1610465299994-18bbdd2bb37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "name": "Canon EOS R5 Camera",
    "price": 339999,
    "image": "https://images.unsplash.com/photo-1589985362883-5dfea5e290a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    "image": "https://images.unsplash.com/photo-1507209696998-3c532be9b2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 8,
    "name": "Nike Air Max Sneakers",
    "price": 12999,
    "image": "https://images.unsplash.com/photo-1589187155470-1c6b2fbc9b05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 9,
    "name": "Samsung 4K Smart TV",
    "price": 89999,
    "image": "https://images.unsplash.com/photo-1585218358983-9cf582c89bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 10,
    "name": "Logitech MX Master 3 Mouse",
    "price": 9999,
    "image": "https://images.unsplash.com/photo-1625314869118-5b5e122b3cde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
]


router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
