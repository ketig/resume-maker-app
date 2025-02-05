function ResumePreview(resumeData) {
    console.log("Resume Data:", resumeData);
    
    return (
        <div className="w-1/2 p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
            <div className="p-2 border-b mb-2">
              <h3 className="text-lg font-semibold">{resumeData.name}</h3>
              <p>{resumeData.email} | {resumeData.phone}</p>
            </div>
            <div className="p-2 border-b mb-2">
              <h4 className="font-semibold">Summary</h4>
              <p>{resumeData.summary}</p>
            </div>
            <div className="p-2 border-b mb-2">
              <h4 className="font-semibold">Experience</h4>
              <p>{resumeData.experience}</p>
            </div>
            <div className="p-2">
              <h4 className="font-semibold">Education</h4>
              <p>{resumeData.education}</p>
            </div>
        </div>
    );
}

export default ResumePreview;