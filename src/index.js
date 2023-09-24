import {Router, listen} from 'worktop';
import faunadb from 'faunadb';
import {getFaunaError} from './utils.js';

const router = new Router();

const faunaClient = new faunadb.Client({
  secret: FAUNA_SECRET
});

const {Create, Collection, Match, Index, Get, Ref, Paginate, Sum, Delete, Add, Select, Let, Var, Update} = faunadb.query;

router.add('GET', '/', async (request, response) => {
  response.send(200, 'hello world');
});

listen(router.run);