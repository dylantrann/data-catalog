import express from 'express';
import Product from '../models/product.js';
import User from '../models/user.js';
const router = express.Router();

/**
 * Allows a user to login
 * 
 * POST http://localhost:5000/login/
 */
router.post('/login/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({where: {user_name: username}});

    if (user == null) {res.send(`Invalid user`)}                      // invalid username
    else if (user.password != password) {res.send(`Invalid password`)}    // invalid password
    else {res.send({ token: user.user_id })}                            // valid login
});

/**
 * Deletes user based on id. For testing purposes.
 */
router.delete('/user/delete/:id', (req, res) => {
    const { id } = req.params; // gets user id

    Product.destroy({
        where: {
            seller_id: id
        }
    });

    User.destroy({
        where: {
            user_id: id
        }
    }); 
    res.send(`User ${id} has been deleted.`);
    
});

/**
 * Adds new user. For testing purposes.
 */
router.post('/user/create/:id', (req, res) => {
    const { id } = req.params; // gets user id

    User.create({
        user_id: id,
        user_name: 'dummy',
        password: '12345'
    });

    res.send(`User ${id} has been added to the Database.`);
});

/**
 * Finds user. Used to test delete.
 */
router.get('/find_user/:id', async (req, res) => {
    const { id } = req.params; // gets user id

    const foundUser = await User.findByPk(id);

    res.send((foundUser));
});

export default router;
