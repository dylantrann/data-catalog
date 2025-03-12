import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

/** Model for Products */
const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
    },
    category: {
        type: DataTypes.TEXT,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    seller_id: {
        type: DataTypes.INTEGER
    }
});

export default Product;
