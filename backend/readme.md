# Project Layers

## 1. Next.js Router

The Next.js Router layer handles incoming HTTP requests and routes them to the appropriate controller functions. It defines the API endpoints and manages the request-response cycle. This layer is responsible for handling client requests and directing them to the corresponding controller methods for further processing.

## 2. Middleware Layer

The Middleware Layer in Next.js intercepts incoming requests before they reach the route handlers (controllers). Middlewares can perform various tasks such as authentication, logging, request modification, error handling, and more. They provide a way to add functionality to specific routes or all routes in your application. Middlewares are useful for tasks that need to be executed globally or for specific routes, enhancing the overall functionality and security of the application.

## 3. Controller Layer

The Controller Layer acts as an intermediary between the Next.js Router and the Business Logic layer. It handles incoming requests from clients, validates the input data, and formats the responses. In addition to request validation, this layer contains the Data Transfer Objects (DTOs) responsible for shaping the data that will be sent back to the client. Controllers also handle errors, providing appropriate error messages and status codes to the client.

### 3.1 Input Validation Layer

The Input Validation Layer utilizes AJV (Another JSON Schema Validator) to validate incoming data against specified JSON schemas. AJV is a powerful and performant JSON schema validator that ensures the incoming data structure adheres to the expected format. Validating data at this layer helps prevent malformed or invalid requests from progressing further into the application. By enforcing strict data validation, potential security vulnerabilities and application errors are minimized.

### 3.2 API Response Validation

The API Response Validation Layer also utilizes AJV to validate responses received from external APIs or services. By validating API responses against predefined schemas, this layer ensures that the data received is consistent and well-formed. It helps catch unexpected changes in the response structure, enhances error handling, and adds an extra layer of security to the application.

## 4. Business Logic Layer

The Business Logic Layer contains the core logic of the application. It processes the data received from the Controller layer, applies business rules, and interacts with the Repository Layer. This layer utilizes Data Transfer Objects (DTOs) to structure the response data according to the application's business requirements. It ensures that the response sent to the Controller layer is sanitized, safe, and free of any sensitive information. Additionally, it removes unnecessary keys from the data fetched from the Repository Layer.

## 5. Repository Layer

The Repository Layer handles interactions with the database, including CRUD (Create, Read, Update, Delete) operations. It retrieves and stores data in the database, allowing the application to persist information. This layer communicates directly with the database management system and executes queries to fetch or modify data. The Business Logic layer interacts with this layer to retrieve data and perform database-related operations.

## Utils

The Utils directory contains utility functions that are used across different parts of the application. Utilities handle miscellaneous tasks such as validation, formatting, logging, and other common functionalities. These helper functions improve code modularity and reusability, making it easier to maintain and extend the application.
