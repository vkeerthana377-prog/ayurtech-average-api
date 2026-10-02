# Ayurtech Average API

A simple REST API built with Node.js and Express that calculates the running average of all numbers submitted to the API.

## Requirements

- Node.js
- npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/vkeerthana377-prog/ayurtech-average-api.git
```

Go to the project folder:

```bash
cd ayurtech-average-api
```

Install the dependencies:

```bash
npm install
```

## Running the Server

Start the server:

```bash
npm start
```

The server will run at:

```text
http://localhost:3000
```

You should see:

```text
Server running on http://localhost:3000
```

## API Usage

### POST /average

The API accepts a number in the request body and returns the average of all numbers received so far while the server is running.

### Request

Example request body:

```json
{
  "number": 10
}
```

### Using cURL

Open a new terminal while the server is running.

Send the first number:

```bash
curl -X POST http://localhost:3000/average -H "Content-Type: application/json" -d "{\"number\":10}"
```

Response:

```json
{
  "average": 10
}
```

Send another number:

```bash
curl -X POST http://localhost:3000/average -H "Content-Type: application/json" -d "{\"number\":20}"
```

Response:

```json
{
  "average": 15
}
```

Send another number:

```bash
curl -X POST http://localhost:3000/average -H "Content-Type: application/json" -d "{\"number\":30}"
```

Response:

```json
{
  "average": 20
}
```

The API keeps track of all numbers received while the server is running.

Example:

```text
10 → average = 10
20 → average = 15
30 → average = 20
```

## Invalid Input

The API accepts only finite numbers.

Example invalid request:

```json
{
  "number": "30"
}
```

Response:

```json
{
  "error": "Number must be a finite number"
}
```

## Running Tests

The project contains automated test cases.

Run the tests using:

```bash
npm test
```

All tests should pass.

## Git Hooks

This project uses Husky Git hooks.

### Pre-commit Hook

The `pre-commit` hook automatically runs the test suite before a commit is created.

### Commit Message Hook

The `commit-msg` hook uses Commitlint to enforce the Conventional Commits format.

Examples of valid commit messages:

```text
feat: add average endpoint
fix: validate input
test: add average tests
docs: update readme
refactor: separate api layers
chore: configure git hooks
```

## Project Structure

```text
ayurtech-average-api/
├── .husky/
│   ├── commit-msg
│   └── pre-commit
├── src/
│   ├── controllers/
│   │   └── averageController.js
│   ├── routes/
│   │   └── averageRoutes.js
│   ├── services/
│   │   └── averageService.js
│   ├── app.js
│   └── server.js
├── test/
│   └── average.test.js
├── .gitignore
├── commitlint.config.cjs
├── package.json
├── package-lock.json
└── README.md
```

## Technology

- Node.js
- Express
- Node.js built-in test runner
- Husky
- Commitlint