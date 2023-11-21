# Prisma CRUD Application

## Description

This repository contains a CRUD (Create, Read, Update, Delete) application built using Prisma with Express in TypeScript. Prisma is an open-source database toolkit that makes it easier to work with databases in your Node.js or TypeScript applications.

## Features

- **CRUD Operations**: Easily perform create, read, update, and delete operations on your database.
- **Prisma Client**: Utilizes Prisma Client for efficient database access.
- **Express Integration**: Built with Express, a fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript Support**: Leverages TypeScript for more reliable and maintainable code.

## Installation and Usage

To install and run this project, follow these steps:

1. Clone the repository:
   ``` bash
   git clone https://github.com/eduardorossetti/crud-prisma.git

2. Navigate to the project directory:
   ``` bash
   cd crud-prisma

3. Install dependencies:
   ``` bash
   yarn install

4. To start the application in development mode, run:
   ``` bash
   yarn run dev

This will start the server with `nodemon`, which will automatically restart the server upon any file changes.

## Dependencies

- `@prisma/client`: Prisma Client for database interactions.
- `express`: Web framework for creating the API server.
- `crypto`: For cryptographic functionalities.

## Development Dependencies

- `typescript`: For using TypeScript.
- `ts-node`: To execute TypeScript files.
- `prisma`: Prisma CLI for database schema migrations.
- `nodemon`: For automatically restarting the server.
- `@types/express`: TypeScript definitions for Express.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
