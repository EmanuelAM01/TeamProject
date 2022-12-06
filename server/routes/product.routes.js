const ProductController = require("../controllers/product.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.get('/api/product', authenticate, ProductController.get_all);
    app.post('/api/product', authenticate, ProductController.create_product);
    app.get('/api/product/:id', authenticate, ProductController.get_product);
    app.put('/api/product/:id', authenticate, ProductController.update_product);
    app.delete('/api/product/:id', authenticate, ProductController.delete_product);

    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}