// Hardcoded quiz data
const quizData = [
  {
    id: "assignment_1",
    title: "Understanding the Foundations of Enterprise Risk Management",
    description:
      "Test your knowledge of Enterprise Risk Management fundamentals",
    dueDate: "2025-03-25T00:00:00+05:30",
    timeLimit: 30,
    questions: [
      {
        id: 1,
        text: "What is the primary objective of Enterprise Risk Management (ERM)?",
        options: [
          "Maximizing profits",
          "Reducing operational costs",
          "Identifying, assessing, and managing risks holistically",
          "Eliminating all risks",
        ],
        correctAnswer:
          "Identifying, assessing, and managing risks holistically",
      },
      {
        id: 2,
        text: "Which framework is widely used for ERM implementation?",
        options: [
          "COSO ERM",
          "Six Sigma",
          "Lean Management",
          "Agile Methodology",
        ],
        correctAnswer: "COSO ERM",
      },
      {
        id: 3,
        text: "What does ISO 31000 primarily focus on?",
        options: [
          "Financial auditing",
          "Risk management guidelines",
          "Data security",
          "IT governance",
        ],
        correctAnswer: "Risk management guidelines",
      },
      {
        id: 4,
        text: "How do ERM frameworks help organizations?",
        options: [
          "By eliminating risks completely",
          "By ensuring 100% compliance with regulations",
          "By providing a structured approach to identifying and managing risks",
          "By reducing employee turnover",
        ],
        correctAnswer:
          "By providing a structured approach to identifying and managing risks",
      },
      {
        id: 5,
        text: "Which technique is commonly used to identify risks in an organization?",
        options: [
          "SWOT analysis",
          "Lean Six Sigma",
          "Business Process Reengineering",
          "Just-in-Time manufacturing",
        ],
        correctAnswer: "SWOT analysis",
      },
    ],
  },
  {
    id: "assignment_2",
    title: "Exploring the Spectrum of Risks in Organizations",
    description: "Learn about different types of risks that organizations face",
    dueDate: "2025-04-18T23:59:00+05:30",
    timeLimit: 25,
    questions: [
      {
        id: 1,
        text: "What type of risk is associated with changes in government regulations?",
        options: [
          "Financial risk",
          "Operational risk",
          "Compliance risk",
          "Strategic risk",
        ],
        correctAnswer: "Compliance risk",
      },
      {
        id: 2,
        text: "Which of the following is NOT a risk mitigation strategy?",
        options: [
          "Risk avoidance",
          "Risk reduction",
          "Risk elimination",
          "Risk sharing",
        ],
        correctAnswer: "Risk elimination",
      },
      {
        id: 3,
        text: "A contingency plan is designed to:",
        options: [
          "Increase revenue",
          "Provide a backup strategy in case a risk materializes",
          "Completely eliminate risks",
          "Identify business opportunities",
        ],
        correctAnswer: "Provide a backup strategy in case a risk materializes",
      },
      {
        id: 4,
        text: "Who is primarily responsible for overseeing ERM implementation?",
        options: [
          "Mid-level managers",
          "Board of Directors and C-suite executives",
          "Entry-level employees",
          "External consultants",
        ],
        correctAnswer: "Board of Directors and C-suite executives",
      },
      {
        id: 5,
        text: "Which of the following helps create a risk-aware culture?",
        options: [
          "Avoiding risk discussions in meetings",
          "Encouraging open communication about risks",
          "Assigning all risk management to one department",
          "Ignoring low-probability risks",
        ],
        correctAnswer: "Encouraging open communication about risks",
      },
    ],
  },
];

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  // Handle OPTIONS request (preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Log the request for debugging
  console.log(`Request: ${event.httpMethod} ${event.path}`);
  console.log(`Path parameters: ${JSON.stringify(event.pathParameters)}`);
  console.log(
    `Query parameters: ${JSON.stringify(event.queryStringParameters)}`
  );

  try {
    // Get all assignments
    if (
      event.httpMethod === "GET" &&
      event.path === "/.netlify/functions/assignments"
    ) {
      const assignments = quizData.map((quiz) => ({
        id: quiz.id,
        title: quiz.title,
        description: quiz.description || `NPTEL Quiz: ${quiz.title}`,
        dueDate: quiz.dueDate || null,
      }));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(assignments),
      };
    }

    // Get a specific assignment
    if (
      event.httpMethod === "GET" &&
      event.path.match(/\/.netlify\/functions\/assignments\/[^\/]+$/)
    ) {
      const id = event.path.split("/").pop();
      const assignment = quizData.find((quiz) => quiz.id === id);

      if (!assignment) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: "Assignment not found" }),
        };
      }

      // Remove correct answers before sending to client
      const sanitizedAssignment = {
        ...assignment,
        questions: assignment.questions.map((question) => ({
          id: question.id,
          text: question.text,
          options: question.options,
        })),
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(sanitizedAssignment),
      };
    }

    // Submit answers for an assignment
    if (
      event.httpMethod === "POST" &&
      event.path.match(/\/.netlify\/functions\/assignments\/[^\/]+\/submit$/)
    ) {
      const id = event.path.split("/").slice(-2)[0];
      const answers = JSON.parse(event.body).answers;

      if (!answers || !Array.isArray(answers)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: "Invalid answers format" }),
        };
      }

      const assignment = quizData.find((quiz) => quiz.id === id);

      if (!assignment) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: "Assignment not found" }),
        };
      }

      // Calculate score
      let score = 0;
      const results = assignment.questions.map((question, index) => {
        const userAnswer = answers[index];

        // Check if correctAnswer is a string (the actual answer) or an index
        let isCorrect = false;
        let correctAnswer = question.correctAnswer;

        if (typeof correctAnswer === "number") {
          // If correctAnswer is an index
          isCorrect = userAnswer === correctAnswer;
        } else {
          // If correctAnswer is the actual answer text
          isCorrect = question.options[userAnswer] === correctAnswer;
          // Convert correctAnswer to index for frontend
          correctAnswer = question.options.findIndex(
            (option) => option === question.correctAnswer
          );
          if (correctAnswer === -1) correctAnswer = 0; // Default to first option if not found
        }

        if (isCorrect) {
          score++;
        }

        return {
          questionId: question.id,
          isCorrect,
          correctAnswer,
          userAnswer,
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
          results,
        }),
      };
    }

    // Not found
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: "Not found" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
