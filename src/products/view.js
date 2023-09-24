import { faunaClient } from '../config.js';
import faunadb from 'faunadb';
import {getFaunaError} from '../utils.js';

export const {Create, Collection, Match, Index, Get, Ref, Paginate, Sum, Delete, Add, Select, Let, Var, Update} = faunadb.query;

export async function getProduct(request, response) {
	try {
	  const productId = request.params.productId;
  
	  const result = await faunaClient.query(
		Get(Ref(Collection('Products'), productId))
	  );
  
	  response.send(200, result);
  
	} catch (error) {
	  const faunaError = getFaunaError(error);
	  response.send(faunaError.status, faunaError);
	}
}