# JavaScript Quiz Application

This is a JavaScript quiz application built using **Express** for the backend and **ReactJS** for the frontend. The quiz features true/false JavaScript questions, and users can answer questions within a timed environment.

## Features

- Randomized quiz questions with explanations after each answer
- Answer validation and score tracking
- Timed questions (e.g., 10 seconds per question) with automatic progression
- Backend handling for fetching quiz questions and validating answers
- Responsive design on the frontend

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: ReactJS
- **Other**: CORS, JSON

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/javascript-quiz-app.git


### Navigate to the backend directory:
```
bash
Copy code
cd javascript-quiz-app/backend
```

### Install dependencies:

``` bash
Copy code
npm install
```

### Start the backend server:

### bash
```
Copy code
npm start
```
### The backend will run on http://localhost:5000.

### Frontend Setup
### Navigate to the frontend directory:

### bash
```
Copy code
cd javascript-quiz-app/frontend
```
### Install dependencies:

### bash
```
Copy code
npm install
```
### Start the frontend development server:

### bash
```Copy code
npm start
```
### The frontend will run on http://localhost:3000.

### API Endpoints

- Fetch Quiz Questions
- Endpoint: GET /api/questions

Description: Retrieves a set of random quiz questions.
Response:
 json
```
Copy code
[
  {
    "id": 1,
    "question": "JavaScript is a compiled language.",
    "answer": "false",
    "explanation": "JavaScript is an interpreted language, not compiled."
  },
  // More questions...
]
```
### Submit Answer

- Endpoint: POST /api/answer
- Description: Validates the user's answer to a question.

### Request Body:
json
````
Copy code
{
  "id": 1,
  "answer": "false"
}
````
### Response:
json
````
Copy code
{
  "isCorrect": true,
  "correctAnswer": "false",
  "explanation": "JavaScript is an interpreted language, not compiled."
}
````
# Running the Quiz
Once both the backend and frontend servers are running, you can access the quiz at http://localhost:3000 and start answering questions.

### Future Enhancements

- Score Tracking: Store and display the final score after the quiz ends.
- Session Management: Implement sessions or tokens to keep track of individual users' quiz progress.
- More Question Types: Add multiple-choice or fill-in-the-blank questions.

### Contributing
Feel free to submit issues or pull requests if you'd like to contribute to this project.
