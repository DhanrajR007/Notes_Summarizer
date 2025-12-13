import React from "react";

const TextInput = ({ label, placeholder, value, onChange, icon }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-300 ml-1 block">
          {label}
        </label>
      )}
      <div className="relative group">
        <textarea
          className="input-modern min-h-[300px] resize-none font-mono text-sm leading-relaxed"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
        {/* Subtle glow effect on focus - implemented via ring in css but adding extra div for more complex effects if needed later */}
      </div>
    </div>
  );
};

export default TextInput;
