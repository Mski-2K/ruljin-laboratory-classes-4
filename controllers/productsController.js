const Product = require('../models/Product');
const { STATUS_CODE } = require('../constants/statusCode');
const { MENU_LINKS } = require('../constants/navigation');

const getProductsView = (req, res) => {
    const products = Product.getAll();
    res.render('products.ejs', {
        headTitle: 'Shop - Products',
        path: '/',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products',
        products: products
    });
};

const getAddProductView = (req, res) => {
    res.render('add-product.ejs', {
        headTitle: 'Shop - Add product',
        path: '/add',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products/add'
    });
};

const addNewProduct = (req, res) => {
    const { name, description } = req.body;
    const newProduct = new Product(name, description);
    Product.add(newProduct);
    res.status(STATUS_CODE.FOUND).redirect('/products/new');
};

const getNewProductView = (req, res) => {
    const newestProduct = Product.getLast();
    res.render('new-product.ejs', {
        headTitle: 'Shop - New product',
        path: '/new',
        activeLinkPath: '/products/new',
        menuLinks: MENU_LINKS,
        newestProduct: newestProduct
    });
};

const getProductView = (req, res) => {
    const productName = req.params.name;
    const product = Product.findByName(productName);
    res.render('product.ejs', {
        headTitle: `Shop - ${productName}`,
        path: `/products/${productName}`,
        activeLinkPath: `/products/${productName}`,
        menuLinks: MENU_LINKS,
        product: product
    });
};

const deleteProduct = (req, res) => {
    const productName = req.params.name;
    const success = Product.deleteByName(productName);
    res.status(STATUS_CODE.OK).json({ success });
};

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
};
