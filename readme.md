# Introduction
This repository is built using worktop and faunadb

# Prerequisites:
- [NodeJS](https://nodejs.org/)
- [Cloudflare Wrangler CLI](https://github.com/cloudflare/wrangler)

# Instructions
- Clone this repository and run `npm install` at the project folder terminal
- To create an environment variable and store it in Cloudflare worker, simply run:
  ```
  wrangler secret put <ENV_NAME>
  ```
  For example:
  ```
  wrangler secret put FAUNA_SECRET
  ```
- To deploy the application to Cloudflare Worker, simply run:
  ```
  wrangler deploy
  ```


# References

## Tutorial
https://fauna.com/blog/getting-started-with-fauna-and-cloudflare-workers

## Fauna FQL
https://docs.fauna.com/fauna/current/fql_reference/

## FaunaDB JS Driver
https://fauna.github.io/faunadb-js/