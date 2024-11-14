// useMapDataToTextContent.js
"use client"
import { useState, useEffect } from 'react';

const useMapDataToTextContent = (keyPath, lan) => {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("newData") || "";
    if (!storedData) {
      setTextContent("");
      return;
    }

    const data = JSON.parse(storedData);
    if (!data || !data[lan]) {
      setTextContent("");
      return;
    }

    const result = keyPath.split(".").reduce((acc, key) => acc && acc[key], data[lan][lan]) || "";
    setTextContent(result);
  }, [keyPath, lan]);

  return textContent;
};

export default useMapDataToTextContent;
