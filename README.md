# Express REST API for CRUD Operations on "Person" Resource

This is a simple REST API built with Express.js that enables CRUD (Create, Read, Update, Delete) operations on a "person" resource. The API interfaces with a Mongodb database and dynamically handles parameters, such as adding or retrieving.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Requirements

To run this application, you need the following:

- Node.js installed on your machine.
- MongoDB properly configured.
- Postman or any API testing tool for testing the endpoints.

## Installation

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/apha-pesso/hngx_crud.git

   ```

2. Navigate to the project directory:

   ```bash
   cd hngx_crud

   ```

3. Install the project dependencies:

   ```bash
   npm install

   ```

4. Start the application:

   ```bash
   npm start
   ```

## Usage

You can interact with the API by sending HTTP requests to its endpoints. The API supports CRUD operations on the "person" resource. Use Postman or any API testing tool to test the endpoints.

## API Endpoints

**Create a new person**

- **Route:** `POST /api`
- **Request Body:** JSON object containing person details (e.g., `{"name": "John Doe"}`)
- **Response:** JSON object representing the created person.

**Retrieve details of a person by ID**

- **Route:** `GET /api/:id`
- **Response:** JSON object representing the person with the specified ID.

**Update details of an existing person by ID**

- **Route:** `PUT /api/:id`
- **Request Body:** JSON object containing updated person details (e.g., `{"name": "Updated Name"}`)
- **Response:** JSON object representing the updated person.

**Delete a person by ID**

- **Route:** `DELETE /api/:id`
- **Response:** JSON object confirming the deletion.
