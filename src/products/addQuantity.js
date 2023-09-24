import faunadb from 'faunadb';
import { faunaClient } from '../config.js';
import {getFaunaError} from '../utils.js';

export const {Create, Collection, Match, Index, Get, Ref, Paginate, Sum, Delete, Add, Select, Let, Var, Update} = faunadb.query;

export async function addQuantity(request, response) {

	try {
	  const productId = request.params.productId;
	  const {quantity} = await request.body();
  
	  const result = await faunaClient.query(
		Let(
		  {
			productRef: Ref(Collection('Products'), productId),
			productDocument: Get(Var('productRef')),
			currentQuantity: Select(['data', 'quantity'], Var('productDocument'))
		  },
		  Update(
			Var('productRef'),
			{
			  data: {
				quantity: Add(
				  Var('currentQuantity'),
				  quantity
				)
			  }
			}
		  )
		)
	  );
  
	  response.send(200, result);
  
	} catch (error) {
	  const faunaError = getFaunaError(error);
	  response.send(faunaError.status, faunaError);
	}
}