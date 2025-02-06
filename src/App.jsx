import './App.css'
import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className="flex gap-4 p-4">
      <ResumeForm resumeData={resumeData} handleChange={handleChange} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
}

export default App
