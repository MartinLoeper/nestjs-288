## Sample Application
This is a sample application for demonstration purposes as requested in https://github.com/nestjs/nest/issues/288.

It contains two components: 
* server which hosts a hybrid app with a http server (doing nothing) and a tcp microservice on port 8081
* client which connects on port 8081 at server

The connection is established by calling the following url: `http://localhost:8085/users`

## Commands
Start the client using `npm run start-client` and start the server using `npm run start-server`. 

## Fixing the bug
I downloaded the latest version of @nestjs/microservices using `npm install @nestjs/microservices`, copied it into the repository under `custom_modules/@nestjs/microservices` and linked it in npm's postinstall hook.

The master branch contains the original version of @nestjs/microservices (version: 4.1.0) and the fix/288 branch contains the proposed fix.