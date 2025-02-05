import './App.css'
import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
  });

  handleChange

  return (
    <div className="flex gap-4 p-4">
      <ResumeForm resumeData={resumeData} handleChange={handleChange} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
}

function handleChange(e, setResumeData, resumeData){
    console.log("Input Changed:", e.target.name, e.target.value);
  setResumeData({ ...resumeData, [e.target.name]: e.target.value });
};

export default App