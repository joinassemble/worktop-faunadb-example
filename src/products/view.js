import { faunaClient } from '../config.js';
import faunadb from 'faunadb';
import {getFaunaError} from '../utils.js';

export const {Create, Collection, Documents, Lambda, Map, Match, Index, Get, Ref, Paginate, Sum, Delete, Add, Select, Let, Var, Update} = faunadb.query;

export async function getAllProduct(request, response) {
	try {
		const result = await faunaClient.query(
			Map(
				Paginate(
					Documents(Collection('Products'))
				),
				Lambda("ref", Get(Var("ref")))
				
			)
		);
	
		const items = result.data;
		const products = [];

		// Retrieve each product based on its reference
		for (const item of items) {
			const productId = Object.values(item.ref)[0].id;
			const product = item['data'];
			product['id'] = productId;
			console.log('product id: ', productId);
			products.push(product);
		}

		response.send(200, products);
	
	  } catch (error) {
		console.error('Error fetching all products:', error);
		const faunaError = getFaunaError(error);
		response.send(faunaError.status, faunaError);
	}
}

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