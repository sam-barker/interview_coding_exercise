# interview_coding_exercise
A coding exercise which uses a node api and react SPA to display users, posts and comments

# Pre-Requesites
* Ensure you have node installed
* Have yarn installed (you may also use npm instead)

# Quickstart
To get up and running. Go to the `client` directory and run the build using `yarn build`. The command will not terminate as it watches for frontend changes. You can terminate this however upon completion using CTRL + C. Then go into the `server` directory and run the build using `yarn build`. Then start the server with `yarn start`. Finally, go to `http://localhost:8080` in your browser.

# Server
NB: The following instructions apply when you are in the `server` directory

## To run
To run the server first make sure it has been transpiled using `yarn build`. If you are using `npm` run `npm run build`

To transpile and run the server in one go, run `yarn restart`

## Testing
Ensure the server is first transpiled and running, and then in a different terminal run `yarn test` or `npm run test`.

# Client
NB: The following instructions apply when you are in the `client` directory

## building
To build the client run `yarn build`

## Testing
To execute the tests run `yarn test`

## Viewing
Go to `http://localhost:8080`