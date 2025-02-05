function ResumeForm(resumeData, handleChange) {
    return (
        <div className="w-1/2 p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enter Resume Details</h2>
            <input name="name" value={resumeData.name} placeholder="Full Name" onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
            <input name="email" value={resumeData.email} placeholder="Email" onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
            <input name="phone" value={resumeData.phone} placeholder="Phone" onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
            <textarea name="summary" value={resumeData.summary} placeholder="Summary" onChange={handleChange} className="w-full p-2 mb-2 border rounded"></textarea>
            <textarea name="experience" value={resumeData.experience} placeholder="Experience" onChange={handleChange} className="w-full p-2 mb-2 border rounded"></textarea>
            <textarea name="education" value={resumeData.education} placeholder="Education" onChange={handleChange} className="w-full p-2 mb-2 border rounded"></textarea>
        </div>
    );
}

export default ResumeForm;