const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7786;

// Connect to MongoDB Atlas (Make sure your MongoDB server is running)
// mongoose.connect('mongodb://127.0.0.1:27017/shoppingcartDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const url = "mongodb+srv://suhailyazdan:TJfTqEbtOw42c7a8@products-info.bdg8t2l.mongodb.net/shoppingcartDB?retryWrites=true&w=majority"

mongoose.set("autoIndex", false)

const connectMongo = () => {
    mongoose.connect(url)
        .then(() => {
            console.log("Connected to Mongo")
        }).catch((e) => {
            console.log("error : ", e)
        })
}

connectMongo()


// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})


// Create a mongoose model for the Product
const Product = mongoose.model('Product', {
  name: String,
  details: String,
  price: Number,
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API Endpoints
app.get('/', async (req, res) => {
  try{
    res.send("App is running");
  } catch (error){
    console.log(error)
  }
})

// Create a new product
app.post('/api/products', async (req, res) => {
  try {
    const { name, details, price } = req.body;
    const product = new Product({ name, details, price });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a product by ID
app.put('/api/products/:id', async (req, res) => {
  try {
    const { name, details, price } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, details, price },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create new multiple products
app.post('/api/products/bulk', async (req, res) => {
  try {
      const products = req.body;
      const insertedProducts = await Product.insertMany(products);
      res.json(insertedProducts);
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
