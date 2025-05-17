const path = require('path');
const fs = require('fs');

// Helper function to read assignments directory
const getAssignmentsPath = () => {
  return path.join(__dirname, 'data/assignments');
};

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle OPTIONS request (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Log the request for debugging
  console.log(`Request: ${event.httpMethod} ${event.path}`);
  console.log(`Path parameters: ${JSON.stringify(event.pathParameters)}`);
  console.log(`Query parameters: ${JSON.stringify(event.queryStringParameters)}`);

  try {
    // Get all assignments
    if (event.httpMethod === 'GET' && event.path === '/.netlify/functions/assignments') {
      const assignmentsDir = getAssignmentsPath();
      const files = fs.readdirSync(assignmentsDir);
      
      const assignments = files
        .filter(file => file.endsWith('.json') && file.startsWith('assignment_'))
        .map(file => {
          const filePath = path.join(assignmentsDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const assignment = JSON.parse(fileContent);
          return {
            id: assignment.id,
            title: assignment.title,
            description: assignment.description || `NPTEL Quiz: ${assignment.title}`,
            dueDate: assignment.dueDate || null
          };
        });
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(assignments),
      };
    }
    
    // Get a specific assignment
    if (event.httpMethod === 'GET' && event.path.match(/\/.netlify\/functions\/assignments\/[^\/]+$/)) {
      const id = event.path.split('/').pop();
      const assignmentsDir = getAssignmentsPath();
      const filePath = path.join(assignmentsDir, `${id}.json`);
      
      if (!fs.existsSync(filePath)) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Assignment not found' }),
        };
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const assignment = JSON.parse(fileContent);
      
      // Add default timeLimit if not present
      if (!assignment.timeLimit) {
        assignment.timeLimit = 30; // Default 30 minutes
      }
      
      // Remove correct answers before sending to client
      const sanitizedAssignment = {
        ...assignment,
        questions: assignment.questions.map(question => ({
          id: question.id,
          text: question.text,
          options: question.options
        }))
      };
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(sanitizedAssignment),
      };
    }
    
    // Submit answers for an assignment
    if (event.httpMethod === 'POST' && event.path.match(/\/.netlify\/functions\/assignments\/[^\/]+\/submit$/)) {
      const id = event.path.split('/').slice(-2)[0];
      const answers = JSON.parse(event.body).answers;
      
      if (!answers || !Array.isArray(answers)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: 'Invalid answers format' }),
        };
      }
      
      const assignmentsDir = getAssignmentsPath();
      const filePath = path.join(assignmentsDir, `${id}.json`);
      
      if (!fs.existsSync(filePath)) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Assignment not found' }),
        };
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const assignment = JSON.parse(fileContent);
      
      // Calculate score
      let score = 0;
      const results = assignment.questions.map((question, index) => {
        const userAnswer = answers[index];
        
        // Check if correctAnswer is a string (the actual answer) or an index
        let isCorrect = false;
        let correctAnswer = question.correctAnswer;
        
        if (typeof correctAnswer === 'number') {
          // If correctAnswer is an index
          isCorrect = userAnswer === correctAnswer;
        } else {
          // If correctAnswer is the actual answer text
          isCorrect = question.options[userAnswer] === correctAnswer;
          // Convert correctAnswer to index for frontend
          correctAnswer = question.options.findIndex(option => option === question.correctAnswer);
          if (correctAnswer === -1) correctAnswer = 0; // Default to first option if not found
        }
        
        if (isCorrect) {
          score++;
        }
        
        return {
          questionId: question.id,
          isCorrect,
          correctAnswer,
          userAnswer
        };
      });
      
      const totalQuestions = assignment.questions.length;
      const percentage = (score / totalQuestions) * 100;
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          score,
          totalQuestions,
          percentage,
          results
        }),
      };
    }
    
    // Not found
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: 'Not found' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
