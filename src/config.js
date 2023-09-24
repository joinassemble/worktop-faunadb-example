import faunadb from 'faunadb';

export const faunaClient = new faunadb.Client({
    secret: FAUNA_SECRET
});