import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import InputTabs from "../components/dashboard/InputTabs";
import InputPanel from "../components/dashboard/InputPanel";
import GenerationOptions from "../components/dashboard/GenerationOptions";
import GenerateButton from "../components/dashboard/GenerateButton";
import ResultDisplay from "../components/dashboard/ResultDisplay";
import { manageData } from "../utils/helper";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("text"); // 'text' or 'file'
  const [generationType, setGenerationType] = useState("summary"); // 'summary', 'mcq', 'questions'
  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState(null);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const wordCount = textInput.trim().split(/\s+/).filter(Boolean).length;
  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await manageData(file, textInput, generationType);
      setResult(data);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearResult = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-float opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/20 rounded-full blur-[120px] animate-float animation-delay-2000 opacity-60"></div>

      <div className="w-full max-w-6xl relative z-10">
        <DashboardHeader />

        <div className="flex flex-col lg:flex-row gap-6 animate-fade-in-up animation-delay-300">
          {/* Main Input Area or Result Display */}
          {result ? (
            <ResultDisplay
              result={result}
              type={generationType}
              onBack={clearResult}
            />
          ) : (
            <div className="glass-card rounded-2xl p-1 flex-1 flex flex-col md:flex-row overflow-hidden min-h-[500px]">
              <InputTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <InputPanel
                activeTab={activeTab}
                textInput={textInput}
                handleTextChange={handleTextChange}
                handleFileChange={handleFileChange}
                handleSubmit={handleSubmit}
              />
            </div>
          )}

          {/* Configuration / Output Sidebar */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            <GenerationOptions
              generationType={generationType}
              setGenerationType={setGenerationType}
            />
            <GenerateButton
              disabled={wordCount < 5 || loading}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
