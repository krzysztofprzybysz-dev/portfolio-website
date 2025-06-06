import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({ phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const phraseIndex = useRef(0);
  const timer = useRef(null);

  // Cleanup function to clear timers
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  // Main typing effect logic
  useEffect(() => {
    // Validate phrases array
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex.current];

    // Clear any existing timeout
    if (timer.current) clearTimeout(timer.current);

    // Typing logic
    if (isTyping) {
      // If we've completed typing the current phrase
      if (index >= currentPhrase.length) {
        // Pause before starting to delete
        timer.current = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        return;
      }

      // Type next character
      timer.current = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    }
    // Deleting logic
    else {
      if (index <= 0) {
        // Move to the next phrase
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        setIsTyping(true);
        return;
      }

      // Delete a character
      timer.current = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    }
  }, [index, isTyping, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-indigo-300 font-semibold inline">
      {displayText}
      <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-1 align-middle animate-[blink_1s_infinite]"></span>
    </span>
  );
};

export default TypewriterEffect;
