# Valle Test Restful API
Challenge Webedia Project built with Node.js, Express, MongoDB and more...

## How to run this API

1. go to your terminal and paste: git clone https://github.com/danielmanfred/desafio-webedia.git
2. enter app: cd desafio-webedia
3. install the dependencies: npm i
4. run the API: npm start
5. in case you use nodemon: npm run local

## Resources used in development

- Node
- Express
- Restful concepts
- MongoDB
- Mongoose
- JWT
- Mlab
- Babel

## Routes of the API

### User collection endpoints

URL                  |     HTTP(Method)  |      Description      |           Data params              |
---------------------| ----------------- | --------------------- | ---------------------------------- |
/users/              |       GET         | Select all users      |                                    |
/users/:id           |       GET         | Select a user by ID   |                                    |
/users/              |       POST        | Create a user         | username: String, password: String |
/users/:id           |       PUT         | Update a user by Id   | username: String, email: String    |
/users/:id           |       DELETE      | Remove a user by Id   |                                    |

### Authentication endpoints

URL                   |     HTTP(Method)  |      Description      |    Data params                     |
----------------------| ----------------- | --------------------- | ---------------------------------- | 
/auth/decodeToken     |       GET         | Decode user token     |                                    |
/auth/signin          |       POST        | Authenticate the user | username: String, password: String |
