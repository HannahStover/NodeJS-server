const express = require('express');
const bodyParser = require('body-parser');

const menuItemRouter = express.Router();

menuItemRouter.use(bodyParser.json());

menuItemRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the menu items to you!');
  })
  .post((req, res, next) => {
    res.end(
      `Will add the menu item: ${req.body.name} with the details: ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /menuItems');
  })
  .delete((req, res, next) => {
    res.end('Deleting all menu items!');
  });

module.exports = menuItemRouter;
