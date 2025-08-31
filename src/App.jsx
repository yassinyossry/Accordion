import "./index.css";
import { useState } from "react";
const faqs = [
  {
    title: "What is the difference between let and const in JavaScript?",
    text: "Both are used to declare variables. let allows reassignment, while const prevents reassignment after declaration. However, const does not make objects immutable; it only prevents reassigning the variable itself.",
  },
  {
    title: "What is useEffect in React?",
    text: "useEffect is a Hook used to run side effects in React components, such as fetching data, interacting with the DOM, or subscribing to events. By default, it runs after every render, but you can control it with a dependency array.",
  },
  {
    title: "Why do developers use Git for project management?",
    text: "Git is a version control system that tracks code changes, allows rolling back to previous versions, supports team collaboration, and enables branching for feature development without affecting the main codebase.",
  },
  {
    title: "Steps to contribute to a GitHub project",
    text: (
      <ul>
        <li>Fork the repository to your account</li>
        <li>Clone it to your local machine</li>
        <li>Create a new branch for your feature or fix</li>
        <li>Make your changes and commit them with a clear message</li>
        <li>Push the branch to your GitHub repo</li>
        <li>Create a Pull Request for review</li>
      </ul>
    ),
  },
];


export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <Questions
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          key={i}
          title={faq.title}
          number={i}
        >
          {faq.text}
        </Questions>
      ))}
    </div>
  );
}

function Questions({ currentOpen, onOpen, number, title, children }) {
  const isOpen = number === currentOpen;
  function handleClick() {
    onOpen(isOpen ? null : number);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          <div className="text">{children}</div>
        </div>
      )}
    </div>
  );
}
