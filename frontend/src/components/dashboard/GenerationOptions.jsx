import React from "react";

const GenerationOption = ({
  id,
  label,
  icon,
  description,
  generationType,
  setGenerationType,
}) => (
  <button
    type="button"
    onClick={() => setGenerationType(id)}
    className={`group relative p-4 rounded-xl border transition-all duration-300 text-left hover:scale-[1.02] active:scale-[0.98]
      ${
        generationType === id
          ? "bg-indigo-600/20 border-indigo-500/50 shadow-lg shadow-indigo-500/10"
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      }
    `}
  >
    <div
      className={`p-3 rounded-lg w-fit mb-3 transition-colors ${
        generationType === id
          ? "bg-indigo-500 text-white"
          : "bg-gray-800 text-gray-400 group-hover:text-white group-hover:bg-gray-700"
      }`}
    >
      {icon}
    </div>
    <h3
      className={`font-semibold text-lg mb-1 ${
        generationType === id
          ? "text-white"
          : "text-gray-200 group-hover:text-white"
      }`}
    >
      {label}
    </h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

    {/* Active Indicator */}
    {generationType === id && (
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"></div>
    )}
  </button>
);

const GenerationOptions = ({ generationType, setGenerationType }) => {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        Output Type
      </h3>

      <div className="flex flex-col gap-3">
        <GenerationOption
          id="summary"
          label="Summary"
          description="Get a concise summary of the content."
          generationType={generationType}
          setGenerationType={setGenerationType}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          }
        />
        <GenerationOption
          id="mcq"
          label="MCQ"
          description="Generate multiple choice questions."
          generationType={generationType}
          setGenerationType={setGenerationType}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <GenerationOption
          id="questions"
          label="Questions"
          description="Generate open-ended questions."
          generationType={generationType}
          setGenerationType={setGenerationType}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default GenerationOptions;
