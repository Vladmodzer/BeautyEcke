// useMapDataToTextContent.js
"use client";
import { useState, useEffect } from "react";

const useMapDataToTextContent = (keyPath, lan) => {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedData = localStorage.getItem("newData")
      ? localStorage.getItem("newData")
      : "";
    if (!storedData) return;

    const data = JSON.parse(storedData);
    if (!data || !data[lan]) return;

    const result =
      keyPath
        .split(".")
        .reduce((acc, key) => acc && acc[key], data[lan][lan]) || "";

    setTextContent(result);
  }, [keyPath, lan]);

  return textContent;
};

export default useMapDataToTextContent;
