# Restaurant order

A micro frontend for ordering food from a restaurant

# Getting started

1. Clone the repo
2. `yarn install`
3. `yarn start`

You'll also need to run the [`content`](https://github.com/micro-frontends-demo/content) server.
Open the app at `/restaurant/2` to see restaurant number 2, for example.

This will run the app on its own, outside of the container. This is useful while
you're tweaking logic and styling, but you'll usually then need to integrate and
test it with the rest of the application. So you should also run:

- the [`container`](https://github.com/micro-frontends-demo/container/) application
- the [`browse`](https://github.com/micro-frontends-demo/restaurant-order) micro frontend

# Run the tests

- `yarn test`
