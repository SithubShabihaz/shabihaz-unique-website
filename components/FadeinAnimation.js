"use client";

import { useState, useEffect } from "react";

export default function TextAnimation() {
  // 1. Define the words you want to cycle through
  const words = ["Full Stack Development", "AI Automation Development", "Database Architecture", "Cloud Architecture", "Digital Marketing Services", "Social Media Management", "Wordpress Website Design", "Shopify Store Development"];
  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Step 1: Trigger fade out
      setFade(false); 

      // Step 2: Wait for the fade-out transition to finish, then change the word and fade back in
      setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setFade(true);
      }, 500); // This should match your Tailwind duration-500
      
    }, 3000); // Changes the word every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
      <h2 className="text-1xl sm:text-2xl">
        providing{" "} <span
          className={`inline-block min-w-[200px] text-1xl sm:text-2xl text-[#ffff39] transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {words[index]}
        </span>
      </h2>
  );
}