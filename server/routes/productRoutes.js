import express from 'express';
import Product from '../models/product.js';
import User from '../models/user.js';
import {v4 as uuidv4} from 'uuid';
const router = express.Router();

/** 
 * Returns list of products.
 * 
 * GET http://localhost:5000/list/
 */
router.get('/products/', async (req, res) => {
    const products = await Product.findAll() // gets array of products

    res.send(products);
});

/**
 * Return the product. 
 * 
 * GET http://localhost:5000/read/<uuid>/
 */
router.get('/products/:id/', async (req, res) => {
    const { id } = req.params; // gets product id

    const foundProduct = await Product.findByPk(id); // finds product in database

    if (foundProduct === null) { // if no such product, error
        res.status(400)
        res.send(`Product ${id} not found.`);
    } 
    else {res.send(foundProduct);}
});

/**
 * Search feature for specific products
 */
router.get('/search/', async (req, res) => {
    const body = req.body;  // contains all search requirements as JSON

    const products = await Product.findAll({where: body})

    res.send(products)
});

/** 
 * Add the product to the database.
 * Product information initialized in body of request.
 * 
 * POST http://localhost:5000/create/
 */
router.post('/product/create/', async (req, res) => {
    const body = req.body; // gets json of req body

    await Product.create({
        product_id: body.product_id,
        name: body.name,
        category: body.category,
        quantity: body.quantity,
        seller_id: body.seller_id
    });
 
    res.send(`${body.name} has been added to the Database.`);
});

export default router;
