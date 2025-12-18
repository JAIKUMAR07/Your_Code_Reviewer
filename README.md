# 🔍 Your AI Code Reviewer
 

## 🚀 Overview

**Your Code Reviewer** is an intelligent, AI-powered developer tool designed to elevate code quality. By leveraging Large Language Models (LLMs) API's, this application provides instant, automated code reviews, highlighting potential bugs, optimizing performance, and suggesting cleaner syntax.



 


## ✨ Key Features

* **⚡ Instant Analysis**: Real-time feedback on code logic and syntax.
* **🛡️ Error Detection**: Identifies bugs, security vulnerabilities, and anti-patterns.
* **💡 Smart Suggestions**: Offers actionable optimization tips and refactoring advice.
* **🌍 Multi-Language Support**: Seamlessly reviews JavaScript, Python, Java, C++, and more.
* **🎨 Clean UI**: A developer-centric interface built for focus and clarity.

## 🏗️ Project Structure

A high-level overview of the repository structure:

```bash
Your_Code_Reviewer/
├── Backend/
│   ├── src/
│   ├── .env              # Example environment variables
│   ├── server.js          # Entry point for the backend
│   └── package.json
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md

```

## 🛠️ Tech Stack

* **Frontend**: VITE + React.js  
* **Backend**: Node.js, Express.js
* **AI Integration**: [Google Gemini api)   
* **Tools**: Git, npm, VS Code


 ### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [npm](https://www.npmjs.com/) (Node Package Manager)

### 📥 Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/JAIKUMAR07/Your_Code_Reviewer.git](https://github.com/JAIKUMAR07/Your_Code_Reviewer.git)
    cd Your_Code_Reviewer
    ```

2.  **Backend Setup**
    Navigate to the backend directory and install dependencies:
    ```bash
    cd Backend
    npm install
    ```
    
    **Configuration (.env):**
    Create a `.env` file in the `Backend` root directory. Add the following variables:
    ```env
    PORT=3000
    
    GEMINI_API_KEY=your_api_key_here
    # Add your specific AI API Key below (Check your backend code for the exact variable name)
    # also you can use different AI API key as well  
    ```
    
    Start the backend server:
    ```bash
    npm start
    # or
    node server.js
    # or
    npx nodemon 
    ```

3.  **Frontend Setup**
    Open a new terminal, navigate to the frontend directory, and install dependencies:
    ```bash
    cd ../Frontend
    npm install
    ```

    Start the frontend application:
    ```bash
    npm start
    # or if using Vite
    npm run dev
    ```

4.  **Usage**
    * Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).
    * Paste your code into the input editor.
    * Click "Review" to receive AI-generated feedback.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

## 📞 Contact

**Jaikumar** - [GitHub Profile](https://github.com/JAIKUMAR07)

 

---
<p align="center">
  Made with ❤️ by Jaikumar
</p>
