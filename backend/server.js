const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/api/assignments", (req, res) => {
  try {
    const assignmentsDir = path.join(__dirname, "data", "assignments");
    const files = fs.readdirSync(assignmentsDir);

    const assignments = files
      .filter(
        (file) => file.endsWith(".json") && file.startsWith("assignment_")
      )
      .map((file) => {
        const filePath = path.join(assignmentsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const assignment = JSON.parse(fileContent);
        return {
          id: assignment.id,
          title: assignment.title,
          // Add a default description if not present
          description:
            assignment.description || `NPTEL Quiz: ${assignment.title}`,
          // Add due date if available
          dueDate: assignment.dueDate || null,
        };
      });

    res.json(assignments);
  } catch (error) {
    console.error("Error fetching assignments:", error);
    res.status(500).json({ message: "Error fetching assignments" });
  }
});

app.get("/api/assignments/:id", (req, res) => {
  try {
    const { id } = req.params;
    const filePath = path.join(__dirname, "data", "assignments", `${id}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const assignment = JSON.parse(fileContent);

    // Add default timeLimit if not present
    if (!assignment.timeLimit) {
      assignment.timeLimit = 30; // Default 30 minutes
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

    res.json(sanitizedAssignment);
  } catch (error) {
    console.error("Error fetching assignment:", error);
    res.status(500).json({ message: "Error fetching assignment" });
  }
});

app.post("/api/assignments/:id/submit", (req, res) => {
  try {
    const { id } = req.params;
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Invalid answers format" });
    }

    const filePath = path.join(__dirname, "data", "assignments", `${id}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const assignment = JSON.parse(fileContent);

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

    res.json({
      score,
      totalQuestions,
      percentage,
      results,
    });
  } catch (error) {
    console.error("Error submitting answers:", error);
    res.status(500).json({ message: "Error submitting answers" });
  }
});

// Serve static assets in production
// In production or if not explicitly in development, serve the static files
if (process.env.NODE_ENV !== "development") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // SPA fallback - for any route that doesn't match an API route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
