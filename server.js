const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const quizQuestions = [
  { id: 1, question: "JavaScript is a compiled language.", answer: "false", explanation: "JavaScript is an interpreted language, not compiled." },
  { id: 2, question: "JavaScript supports both client-side and server-side programming.", answer: "true", explanation: "With Node.js, JavaScript supports server-side programming." },
  { id: 3, question: "In JavaScript, 'const' can be reassigned after its initial declaration.", answer: "false", explanation: "'const' variables cannot be reassigned after declaration." },
  { id: 4, question: "JavaScript arrays are zero-indexed.", answer: "true", explanation: "JavaScript arrays are zero-indexed, meaning the first element is at index 0." },
  { id: 5, question: "The '==' operator checks both value and type equality in JavaScript.", answer: "false", explanation: "'==' only checks value equality, '===' checks both value and type." },
  { id: 6, question: "JavaScript is case-sensitive.", answer: "true", explanation: "JavaScript differentiates between uppercase and lowercase characters." },
  { id: 7, question: "You can declare variables in JavaScript using 'var', 'let', and 'const'.", answer: "true", explanation: "JavaScript supports 'var', 'let', and 'const' for variable declaration." },
  { id: 8, question: "JavaScript was created by Brendan Eich.", answer: "true", explanation: "JavaScript was created by Brendan Eich in 1995." },
  { id: 9, question: "Functions in JavaScript can be passed as arguments to other functions.", answer: "true", explanation: "JavaScript functions are first-class citizens, meaning they can be passed as arguments." },
  { id: 10, question: "JavaScript was originally called LiveScript.", answer: "true", explanation: "JavaScript was first called LiveScript, then renamed to JavaScript." }
];

// Get quiz questions
app.get('/api/questions', (req, res) => {
  res.json(quizQuestions);
});

// Check answer
app.post('/api/answer', (req, res) => {
  const { id, answer } = req.body;
  const question = quizQuestions.find(q => q.id === id);
  
  if (!question) {
    return res.status(404).json({ message: 'Question not found' });
  }

  const isCorrect = question.answer.toLowerCase() === answer.toLowerCase();
  res.json({
    isCorrect,
    correctAnswer: question.answer,
    explanation: question.explanation
  });
});

app.listen(port, () => {
  console.log(`Quiz app listening on port ${port}`);
});


