import {Router, listen} from 'worktop';
import faunadb from 'faunadb';
import {getProduct} from './products/get.js'
import {addProduct} from './products/add.js'
import {addQuantity} from './products/addQuantity.js';
import { deleteProduct } from './products/delete.js';

const router = new Router();

const faunaClient = new faunadb.Client({
  secret: FAUNA_SECRET
});

const {Create, Collection, Match, Index, Get, Ref, Paginate, Sum, Delete, Add, Select, Let, Var, Update} = faunadb.query;

router.add('GET', '/', async (request, response) => {
  response.send(200, 'hello world');
});

router.add('GET', '/products/:productId', getProduct);

router.add('POST', '/products', addProduct);

router.add('PATCH', '/products/:productId/add-quantity', addQuantity);

router.add('DELETE', '/products/:productId', deleteProduct);

listen(router.run);