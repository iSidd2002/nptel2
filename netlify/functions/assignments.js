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
      {
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
        text: "Which of the following helps create a risk-aware culture?",
        options: [
          "Avoiding risk discussions in meetings",
          "Encouraging open communication about risks",
          "Assigning all risk management to one department",
          "Ignoring low-probability risks",
        ],
        correctAnswer: "Encouraging open communication about risks",
      },
      {
        id: 11,
        text: "How does ERM relate to corporate governance?",
        options: [
          "ERM ensures compliance with regulations and ethical practices",
          "ERM replaces the need for governance policies",
          "Corporate governance is a subset of ERM",
          "ERM only applies to financial risks",
        ],
        correctAnswer:
          "ERM ensures compliance with regulations and ethical practices",
      },
      {
        id: 12,
        text: "Which of the following is an example of financial risk?",
        options: [
          "Data security breaches",
          "Market fluctuations affecting investment returns",
          "Workplace safety hazards",
          "Employee turnover",
        ],
        correctAnswer: "Market fluctuations affecting investment returns",
      },
      {
        id: 13,
        text: "Which ERM approach is commonly used for supply chain risk management?",
        options: [
          "Redundancy planning",
          "Ignoring minor risks",
          "Focusing only on domestic suppliers",
          "Eliminating supplier contracts",
        ],
        correctAnswer: "Redundancy planning",
      },
      {
        id: 14,
        text: "How can organizations mitigate cybersecurity risks?",
        options: [
          "Ignoring minor security threats",
          "Regular security audits and employee training",
          "Relying only on basic antivirus software",
          "Eliminating all internet access in the workplace",
        ],
        correctAnswer: "Regular security audits and employee training",
      },
      {
        id: 15,
        text: "Why is risk reporting important?",
        options: [
          "It ensures employees never take risks",
          "It provides stakeholders with transparency on risks and mitigation efforts",
          "It eliminates the need for audits",
          "It replaces financial reporting requirements",
        ],
        correctAnswer:
          "It provides stakeholders with transparency on risks and mitigation efforts",
      },
      {
        id: 16,
        text: "What is one major challenge in global risk communication?",
        options: [
          "Over-reliance on AI",
          "Cultural and language differences",
          "Too many employees in risk departments",
          "Ignoring low-priority risks",
        ],
        correctAnswer: "Cultural and language differences",
      },
      {
        id: 17,
        text: "How does AI impact ERM?",
        options: [
          "It increases risk exposure",
          "It enhances predictive analytics and automation",
          "It replaces human decision-making entirely",
          "It has no impact on ERM",
        ],
        correctAnswer: "It enhances predictive analytics and automation",
      },
      {
        id: 18,
        text: "What does ESG stand for in risk management?",
        options: [
          "Economic, Social, and Growth",
          "Environmental, Social, and Governance",
          "Enterprise, Strategy, and Growth",
          "Equity, Sustainability, and Governance",
        ],
        correctAnswer: "Environmental, Social, and Governance",
      },
      {
        id: 19,
        text: "Why is geopolitical risk important for multinational organizations?",
        options: [
          "It influences supply chain stability and regulatory compliance",
          "It only affects government agencies",
          "It is irrelevant to corporate risk management",
          "It only applies to financial markets",
        ],
        correctAnswer:
          "It influences supply chain stability and regulatory compliance",
      },
      {
        id: 20,
        text: "Which of the following is a future trend in ERM?",
        options: [
          "Reduced use of AI in risk analysis",
          "Increased focus on resilience and proactive risk management",
          "Elimination of ERM frameworks",
          "Risk management will no longer be required by regulations",
        ],
        correctAnswer:
          "Increased focus on resilience and proactive risk management",
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
      {
        id: 6,
        text: "Which factor is a major risk in supply chain management?",
        options: [
          "Stable supplier relationships",
          "Disruptions due to geopolitical conflicts",
          "Increased warehouse capacity",
          "Predictable transportation schedules",
        ],
        correctAnswer: "Disruptions due to geopolitical conflicts",
      },
      {
        id: 7,
        text: "Credit risk arises when:",
        options: [
          "A company cannot pay dividends",
          "Borrowers default on their obligations",
          "The business has a strong cash flow",
          "Interest rates decrease",
        ],
        correctAnswer: "Borrowers default on their obligations",
      },
      {
        id: 8,
        text: "Liquidity risk means a company:",
        options: [
          "Cannot meet its short-term financial obligations",
          "Has excess cash reserves",
          "Reduces production costs",
          "Is increasing market share",
        ],
        correctAnswer: "Cannot meet its short-term financial obligations",
      },
      {
        id: 9,
        text: "Investment risk can be reduced by:",
        options: [
          "Investing in a single industry",
          "Diversifying investments",
          "Ignoring market trends",
          "Avoiding any financial planning",
        ],
        correctAnswer: "Diversifying investments",
      },
      {
        id: 10,
        text: "Operational risk in financial management is caused by:",
        options: [
          "Strong accounting controls",
          "Poor internal financial processes",
          "High product demand",
          "Increased investor confidence",
        ],
        correctAnswer: "Poor internal financial processes",
      },
      {
        id: 11,
        text: "Regulatory non-compliance can result in:",
        options: [
          "Increased brand reputation",
          "Heavy fines and legal action",
          "Higher employee retention",
          "Stronger investor confidence",
        ],
        correctAnswer: "Heavy fines and legal action",
      },
      {
        id: 12,
        text: "Intellectual property violations occur when:",
        options: [
          "A company uses proprietary information without authorization",
          "A business expands internationally",
          "A competitor lowers prices",
          "New employees are hired",
        ],
        correctAnswer:
          "A company uses proprietary information without authorization",
      },
      {
        id: 13,
        text: "A common cause of contractual disputes is:",
        options: [
          "Clear and detailed contract terms",
          "Misinterpretation of agreement terms",
          "Strong partnership relationships",
          "Effective risk management",
        ],
        correctAnswer: "Misinterpretation of agreement terms",
      },
      {
        id: 14,
        text: "Which of the following can damage a company's reputation?",
        options: [
          "Effective crisis management",
          "Negative social media coverage",
          "Employee training programs",
          "Transparent business practices",
        ],
        correctAnswer: "Negative social media coverage",
      },
      {
        id: 15,
        text: "Customer experience as a reputational risk involves:",
        options: [
          "Offering high-quality products and services",
          "Negative reviews and customer complaints",
          "Transparent refund policies",
          "Increased customer engagement",
        ],
        correctAnswer: "Negative reviews and customer complaints",
      },
      {
        id: 16,
        text: "What is a key effect of climate change on businesses?",
        options: [
          "Increased market stability",
          "Higher insurance costs and supply chain disruptions",
          "Reduced government regulations",
          "Improved production efficiency",
        ],
        correctAnswer: "Higher insurance costs and supply chain disruptions",
      },
      {
        id: 17,
        text: "How can companies mitigate pollution risks?",
        options: [
          "Ignore waste disposal regulations",
          "Implement sustainable waste management practices",
          "Increase fossil fuel consumption",
          "Reduce workplace safety measures",
        ],
        correctAnswer: "Implement sustainable waste management practices",
      },
      {
        id: 18,
        text: "What is the purpose of ransomware attacks?",
        options: [
          "To offer free software upgrades",
          "To encrypt company data and demand payment for decryption",
          "To provide cybersecurity training",
          "To improve IT infrastructure",
        ],
        correctAnswer:
          "To encrypt company data and demand payment for decryption",
      },
      {
        id: 19,
        text: "Which is a common method used in phishing attacks?",
        options: [
          "Secure cloud storage",
          "Fake emails that appear to be from trusted sources",
          "Strong password policies",
          "Encrypted messaging systems",
        ],
        correctAnswer: "Fake emails that appear to be from trusted sources",
      },
      {
        id: 20,
        text: "A major human capital risk is:",
        options: [
          "Strong leadership succession planning",
          "High employee turnover and skill shortages",
          "Increasing employee engagement",
          "Effective workplace safety policies",
        ],
        correctAnswer: "High employee turnover and skill shortages",
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
      {
        id: 6,
        text: "What is a key benefit of implementing the COSO ERM framework?",
        options: [
          "Reducing product costs",
          "Enhancing risk awareness and decision-making",
          "Eliminating all business risks",
          "Increasing regulatory requirements",
        ],
        correctAnswer: "Enhancing risk awareness and decision-making",
      },
      {
        id: 7,
        text: "What is ISO 31000 primarily used for?",
        options: [
          "Setting quality control measures",
          "Providing guidelines for enterprise risk management",
          "Auditing financial transactions",
          "Standardizing employee training programs",
        ],
        correctAnswer: "Providing guidelines for enterprise risk management",
      },
      {
        id: 8,
        text: "Which of the following is NOT a principle of ISO 31000?",
        options: [
          "Structured and Comprehensive Approach",
          "Inclusive Participation",
          "Profit Maximization",
          "Continuous Improvement",
        ],
        correctAnswer: "Profit Maximization",
      },
      {
        id: 9,
        text: "Which key element of ISO 31000 ensures that risk management is embedded into an organization's processes?",
        options: [
          "Risk Assessment",
          "Risk Identification",
          "Integration into Organizational Governance",
          "Financial Reporting",
        ],
        correctAnswer: "Integration into Organizational Governance",
      },
      {
        id: 10,
        text: "What does the ISO 31000 risk management process include?",
        options: [
          "Establishing the context, risk identification, risk assessment, risk treatment, and monitoring",
          "Only risk treatment and assessment",
          "Ignoring minor risks and addressing only major threats",
          "Implementing strict regulations without monitoring",
        ],
        correctAnswer:
          "Establishing the context, risk identification, risk assessment, risk treatment, and monitoring",
      },
      {
        id: 11,
        text: "A key difference between COSO ERM and ISO 31000 is:",
        options: [
          "COSO ERM is only used in finance, while ISO 31000 applies to all industries",
          "ISO 31000 provides general guidelines, while COSO ERM is a detailed framework",
          "ISO 31000 only applies to large enterprises",
          "COSO ERM does not consider governance in risk management",
        ],
        correctAnswer:
          "ISO 31000 provides general guidelines, while COSO ERM is a detailed framework",
      },
      {
        id: 12,
        text: "The Basel Accords focus primarily on managing which type of risk?",
        options: [
          "Operational Risk",
          "Financial and Banking Risk",
          "Supply Chain Risk",
          "Cybersecurity Risk",
        ],
        correctAnswer: "Financial and Banking Risk",
      },
      {
        id: 13,
        text: "Which organization oversees the Basel Accords?",
        options: [
          "World Trade Organization (WTO)",
          "International Monetary Fund (IMF)",
          "Basel Committee on Banking Supervision (BCBS)",
          "United Nations (UN)",
        ],
        correctAnswer: "Basel Committee on Banking Supervision (BCBS)",
      },
      {
        id: 14,
        text: "What is ISO 9001 primarily focused on?",
        options: [
          "Financial risk management",
          "Environmental sustainability",
          "Quality Management Systems (QMS)",
          "Cybersecurity",
        ],
        correctAnswer: "Quality Management Systems (QMS)",
      },
      {
        id: 15,
        text: "Which ISO standard introduced risk-based thinking?",
        options: [
          "ISO 9001:2008",
          "ISO 9001:2015",
          "ISO 31000:2009",
          "ISO 27001",
        ],
        correctAnswer: "ISO 9001:2015",
      },
      {
        id: 16,
        text: "What is the relationship between risk and opportunity in ISO 9001?",
        options: [
          "Risk must be eliminated, and opportunity ignored",
          "Risk and opportunity are separate concepts",
          "Identifying risks helps organizations find opportunities for improvement",
          "Only negative risks should be considered",
        ],
        correctAnswer:
          "Identifying risks helps organizations find opportunities for improvement",
      },
      {
        id: 17,
        text: "Which ERM framework is best known for integrating risk management with performance?",
        options: [
          "ISO 9001",
          "COSO ERM",
          "Basel Accords",
          "NIST Cybersecurity Framework",
        ],
        correctAnswer: "COSO ERM",
      },
      {
        id: 18,
        text: "What is a primary advantage of integrating ERM frameworks with business strategy?",
        options: [
          "Reducing business expenses",
          "Enhancing risk awareness and resilience",
          "Eliminating competition",
          "Avoiding regulatory compliance",
        ],
        correctAnswer: "Enhancing risk awareness and resilience",
      },
      {
        id: 19,
        text: "Which risk management tool is commonly used in ISO 9001?",
        options: [
          "Failure Modes and Effects Analysis (FMEA)",
          "Basel III Capital Requirements",
          "Sarbanes-Oxley Act (SOX)",
          "SWOT Analysis",
        ],
        correctAnswer: "Failure Modes and Effects Analysis (FMEA)",
      },
      {
        id: 20,
        text: "What is a common challenge in implementing ERM frameworks?",
        options: [
          "Lack of leadership commitment",
          "Risk always being predictable",
          "No need for continuous monitoring",
          "Ignoring regulatory requirements",
        ],
        correctAnswer: "Lack of leadership commitment",
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
      {
        id: 6,
        text: "Which risk assessment technique uses random simulations to predict possible outcomes?",
        options: [
          "Failure Mode and Effects Analysis (FMEA)",
          "Root Cause Analysis",
          "Monte Carlo Simulation",
          "Risk Register",
        ],
        correctAnswer: "Monte Carlo Simulation",
      },
      {
        id: 7,
        text: "What is the primary objective of Failure Mode and Effects Analysis (FMEA)?",
        options: [
          "To identify and mitigate potential failures in a process",
          "To eliminate human errors",
          "To increase operational costs",
          "To improve cybersecurity",
        ],
        correctAnswer:
          "To identify and mitigate potential failures in a process",
      },
      {
        id: 8,
        text: "What is a key component of a risk register?",
        options: [
          "Risk owner",
          "Stock price",
          "Customer feedback",
          "Marketing strategy",
        ],
        correctAnswer: "Risk owner",
      },
      {
        id: 9,
        text: "Why should risk registers be updated regularly?",
        options: [
          "To ensure risks are accurately tracked and managed",
          "To increase the number of risks documented",
          "To impress auditors",
          "To eliminate risks completely",
        ],
        correctAnswer: "To ensure risks are accurately tracked and managed",
      },
      {
        id: 10,
        text: "Which tool is commonly used for prioritizing risks in a risk register?",
        options: [
          "Risk Matrix",
          "Brainstorming",
          "Customer survey",
          "Internal audit",
        ],
        correctAnswer: "Risk Matrix",
      },
      {
        id: 11,
        text: "What is a common mistake in risk documentation?",
        options: [
          "Updating the register too frequently",
          "Not specifying a risk owner",
          "Using too much technical jargon",
          "Identifying too many risks",
        ],
        correctAnswer: "Not specifying a risk owner",
      },
      {
        id: 12,
        text: "What is the purpose of a risk heat map?",
        options: [
          "To visualize risk severity and likelihood",
          "To predict financial trends",
          "To assess legal compliance",
          "To measure stakeholder engagement",
        ],
        correctAnswer: "To visualize risk severity and likelihood",
      },
      {
        id: 13,
        text: "Which risk visualization technique focuses on understanding how risks evolve and can be mitigated?",
        options: [
          "Bowtie Analysis",
          "Pareto Chart",
          "Fishbone Diagram",
          "Benchmarking",
        ],
        correctAnswer: "Bowtie Analysis",
      },
      {
        id: 14,
        text: "Which risk visualization tool provides real-time tracking and reporting?",
        options: [
          "Risk dashboards",
          "Risk matrix",
          "Stakeholder map",
          "Checklists",
        ],
        correctAnswer: "Risk dashboards",
      },
      {
        id: 15,
        text: "Geographical risk mapping is especially useful for identifying:",
        options: [
          "Location-based risks",
          "Employee performance issues",
          "Legal risks in contracts",
          "Consumer trends",
        ],
        correctAnswer: "Location-based risks",
      },
      {
        id: 16,
        text: "Who among the following is considered an external stakeholder in risk management?",
        options: ["Employees", "IT department", "Customers", "Finance team"],
        correctAnswer: "Customers",
      },
      {
        id: 17,
        text: "Which of the following technologies helps in identifying emerging risks?",
        options: [
          "Artificial Intelligence (AI)",
          "Social media",
          "Call centers",
          "Print advertisements",
        ],
        correctAnswer: "Artificial Intelligence (AI)",
      },
      {
        id: 18,
        text: "Risk management software integrates with which enterprise system?",
        options: [
          "ERP (Enterprise Resource Planning)",
          "CRM (Customer Relationship Management)",
          "Both a & b",
          "None of the above",
        ],
        correctAnswer: "Both a & b",
      },
      {
        id: 19,
        text: "What is the main advantage of using risk management software?",
        options: [
          "It automates risk identification and documentation",
          "It eliminates all risks",
          "It replaces human decision-making",
          "It prevents financial losses",
        ],
        correctAnswer: "It automates risk identification and documentation",
      },
      {
        id: 20,
        text: "What is Fault Tree Analysis (FTA) used for?",
        options: [
          "Identifying the root cause of complex risks",
          "Measuring financial losses",
          "Conducting employee training",
          "Improving customer service",
        ],
        correctAnswer: "Identifying the root cause of complex risks",
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
      {
        id: 6,
        text: "Value at Risk (VaR) primarily quantifies:",
        options: [
          "The minimum expected profit over a defined period",
          "The maximum potential loss over a defined period for a given confidence interval",
          "The average return on investment for a portfolio",
          "The total operational risk exposure of an organization",
        ],
        correctAnswer:
          "The maximum potential loss over a defined period for a given confidence interval",
      },
      {
        id: 7,
        text: "Which of the following is a characteristic of qualitative risk assessment?",
        options: [
          "Provides precise numerical measurements",
          "Typically requires extensive statistical expertise",
          "Often relies on expert judgment and stakeholder perceptions",
          "Always produces more accurate results than quantitative methods",
        ],
        correctAnswer:
          "Often relies on expert judgment and stakeholder perceptions",
      },
      {
        id: 8,
        text: "Which of the following is NOT typically included in an operational risk management framework?",
        options: [
          "Identifying risks across key processes",
          "Assessing likelihood and impact using standardized metrics",
          "Eliminating all potential risks",
          "Monitoring key risk indicators (KRIs)",
        ],
        correctAnswer: "Eliminating all potential risks",
      },
      {
        id: 9,
        text: "Strategic risk appetite refers to:",
        options: [
          "The organization's desire to pursue high-risk ventures",
          "The minimum return required for any investment",
          "The amount and type of risk an organization is willing to accept in pursuit of its objectives",
          "The maximum loss an organization can sustain before bankruptcy",
        ],
        correctAnswer:
          "The amount and type of risk an organization is willing to accept in pursuit of its objectives",
      },
      {
        id: 10,
        text: "Risk-Adjusted Return on Capital (RAROC) is calculated as:",
        options: [
          "Expected Return × Economic Capital",
          "Expected Return / Economic Capital",
          "Expected Return - Economic Capital",
          "(Expected Return - Economic Capital) / Expected Return",
        ],
        correctAnswer: "Expected Return / Economic Capital",
      },
      {
        id: 11,
        text: "Which behavioral bias describes the tendency to overestimate one's knowledge or ability to predict outcomes?",
        options: [
          "Anchoring bias",
          "Confirmation bias",
          "Overconfidence bias",
          "Loss aversion",
        ],
        correctAnswer: "Overconfidence bias",
      },
      {
        id: 12,
        text: "In the context of risk assessment, what does sensitivity analysis examine?",
        options: [
          "The emotional sensitivity of decision-makers to various risks",
          "How changes in input variables affect outcomes",
          "The sensitivity of confidential information being exposed",
          "The market's sensitivity to organizational changes",
        ],
        correctAnswer: "How changes in input variables affect outcomes",
      },
      {
        id: 13,
        text: "Which risk assessment model is specifically designed to identify strengths, weaknesses, opportunities, and threats?",
        options: [
          "PESTLE Analysis",
          "SWOT Analysis",
          "Bow-Tie Analysis",
          "FMEA",
        ],
        correctAnswer: "SWOT Analysis",
      },
      {
        id: 14,
        text: "What is a pre-mortem in the context of risk assessment and decision-making?",
        options: [
          "A medical examination conducted before joining a risk management team",
          "A technique where participants imagine a project has failed and explain why",
          "A preliminary review of historical risk events",
          "A mandatory first step in any risk assessment process",
        ],
        correctAnswer:
          "A technique where participants imagine a project has failed and explain why",
      },
      {
        id: 15,
        text: "Which of the following is NOT a common type of Value at Risk (VaR) calculation?",
        options: [
          "Historical VaR",
          "Parametric VaR",
          "Monte Carlo VaR",
          "Qualitative VaR",
        ],
        correctAnswer: "Qualitative VaR",
      },
      {
        id: 16,
        text: "The Sharpe Ratio is calculated as:",
        options: [
          "Expected Return ÷ Standard Deviation of Returns",
          "(Expected Return - Risk-Free Rate) ÷ Standard Deviation of Returns",
          "Expected Return × Standard Deviation of Returns",
          "(Expected Return - Risk-Free Rate) × Standard Deviation of Returns",
        ],
        correctAnswer:
          "(Expected Return - Risk-Free Rate) ÷ Standard Deviation of Returns",
      },
      {
        id: 17,
        text: "Key Risk Indicators (KRIs) are best described as:",
        options: [
          "Lagging indicators that measure past risk events",
          "Leading indicators that provide early warning of changing risk profiles",
          "Constant metrics that remain stable regardless of business conditions",
          "Regulatory requirements that must be reported to authorities",
        ],
        correctAnswer:
          "Leading indicators that provide early warning of changing risk profiles",
      },
      {
        id: 18,
        text: "Which of the following is NOT one of the common risk assessment models mentioned in the text?",
        options: [
          "ISO 31000",
          "FMEA (Failure Mode and Effects Analysis)",
          "Six Sigma",
          "Bow-Tie Analysis",
        ],
        correctAnswer: "Six Sigma",
      },
      {
        id: 19,
        text: "What is the primary difference between qualitative and quantitative risk assessment?",
        options: [
          "Qualitative assessment is always faster but never accurate",
          "Quantitative assessment uses numerical values rather than descriptive categories",
          "Qualitative assessment can only be performed by certified risk managers",
          "Quantitative assessment always requires specialized software",
        ],
        correctAnswer:
          "Quantitative assessment uses numerical values rather than descriptive categories",
      },
      {
        id: 20,
        text: "Which cognitive bias describes the tendency to prefer avoiding losses over acquiring equivalent gains?",
        options: [
          "Recency bias",
          "Confirmation bias",
          "Loss aversion",
          "Anchoring bias",
        ],
        correctAnswer: "Loss aversion",
      },
    ],
  },
  {
    id: "assignment_6",
    title: "Crafting Effective Risk Mitigation and Response Strategies",
    description: "Learn how to create and implement risk mitigation plans",
    dueDate: "2025-05-12T00:00:00+05:30",
    timeLimit: 35,
    questions: [
      {
        id: 1,
        text: "What is the primary goal of risk mitigation?",
        options: [
          "To eliminate all risks completely",
          "To reduce the likelihood of risks occurring and minimize their impact",
          "To transfer all risks to third parties",
          "To accept risks without taking action",
        ],
        correctAnswer:
          "To reduce the likelihood of risks occurring and minimize their impact",
      },
      {
        id: 2,
        text: "Which of the following is NOT a step in the risk mitigation process?",
        options: [
          "Prioritizing risks based on severity and likelihood",
          "Eliminating all business activities that create risk",
          "Implementing mitigation measures",
          "Monitoring effectiveness",
        ],
        correctAnswer: "Eliminating all business activities that create risk",
      },
      {
        id: 3,
        text: "Risk reduction is defined as:",
        options: [
          "Completely avoiding activities that create risk",
          "Transferring risk to third parties through insurance",
          "Implementing controls that decrease the likelihood or impact of risks",
          "Accepting risks without taking action",
        ],
        correctAnswer:
          "Implementing controls that decrease the likelihood or impact of risks",
      },
      {
        id: 4,
        text: "Which risk mitigation technique involves spreading risk across multiple areas?",
        options: [
          "Risk reduction",
          "Risk prevention",
          "Risk limitation",
          "Risk diversification",
        ],
        correctAnswer: "Risk diversification",
      },
      {
        id: 5,
        text: "Early warning systems in risk mitigation primarily serve to:",
        options: [
          "Eliminate risks entirely",
          "Transfer risks to other parties",
          "Provide alerts when risk indicators reach concerning levels",
          "Replace other mitigation strategies",
        ],
        correctAnswer:
          "Provide alerts when risk indicators reach concerning levels",
      },
      {
        id: 6,
        text: "Preventive controls are implemented:",
        options: [
          "After risk events occur",
          "During risk events",
          "Before risk events occur",
          "Only when required by regulations",
        ],
        correctAnswer: "Before risk events occur",
      },
      {
        id: 7,
        text: "Which of the following is an example of a detective control?",
        options: [
          "Firewall protection",
          "Safety training",
          "Quality inspections",
          "Disaster recovery plans",
        ],
        correctAnswer: "Quality inspections",
      },
      {
        id: 8,
        text: "Corrective controls are primarily designed to:",
        options: [
          "Prevent risks from occurring",
          "Identify when risks are materializing",
          "Minimize damage after risk events",
          "Guide behaviors to reduce risk",
        ],
        correctAnswer: "Minimize damage after risk events",
      },
      {
        id: 9,
        text: 'The concept of "tactical flexibility within strategic discipline" in risk mitigation refers to:',
        options: [
          "Avoiding all strategic planning",
          "Having a clear framework while allowing for situational adjustments",
          "Focusing only on tactical responses",
          "Delegating all mitigation responsibilities to technical teams",
        ],
        correctAnswer:
          "Having a clear framework while allowing for situational adjustments",
      },
      {
        id: 10,
        text: "How does risk mitigation relate to business continuity planning (BCP)?",
        options: [
          "They are completely unrelated disciplines",
          "Risk mitigation replaces the need for BCP",
          "Risk mitigation focuses on prevention while BCP addresses maintaining operations when risks materialize",
          "BCP is only necessary for financial institutions",
        ],
        correctAnswer:
          "Risk mitigation focuses on prevention while BCP addresses maintaining operations when risks materialize",
      },
      {
        id: 11,
        text: "Which risk mitigation strategy guides behaviors to reduce risk?",
        options: [
          "Preventive controls",
          "Detective controls",
          "Corrective controls",
          "Directive controls",
        ],
        correctAnswer: "Directive controls",
      },
      {
        id: 12,
        text: "Successful organizations view risk mitigation as:",
        options: [
          "An isolated activity independent of other business functions",
          "Part of a comprehensive approach to organizational resilience",
          "Only necessary for high-risk industries",
          "A regulatory requirement with no business value",
        ],
        correctAnswer:
          "Part of a comprehensive approach to organizational resilience",
      },
      {
        id: 13,
        text: "What distinguishes risk mitigation from risk avoidance?",
        options: [
          "Risk mitigation eliminates all risks while risk avoidance reduces them",
          "Risk mitigation reduces risks while allowing business activities to continue, whereas risk avoidance eliminates activities that create risk",
          "They are identical strategies",
          "Risk mitigation is only applicable to financial risks",
        ],
        correctAnswer:
          "Risk mitigation reduces risks while allowing business activities to continue, whereas risk avoidance eliminates activities that create risk",
      },
      {
        id: 14,
        text: "The first step in the mitigation process is typically:",
        options: [
          "Implementing mitigation measures",
          "Developing specific mitigation strategies",
          "Prioritizing risks based on severity and likelihood",
          "Adjusting approaches as necessary",
        ],
        correctAnswer: "Prioritizing risks based on severity and likelihood",
      },
      {
        id: 15,
        text: "Which of the following is an example of risk limitation?",
        options: [
          "Implementing a quality control process",
          "Purchasing insurance",
          "Placing limits on investment amounts",
          "Conducting employee safety training",
        ],
        correctAnswer: "Placing limits on investment amounts",
      },
      {
        id: 16,
        text: "The effectiveness of risk mitigation strategies should be:",
        options: [
          "Assumed without verification",
          "Checked only after a risk event occurs",
          "Monitored regularly and adjusted as necessary",
          "Evaluated only during annual audits",
        ],
        correctAnswer: "Monitored regularly and adjusted as necessary",
      },
      {
        id: 17,
        text: 'In the context of mitigation strategies, what are "fail-safes"?',
        options: [
          "Insurance policies",
          "Mechanisms designed to prevent catastrophic failure",
          "Backup generators",
          "Risk registers",
        ],
        correctAnswer: "Mechanisms designed to prevent catastrophic failure",
      },
      {
        id: 18,
        text: "Which type of control identifies when risks are materializing?",
        options: [
          "Preventive controls",
          "Detective controls",
          "Corrective controls",
          "Directive controls",
        ],
        correctAnswer: "Detective controls",
      },
      {
        id: 19,
        text: "Risk mitigation strategies should be:",
        options: [
          "Fixed and unchanging once implemented",
          "Modified only after major incidents",
          "Flexible and adaptable as risk profiles change",
          "Completely redesigned annually",
        ],
        correctAnswer: "Flexible and adaptable as risk profiles change",
      },
      {
        id: 20,
        text: "The relationship between business continuity planning and risk mitigation can best be described as:",
        options: ["Competitive", "Complementary", "Optional", "Redundant"],
        correctAnswer: "Complementary",
      },
    ],
  },
  {
    id: "assignment_7",
    title:
      "Continuous Risk Monitoring and Reporting for Organizational Resilience",
    description: "Learn how to track and communicate about risks effectively",
    dueDate: "2025-05-12T23:59:00+05:30",
    timeLimit: 30,
    questions: [
      {
        id: 1,
        text: "What is the main difference between continuous risk monitoring and traditional risk management approaches?",
        options: [
          "Continuous monitoring is less resource-intensive",
          "Traditional approaches provide more accurate risk assessments",
          "Continuous monitoring establishes an ongoing process rather than providing point-in-time snapshots",
          "Traditional approaches are more adaptable to emerging threats",
        ],
        correctAnswer:
          "Continuous monitoring establishes an ongoing process rather than providing point-in-time snapshots",
      },
      {
        id: 2,
        text: "Which of the following is NOT identified as a benefit of early risk detection through continuous monitoring?",
        options: [
          "Intervention before risks materialize into significant issues",
          "Reduction in potential impact of risks",
          "Transformation of risk management from reactive to proactive discipline",
          "Elimination of the need for risk mitigation strategies",
        ],
        correctAnswer: "Elimination of the need for risk mitigation strategies",
      },
      {
        id: 3,
        text: "In continuous risk monitoring, Key Risk Indicators (KRIs) serve as:",
        options: [
          "Performance evaluation metrics for risk management staff",
          "Early warning signals when approaching predefined thresholds",
          "Legal requirements for regulatory compliance",
          "Fixed parameters that rarely need adjustment",
        ],
        correctAnswer:
          "Early warning signals when approaching predefined thresholds",
      },
      {
        id: 4,
        text: "Which technology can identify patterns and anomalies in risk data that would be impossible for humans to detect manually?",
        options: [
          "Blockchain",
          "Internet of Things (IoT)",
          "Artificial Intelligence and Machine Learning",
          "Big Data storage systems",
        ],
        correctAnswer: "Artificial Intelligence and Machine Learning",
      },
      {
        id: 5,
        text: "Blockchain technology is particularly valuable for monitoring risks related to:",
        options: [
          "Weather patterns and natural disasters",
          "Customer satisfaction and brand loyalty",
          "Market trends and competitive positioning",
          "Fraud, data integrity, and cybersecurity",
        ],
        correctAnswer: "Fraud, data integrity, and cybersecurity",
      },
      {
        id: 6,
        text: "When selecting Key Risk Indicators (KRIs), which characteristic is most important for enabling preventive action?",
        options: [
          "Integration with existing business metrics",
          "Forward-looking and timely insights",
          "Cost-effectiveness of data collection",
          "Alignment with industry standards",
        ],
        correctAnswer: "Forward-looking and timely insights",
      },
      {
        id: 7,
        text: "Which type of KRI would track metrics like liquidity ratios, debt levels, and cash flow?",
        options: [
          "Operational KRIs",
          "Cybersecurity KRIs",
          "Financial KRIs",
          "Reputational KRIs",
        ],
        correctAnswer: "Financial KRIs",
      },
      {
        id: 8,
        text: "What is risk appetite in the context of strategic decision-making?",
        options: [
          "The organization's eagerness to take on new business ventures",
          "The maximum amount of financial loss an organization can sustain",
          "The amount and type of risk an organization is willing to accept in pursuit of objectives",
          "The rate at which an organization implements risk mitigation measures",
        ],
        correctAnswer:
          "The amount and type of risk an organization is willing to accept in pursuit of objectives",
      },
      {
        id: 9,
        text: "What is a primary benefit of integrating risk monitoring with scenario planning?",
        options: [
          "It eliminates the need for contingency planning",
          "It helps leaders prepare for a range of possible outcomes",
          "It guarantees accurate prediction of future events",
          "It reduces the complexity of strategic planning",
        ],
        correctAnswer:
          "It helps leaders prepare for a range of possible outcomes",
      },
      {
        id: 10,
        text: "Effective immediate response protocols in risk response plans:",
        options: [
          "Focus primarily on long-term risk reduction",
          "Are designed exclusively for senior management use",
          "Reduce response time and ensure consistent handling of similar risks",
          "Generally replace the need for business continuity planning",
        ],
        correctAnswer:
          "Reduce response time and ensure consistent handling of similar risks",
      },
      {
        id: 11,
        text: "Impact minimization strategies acknowledge that:",
        options: [
          "All risks can be prevented with proper planning",
          "Not all risks can be prevented, making resilience equally important as prevention",
          "Financial impacts are more important than operational impacts",
          "Risk responses always unfold exactly as planned",
        ],
        correctAnswer:
          "Not all risks can be prevented, making resilience equally important as prevention",
      },
      {
        id: 12,
        text: "When communicating risks across stakeholder groups, which approach is recommended?",
        options: [
          "Providing identical information to all stakeholders for consistency",
          "Limiting risk information to senior management only",
          "Tailoring communication to meet diverse stakeholder needs",
          "Focusing primarily on negative risk developments",
        ],
        correctAnswer:
          "Tailoring communication to meet diverse stakeholder needs",
      },
      {
        id: 13,
        text: "Which statement about transparent risk communication is most accurate?",
        options: [
          "It should conceal uncertainties to avoid alarming stakeholders",
          "It builds trust with both internal and external stakeholders",
          "It should focus exclusively on positive risk developments",
          "It is primarily important for external stakeholders",
        ],
        correctAnswer:
          "It builds trust with both internal and external stakeholders",
      },
      {
        id: 14,
        text: "How does continuous risk monitoring contribute to business continuity?",
        options: [
          "By eliminating the need for formal business continuity plans",
          "By ensuring continuity plans remain relevant and up-to-date",
          "By focusing exclusively on preventive measures",
          "By replacing traditional disaster recovery processes",
        ],
        correctAnswer:
          "By ensuring continuity plans remain relevant and up-to-date",
      },
      {
        id: 15,
        text: "What is organizational resilience in the context of risk management?",
        options: [
          "The ability to eliminate all potential risks",
          "The ability to anticipate, prepare for, respond to, and adapt to changes and disruptions",
          "The capacity to maintain operations without any modifications",
          "The implementation of insurance policies to cover all potential losses",
        ],
        correctAnswer:
          "The ability to anticipate, prepare for, respond to, and adapt to changes and disruptions",
      },
      {
        id: 16,
        text: "Which of the following is NOT mentioned as a component of a risk reporting framework?",
        options: [
          "Standardized risk",
          "Clear reporting structures",
          "Mandatory daily reporting for all risk categories",
          "Appropriate timing and frequency for various risk categories",
        ],
        correctAnswer: "Mandatory daily reporting for all risk categories",
      },
      {
        id: 17,
        text: "In highly resilient organizations, risk awareness is:",
        options: [
          "Limited to specialized risk management departments",
          "A periodic exercise conducted during annual reviews",
          "Embedded throughout the organizational culture",
          "Primarily the responsibility of senior executives",
        ],
        correctAnswer: "Embedded throughout the organizational culture",
      },
      {
        id: 18,
        text: "What is the relationship between continuous monitoring and organizational learning?",
        options: [
          "Continuous monitoring replaces the need for organizational learning",
          "Organizational learning happens independently of monitoring processes",
          "Continuous monitoring creates a feedback loop that enables organizational learning",
          "Organizational learning is only relevant for high-risk industries",
        ],
        correctAnswer:
          "Continuous monitoring creates a feedback loop that enables organizational learning",
      },
      {
        id: 19,
        text: "Which risk reporting tool provides up-to-date visualizations of an organization's risk status?",
        options: [
          "Annual risk assessment reports",
          "Real-time dashboards",
          "Traditional risk registers",
          "Quarterly board presentations",
        ],
        correctAnswer: "Real-time dashboards",
      },
      {
        id: 20,
        text: "IoT (Internet of Things) technologies are particularly valuable for monitoring:",
        options: [
          "Strategic risks",
          "Physical and operational risks",
          "Financial risks",
          "Reputational risks",
        ],
        correctAnswer: "Physical and operational risks",
      },
    ],
  },
  {
    id: "assignment_8",
    title:
      "Integrating ERM with Strategic Planning and Organizational Decision-Making",
    description:
      "Understand how to foster a culture that effectively manages risk",
    dueDate: "2025-05-12T23:59:00+05:30",
    timeLimit: 35,
    questions: [
      {
        id: 1,
        text: "According to the study material, what percentage of strategic failures stem from execution challenges that could have been identified through robust risk assessment?",
        options: ["50%", "60%", "70%", "80%"],
        correctAnswer: "70%",
      },
      {
        id: 2,
        text: "Which of the following is NOT mentioned as a mechanism through which ERM enhances strategic planning?",
        options: [
          "Providing a structured approach to identifying strategic risks",
          "Facilitating scenario planning",
          "Creating a common risk language",
          "Eliminating all potential risks",
        ],
        correctAnswer: "Eliminating all potential risks",
      },
      {
        id: 3,
        text: "According to research from the Risk Management Society, organizations with mature ERM programs achieve what percentage higher market valuations than peers with less developed risk management capabilities?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: "25%",
      },
      {
        id: 4,
        text: "Which of the following is described as a powerful alignment mechanism for ERM and organizational objectives?",
        options: [
          "Quarterly financial reporting",
          "Performance metrics",
          "Customer feedback",
          "Competitor analysis",
        ],
        correctAnswer: "Performance metrics",
      },
      {
        id: 5,
        text: 'In the context of risk appetite, what does "risk tolerance" refer to?',
        options: [
          "The total amount of risk an organization is willing to accept",
          "The acceptable variation around specific objectives",
          "The minimum level of risk necessary for growth",
          "The maximum risk permitted by regulatory authorities",
        ],
        correctAnswer: "The acceptable variation around specific objectives",
      },
      {
        id: 6,
        text: "When evaluating potential acquisitions using risk parameters, what should executives compare?",
        options: [
          "Historical performance vs. projected growth",
          "Projected risk exposures against established appetites",
          "Market share vs. competitor positions",
          "Current leadership vs. potential new management",
        ],
        correctAnswer: "Projected risk exposures against established appetites",
      },
      {
        id: 7,
        text: "What is described as a critical intersection between risk management and resource distribution?",
        options: [
          "Operational budgeting",
          "Capital allocation",
          "Strategic reserves",
          "Performance measurement",
        ],
        correctAnswer: "Capital allocation",
      },
      {
        id: 8,
        text: "Which risk-adjusted metric is mentioned as a way to evaluate investment opportunities?",
        options: [
          "Return on Investment (ROI)",
          "Earnings Before Interest and Taxes (EBIT)",
          "Risk-Adjusted Return on Capital (RAROC)",
          "Gross Margin Percentage",
        ],
        correctAnswer: "Risk-Adjusted Return on Capital (RAROC)",
      },
      {
        id: 9,
        text: "What type of risk assessment focuses specifically on high-impact, low-probability events that could threaten organizational viability?",
        options: [
          "Business impact analysis",
          "Crisis vulnerability analysis",
          "Strategic risk assessment",
          "Operational risk review",
        ],
        correctAnswer: "Crisis vulnerability analysis",
      },
      {
        id: 10,
        text: "According to the text, what did the COVID-19 pandemic demonstrate?",
        options: [
          "The impossibility of preparing for certain types of risks",
          "The value of ERM-enhanced crisis management",
          "The ineffectiveness of traditional risk management approaches",
          "The need to focus exclusively on financial risks",
        ],
        correctAnswer: "The value of ERM-enhanced crisis management",
      },
      {
        id: 11,
        text: "What is described as a critical communication challenge in risk reporting?",
        options: [
          "Technical terminology",
          "Risk aggregation",
          "Timing considerations",
          "Visual representations",
        ],
        correctAnswer: "Risk aggregation",
      },
      {
        id: 12,
        text: "Which approach to risk communication is characterized by creating feedback loops where recipients can request clarification or contribute insights?",
        options: [
          "Unidirectional communication",
          "Bidirectional communication",
          "Broadcast communication",
          "Directive communication",
        ],
        correctAnswer: "Bidirectional communication",
      },
      {
        id: 13,
        text: "What problem can arise when performance management focuses exclusively on achievement targets without consideration of risk?",
        options: [
          "Excessive conservatism",
          "Unrealistic goal-setting",
          "Excessive risk-taking",
          "Employee burnout",
        ],
        correctAnswer: "Excessive risk-taking",
      },
      {
        id: 14,
        text: "Which of the following is NOT mentioned as a risk-adjusted performance metric?",
        options: [
          "Risk-adjusted return on capital",
          "Quality-adjusted output",
          "Customer retention-weighted sales figures",
          "Risk-adjusted market share",
        ],
        correctAnswer: "Risk-adjusted market share",
      },
      {
        id: 15,
        text: "What is the primary purpose of integrating Key Risk Indicators (KRIs) with Key Performance Indicators (KPIs)?",
        options: [
          "To simplify performance reporting",
          "To provide a more comprehensive view of organizational health",
          "To meet regulatory requirements",
          "To reduce the number of metrics being tracked",
        ],
        correctAnswer:
          "To provide a more comprehensive view of organizational health",
      },
      {
        id: 16,
        text: "Which of the following is described as a particularly sensitive integration point between risk and performance?",
        options: [
          "Job descriptions",
          "Compensation structures",
          "Reporting relationships",
          "Team composition",
        ],
        correctAnswer: "Compensation structures",
      },
      {
        id: 17,
        text: "According to the text, risk ownership in organizations with mature risk cultures typically follows what model?",
        options: [
          "Two-lines model",
          "Three-lines model",
          "Four-lines model",
          "Matrix model",
        ],
        correctAnswer: "Three-lines model",
      },
      {
        id: 18,
        text: "Which of the following is NOT mentioned as a way to reinforce risk awareness in an organization?",
        options: [
          "Recognition systems",
          "Continuous improvement approaches",
          "Punitive measures for all errors",
          "Leadership commitment",
        ],
        correctAnswer: "Punitive measures for all errors",
      },
      {
        id: 19,
        text: "What is described as essential for sustaining progress in risk culture development despite being challenging?",
        options: [
          "Measurement",
          "Outsourcing",
          "Restructuring",
          "Centralization",
        ],
        correctAnswer: "Measurement",
      },
      {
        id: 20,
        text: "Which of the following is described as a cultural cornerstone of risk-aware organizations?",
        options: [
          "Centralized decision-making",
          "Risk ownership clarity",
          "Minimal documentation",
          "Separation of business and risk functions",
        ],
        correctAnswer: "Risk ownership clarity",
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
      (event.path === "/.netlify/functions/assignments" ||
        event.path === "/.netlify/functions/assignments/")
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

        // In our case, correctAnswer is always the actual answer text
        let isCorrect = false;
        let correctAnswerIndex = 0;

        // Find the index of the correct answer
        correctAnswerIndex = question.options.findIndex(
          (option) => option === question.correctAnswer
        );

        if (correctAnswerIndex === -1) {
          console.error(
            `Could not find correct answer "${question.correctAnswer}" in options for question ${question.id}`
          );
          correctAnswerIndex = 0; // Default to first option if not found
        }

        // Check if user's answer is correct
        isCorrect = userAnswer === correctAnswerIndex;

        if (isCorrect) {
          score++;
        }

        return {
          questionId: question.id,
          isCorrect,
          correctAnswer: correctAnswerIndex,
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
