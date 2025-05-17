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
        text: "What is a primary impact of market competition as a strategic risk?",
        options: [
          "Reduced production costs",
          "Decreased customer demand",
          "Higher employee satisfaction",
          "Lower regulatory requirements",
        ],
        correctAnswer: "Decreased customer demand",
      },
      {
        id: 2,
        text: "How can businesses mitigate economic risk?",
        options: [
          "Avoid international markets",
          "Diversify revenue streams",
          "Reduce employee wages",
          "Stop all investments",
        ],
        correctAnswer: "Diversify revenue streams",
      },
      {
        id: 3,
        text: "Which factor is a major regulatory and policy risk?",
        options: [
          "Changing consumer preferences",
          "Increased advertising spending",
          "New government regulations",
          "Employee turnover",
        ],
        correctAnswer: "New government regulations",
      },
      {
        id: 4,
        text: "What is a common cause of process failures in organizations?",
        options: [
          "Overly strict government regulations",
          "Inefficient workflow and human error",
          "A strong supply chain network",
          "Increased employee benefits",
        ],
        correctAnswer: "Inefficient workflow and human error",
      },
      {
        id: 5,
        text: "Human factors as an operational risk include:",
        options: [
          "Natural disasters",
          "Employee errors and absenteeism",
          "Increased automation",
          "High stock market volatility",
        ],
        correctAnswer: "Employee errors and absenteeism",
      },
    ],
  },
  {
    id: "assignment_3",
    title: "Leveraging ERM Frameworks and Global Standards for Risk Management",
    description:
      "Understand how to use ERM frameworks and standards effectively",
    dueDate: "2025-05-10T23:59:00+05:30",
    timeLimit: 35,
    questions: [
      {
        id: 1,
        text: "What is the primary purpose of Enterprise Risk Management (ERM)?",
        options: [
          "Maximizing organizational profits",
          "Identifying and managing risks across an organization",
          "Ensuring compliance with ISO standards",
          "Reducing production costs",
        ],
        correctAnswer: "Identifying and managing risks across an organization",
      },
      {
        id: 2,
        text: "Which of the following is NOT a key component of an ERM framework?",
        options: [
          "Risk Identification",
          "Employee Satisfaction",
          "Risk Assessment",
          "Monitoring and Review",
        ],
        correctAnswer: "Employee Satisfaction",
      },
      {
        id: 3,
        text: "What is the main benefit of implementing an ERM framework?",
        options: [
          "Eliminating all risks",
          "Reducing the need for strategic planning",
          "Enhancing decision-making by identifying and mitigating risks",
          "Avoiding financial audits",
        ],
        correctAnswer:
          "Enhancing decision-making by identifying and mitigating risks",
      },
      {
        id: 4,
        text: "What does COSO stand for?",
        options: [
          "Committee of Sponsoring Organizations",
          "Corporate Oversight and Strategy Organization",
          "Compliance and Security Operations",
          "Control and Strategy Optimization",
        ],
        correctAnswer: "Committee of Sponsoring Organizations",
      },
      {
        id: 5,
        text: "How does COSO ERM integrate with an organization's strategy?",
        options: [
          "By replacing traditional financial audits",
          "By aligning risk management with business objectives",
          "By eliminating the need for risk analysis",
          "By ensuring only financial risks are considered",
        ],
        correctAnswer: "By aligning risk management with business objectives",
      },
    ],
  },
  {
    id: "assignment_4",
    title: "Techniques for Comprehensive Risk Identification and Documentation",
    description:
      "Learn effective methods for identifying and documenting risks",
    dueDate: "2025-05-12T23:59:00+05:30",
    timeLimit: 30,
    questions: [
      {
        id: 1,
        text: "What is the primary goal of risk identification?",
        options: [
          "To eliminate all risks",
          "To recognize potential risks before they impact the organization",
          "To assign blame for risks",
          "To avoid making risk management decisions",
        ],
        correctAnswer:
          "To recognize potential risks before they impact the organization",
      },
      {
        id: 2,
        text: "Which of the following is NOT a type of risk?",
        options: ["Strategic", "Operational", "Environmental", "Financial"],
        correctAnswer: "Environmental",
      },
      {
        id: 3,
        text: "What is the role of leadership in risk identification?",
        options: [
          "Ignoring risks until they become serious",
          "Encouraging a culture of risk awareness and proactive identification",
          "Delegating risk identification to external consultants only",
          "Avoiding risk discussions in strategic meetings",
        ],
        correctAnswer:
          "Encouraging a culture of risk awareness and proactive identification",
      },
      {
        id: 4,
        text: "Why is documenting identified risks important?",
        options: [
          "It helps in tracking and analyzing risk trends",
          "It prevents risks from occurring",
          "It eliminates risks permanently",
          "It is only useful for compliance purposes",
        ],
        correctAnswer: "It helps in tracking and analyzing risk trends",
      },
      {
        id: 5,
        text: "What does a Probability and Impact Matrix measure?",
        options: [
          "The likelihood and severity of a risk",
          "The financial cost of risk",
          "The duration of a risk event",
          "The probability of a company failing",
        ],
        correctAnswer: "The likelihood and severity of a risk",
      },
    ],
  },
  {
    id: "assignment_5",
    title: "Mastering Risk Assessment Techniques for Effective Decision-Making",
    description:
      "Explore techniques for assessing risks to make better decisions",
    dueDate: "2025-05-12T23:59:00+05:30",
    timeLimit: 40,
    questions: [
      {
        id: 1,
        text: "What is the primary purpose of risk assessment in decision-making?",
        options: [
          "To eliminate all potential risks",
          "To provide a structured approach to understanding uncertainty",
          "To predict future events with complete accuracy",
          "To ensure compliance with government regulations",
        ],
        correctAnswer:
          "To provide a structured approach to understanding uncertainty",
      },
      {
        id: 2,
        text: "Which of the following is NOT one of the key elements of risk assessment?",
        options: [
          "Risk identification",
          "Risk analysis",
          "Risk elimination",
          "Risk evaluation",
        ],
        correctAnswer: "Risk elimination",
      },
      {
        id: 3,
        text: "In a risk matrix, where would high-priority risks requiring immediate attention typically be located?",
        options: [
          "Lower left (low likelihood, low impact)",
          "Upper left (low likelihood, high impact)",
          "Lower right (high likelihood, low impact)",
          "Upper right (high likelihood, high impact)",
        ],
        correctAnswer: "Upper right (high likelihood, high impact)",
      },
      {
        id: 4,
        text: "The Delphi Method is primarily used in which risk assessment technique?",
        options: [
          "Monte Carlo simulation",
          "Expert judgment",
          "Sensitivity analysis",
          "Decision tree analysis",
        ],
        correctAnswer: "Expert judgment",
      },
      {
        id: 5,
        text: "Which quantitative risk assessment technique uses random sampling to model the probability of different outcomes when uncertainty exists?",
        options: [
          "Decision trees",
          "Bayesian networks",
          "Monte Carlo simulation",
          "Value at Risk (VaR)",
        ],
        correctAnswer: "Monte Carlo simulation",
      },
    ],
  },
  {
    id: "assignment_6",
    title: "Developing Effective Risk Mitigation Strategies",
    description: "Learn how to create and implement risk mitigation plans",
    dueDate: "2025-06-15T23:59:00+05:30",
    timeLimit: 35,
    questions: [
      {
        id: 1,
        text: "What is the primary goal of risk mitigation?",
        options: [
          "To eliminate all risks completely",
          "To reduce the likelihood or impact of identified risks",
          "To avoid taking any risks in business operations",
          "To transfer all risks to insurance companies",
        ],
        correctAnswer: "To reduce the likelihood or impact of identified risks",
      },
      {
        id: 2,
        text: "Which of the following is NOT a common risk response strategy?",
        options: [
          "Risk acceptance",
          "Risk avoidance",
          "Risk transfer",
          "Risk elimination",
        ],
        correctAnswer: "Risk elimination",
      },
      {
        id: 3,
        text: "What is a key component of an effective risk mitigation plan?",
        options: [
          "Avoiding all risks regardless of potential benefits",
          "Clearly defined actions with assigned responsibilities",
          "Focusing only on high-impact risks",
          "Implementing the same strategies for all risk types",
        ],
        correctAnswer: "Clearly defined actions with assigned responsibilities",
      },
      {
        id: 4,
        text: "Risk transfer is best described as:",
        options: [
          "Eliminating a risk completely",
          "Shifting the responsibility for a risk to another party",
          "Accepting a risk without any action",
          "Reducing the probability of a risk occurring",
        ],
        correctAnswer:
          "Shifting the responsibility for a risk to another party",
      },
      {
        id: 5,
        text: "Which of the following is an example of risk avoidance?",
        options: [
          "Purchasing insurance for a potential liability",
          "Implementing safety protocols to reduce workplace accidents",
          "Deciding not to enter a volatile market",
          "Creating a contingency fund for potential losses",
        ],
        correctAnswer: "Deciding not to enter a volatile market",
      },
    ],
  },
  {
    id: "assignment_7",
    title: "Implementing Effective Risk Monitoring and Reporting Systems",
    description: "Learn how to track and communicate about risks effectively",
    dueDate: "2025-07-10T23:59:00+05:30",
    timeLimit: 30,
    questions: [
      {
        id: 1,
        text: "What is the primary purpose of risk monitoring?",
        options: [
          "To eliminate all identified risks",
          "To track changes in risk profiles and the effectiveness of controls",
          "To assign blame when risks materialize",
          "To reduce the need for risk assessment",
        ],
        correctAnswer:
          "To track changes in risk profiles and the effectiveness of controls",
      },
      {
        id: 2,
        text: "Key Risk Indicators (KRIs) are best described as:",
        options: [
          "Financial metrics that measure profitability",
          "Metrics that provide early warning of changing risk exposure",
          "Tools for eliminating risks completely",
          "Reports required by regulatory authorities",
        ],
        correctAnswer:
          "Metrics that provide early warning of changing risk exposure",
      },
      {
        id: 3,
        text: "What is a risk dashboard primarily used for?",
        options: [
          "Calculating financial losses",
          "Visualizing risk data for easier monitoring and decision-making",
          "Automating risk elimination",
          "Replacing the need for risk assessment",
        ],
        correctAnswer:
          "Visualizing risk data for easier monitoring and decision-making",
      },
      {
        id: 4,
        text: "How often should risk monitoring activities typically be conducted?",
        options: [
          "Only when a risk materializes",
          "Once per year during annual planning",
          "Continuously, with formal reviews at regular intervals",
          "Only when required by regulators",
        ],
        correctAnswer: "Continuously, with formal reviews at regular intervals",
      },
      {
        id: 5,
        text: "Which of the following is NOT typically included in risk reporting?",
        options: [
          "Status of key risks and controls",
          "Changes in risk profiles since last report",
          "Detailed personal information about risk owners",
          "Emerging risks identified during the reporting period",
        ],
        correctAnswer: "Detailed personal information about risk owners",
      },
    ],
  },
  {
    id: "assignment_8",
    title: "Building a Resilient Risk Culture in Organizations",
    description:
      "Understand how to foster a culture that effectively manages risk",
    dueDate: "2025-08-05T23:59:00+05:30",
    timeLimit: 35,
    questions: [
      {
        id: 1,
        text: "What is risk culture?",
        options: [
          "The formal risk management policies of an organization",
          "The shared values, beliefs, and behaviors related to risk within an organization",
          "The regulatory requirements for risk management",
          "The technical systems used to monitor risks",
        ],
        correctAnswer:
          "The shared values, beliefs, and behaviors related to risk within an organization",
      },
      {
        id: 2,
        text: "Which of the following is NOT a characteristic of a strong risk culture?",
        options: [
          "Open communication about risks and failures",
          "Clear accountability for risk management",
          "Punishing individuals when risks materialize",
          "Integrating risk considerations into decision-making",
        ],
        correctAnswer: "Punishing individuals when risks materialize",
      },
      {
        id: 3,
        text: "What role does leadership play in building risk culture?",
        options: [
          "Delegating all risk responsibilities to the risk management department",
          "Setting the tone and demonstrating commitment to risk management",
          "Avoiding discussions about risks to maintain positive morale",
          "Focusing exclusively on compliance requirements",
        ],
        correctAnswer:
          "Setting the tone and demonstrating commitment to risk management",
      },
      {
        id: 4,
        text: "Which approach is most effective for embedding risk awareness throughout an organization?",
        options: [
          "Limiting risk information to senior management",
          "Conducting annual risk training sessions",
          "Integrating risk considerations into daily operations and decision-making",
          "Implementing strict penalties for risk-related mistakes",
        ],
        correctAnswer:
          "Integrating risk considerations into daily operations and decision-making",
      },
      {
        id: 5,
        text: "What is the concept of 'psychological safety' in relation to risk culture?",
        options: [
          "Implementing physical safety measures in the workplace",
          "Creating an environment where employees feel safe to speak up about risks",
          "Providing psychological counseling for stress management",
          "Ensuring employees don't worry about risks",
        ],
        correctAnswer:
          "Creating an environment where employees feel safe to speak up about risks",
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
