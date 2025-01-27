# DeepSeekR1-1.5b Chatbot Interface

## 1. Problem Statement
Engaging in dynamic, real-time, and insightful conversations with large language models is often hindered by a lack of user-friendly interfaces, efficient backend integrations, and scalable deployment strategies. This project addresses these gaps by creating a seamless chatbot experience powered by the DeepSeekR1-1.5b model.

---

## 2. Solution
The DeepSeekR1-1.5b Chatbot Interface provides a modular, scalable, and aesthetically engaging platform for interacting with the DeepSeekR1-1.5b AI model. The solution integrates a Next.js frontend with Python Flask as the backend, utilizing Docker for deployment and Ollama for efficient model orchestration.

---

## 3. Link to Medium Article
[Read the Full Story on Medium](#)

---

## 4. Organization/Institution
**DeepSeek AI Lab**  
Innovators in AI-driven conversational interfaces.

---

## 5. Individual/Team
- **Team Name**: CyberSeek Devs
- **Team Members**:
  - Jane Doe (Frontend Developer)  
  - John Smith (Backend Engineer)  
  - Alice Johnson (AI Specialist)  

---

## 6. Duration
**1 Day**

---

## 7. Screenshots
*(Leave space for screenshots)*

---

## 8. Observations
- **Frontend:** The use of Next.js and Tailwind CSS streamlined the development process, enabling rapid prototyping and clean UI design. The `DottedBall` animation provided dynamic feedback during chatbot interactions.  
- **Backend:** Flask's lightweight framework, combined with Docker and Ollama, ensured a highly modular and scalable architecture for serving the AI model.  
- **Integration:** The API proxy in Next.js seamlessly connected the frontend and backend, enabling efficient communication.  
- **Deployment:** Docker ensured consistent deployment across environments, simplifying the workflow.

---

## 9. Link to Project
The project documentation, source code, and live demo will be available on the GitHub repository:  
[GitHub Repository](#)

---

## Backend Structure: Python Flask
The backend for the DeepSeekR1-1.5b project is designed to be modular and scalable, using Python Flask for API handling and Docker for deployment with Ollama for model orchestration.

### Backend Directory Structure
```
backend/
├── app/
│   ├── __init__.py           # Initializes the Flask app
│   ├── main.py               # Entry point for the Flask server
│   ├── routes/
│   │   ├── __init__.py       # Route initialization
│   │   └── query.py          # Handles `/prompt` API route
│   └── services/
│       └── model_service.py  # Interacts with the DeepSeekR1:1.5b model via Ollama
├── scripts/
│   ├── install_venv.sh       # Installs the virtual environment
│   ├── start_server.sh       # Starts the Flask server
│   ├── calling_test.sh       # Test script for API endpoints
├── tests/
│   ├── __init__.py           # Test initialization
│   └── test_query.py         # Unit tests for query API
├── venv/                     # Virtual environment directory
├── Dockerfile                # Dockerfile for containerizing the backend
├── requirements.txt          # Python dependencies
└── README.md                 # Documentation for the backend
```

### Key Backend Components
- **Flask Routes:** Handles API requests, such as `/prompt` to process user queries.
- **Model Integration:** Communicates with the DeepSeekR1-1.5b model through Ollama.
- **Docker Integration:** The backend is containerized using Docker for portability.
- **Testing:** Comprehensive unit tests for routes and services.

---

## Frontend Structure: Next.js
The frontend leverages Next.js for a modern, server-rendered React framework with Tailwind CSS for styling and advanced animations.

### Frontend Directory Structure
```
frontend/
├── app/
│   ├── api/
│   │   └── query/
│   │       └── route.ts      # Proxies requests to the Flask backend
│   ├── components/
│   │   ├── animations/
│   │   │   └── DottedBall.tsx    # Dotted ball animations
│   │   ├── inputs/
│   │   │   ├── InputBox.tsx      # User input component
│   │   │   └── SubmitButton.tsx  # Submit button
│   │   └── displays/
│   │       └── ResponseDisplay.tsx  # Displays the chatbot's response
│   ├── layout.tsx              # Global layout for the app
│   ├── page.tsx                # Main chatbot interface
│   └── styles/
│       ├── animations/
│       │   └── DottedBall.css
│       ├── inputs/
│       │   ├── InputBox.css
│       │   └── SubmitButton.css
│       └── displays/
│           └── ResponseDisplay.css
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── .gitignore
├── package.json                # Frontend dependencies
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.ts              # Next.js configuration
```

### Key Frontend Components
- **Animations:** `DottedBall` animations for chatbot states (`typing`, `sending`, `received`) using CSS keyframes.
- **UI Components:** Modular design with reusable components like `InputBox` and `ResponseDisplay`.
- **API Proxy:** Proxies requests from `/api/query` to the Flask backend.

---

## Tech Stack

### **Frontend (Next.js)**
- **Framework:** Next.js (Server-side rendering and API routing)
- **Styling:** Tailwind CSS (Utility-first CSS framework)
- **Animations:** CSS Keyframes (Smooth animations for chatbot feedback)
- **State Management:** React Hooks (`useState` for managing states)
- **TypeScript:** Type safety for scalable development.

### **Backend (Flask)**
- **Framework:** Flask (Lightweight Python web framework)
- **Model Orchestration:** Ollama (Integrates with DeepSeekR1:1.5b model)
- **Containerization:** Docker (Ensures consistent deployment)
- **Testing:** Pytest (Unit tests for APIs)

### **AI Model**
- **Model Name:** DeepSeekR1:1.5b
- **Deployment:** Ollama (Efficient model serving and inference)

---

## Workflow
1. **Frontend:** User inputs are sent to the `/api/query` endpoint.
2. **API Layer:** Next.js API routes proxy requests to Flask.
3. **Backend:** Flask processes requests and communicates with the Ollama-managed DeepSeekR1:1.5b model.
4. **Response:** The model's output is returned to the frontend and displayed in the user interface.

