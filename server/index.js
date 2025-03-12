import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import sequelize from './utils/database.js';

const app = express();
const PORT = 5000 // can set to whatever you want

app.use(express.json());
app.use(cors());

app.use('/', productRoutes); // for all product-based routes
app.use('/', userRoutes);    // for all user-based routes
app.get('/', (req, res) => {res.send('Homepage');}) // default homescreen message

// Sync models with the database and start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});