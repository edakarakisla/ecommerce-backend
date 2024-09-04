
---

# ecommercebackend

`ecommercebackend` is a backend API for an e-commerce application built with Express.js. It connects to MongoDB for data storage and uses JWT for authentication.

## Features

- **Express**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Cors**: Middleware for managing Cross-Origin Resource Sharing (CORS).
- **Crypto-js**: Provides encryption and decryption utilities.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Jsonwebtoken**: Provides JWT authentication.
- **Nodemailer**: Used for sending emails.
- **Validator**: Provides data validation functionality.

## Installation

Clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd ecommercebackend
npm install
```

## Usage

### Development Mode

Run the application in development mode using `nodemon`, which will automatically restart the server on code changes:

```bash
npm run dev
```

### Production Mode

To start the application in production mode:

```bash
npm start
```

## Configuration

You need to set up environment variables for the application to work properly. Create a `.env` file in the root directory of your project with the following content:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.sv1ooj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret_key
```

Replace `<username>`, `<password>`, and `your_jwt_secret_key` with your actual MongoDB credentials and JWT secret key.

## API Endpoints

### User Endpoints

- **POST `/user/register`**: Creates a new user. Expects `username`, `email`, and `password` in the request body.
- **POST `/user/login`**: Logs in a user. Expects `username` and `password` in the request body. Returns a JWT upon successful login.
- **GET `/user/getAll`**: Lists all users. Requires JWT verification.
- **POST `/user/reset-password-request`**: Sends a password reset request. Expects `email` in the request body.
- **POST `/user/reset-password/:token`**: Resets the password. Expects `password` and `passwordConfirmation` in the request body.

### Product Endpoints

- **POST `/product`**: Creates a new product. Expects product details in the request body.
- **GET `/product`**: Lists all products.
- **GET `/product/:id`**: Retrieves a specific product by ID.
- **DELETE `/product`**: Deletes a product. Expects `id` in the request body.
- **PUT `/product`**: Updates a product. Expects `id` and updated product details in the request body.

## Middleware

### `tokenControl`

The `tokenControl` middleware verifies the JWT provided in the `Authorization` header. If the token is valid, access is granted to the requested resource; otherwise, a 401 Unauthorized response is returned.

## Running the Application

After setting up environment variables and installing dependencies, start the application with:

```bash
npm start
```

The application will listen on port 9000 by default.

## Contributing

If you would like to contribute to this project, please submit a pull request or open an issue.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.

---

Feel free to modify the details according to your specific needs!
