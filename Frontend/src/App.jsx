import React, { useState, useEffect } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Markdown from "react-markdown";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`fucntion  sum(){
      return 1+1}`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      console.log("Review received:", response.data);
      setReview(response.data);
    } catch (error) {
      console.error("Error:", error);
      setReview(
        "Error: Could not get code review. Please make sure the backend server is running."
      );
    }
  }

  return (
    <>
      <main className="h-[100%] w-[100%] flex  gap-[1rem] bg-gray-800 ">
        <div className="left h-[100%] p-5.5  flex-1/2  bg-black rounded-{0.7rem} relative">
          <div className="code  m-auto h-[100%] w-[100%] ">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review  absolute bg-blue-500 text-black rounded-[15%] bottom-[1rem] right-[1rem] cursor-pointer"
          >
            {" "}
            review
          </div>
        </div>

        <div className="right p-5.5 h-[100%] bg-gray-700 flex-1/2 rounded-{0.7rem} ">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
