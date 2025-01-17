import express from "express";

const app = express();
app.use(express.static('dist'));

// app.get("/", (req, res) => {
//   res.send("Serving");
// });

app.get("/api/details", (req, res) => {
  const details = [
    { 
        id: "1", 
        name: "Bluetooth Speaker", 
        price: 49.99 
    },
    { 
        id: "2", 
        name: "Wireless Headphones", 
        price: 89.99 
    },
    { 
        id: "3", 
        name: "Smartwatch", 
        price: 199.99 
    },
    { 
        id: "4", 
        name: "Portable Charger", 
        price: 29.99 
    },
    { 
        id: "5", 
        name: "E-Reader", 
        price: 129.99 
    },
  ];
  res.send(details);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
