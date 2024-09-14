import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // typing speed in milliseconds
  initialDelay?: number; // initial delay in milliseconds
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, initialDelay = 2000, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, initialDelay);

    return () => clearTimeout(delayTimer);
  }, [initialDelay]);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    if (startTyping && index === text.length && onComplete) {
        onComplete();
      }
  }, [index, text, speed, startTyping]);

  return <p>{displayedText}</p>;
};

export default TypingEffect;
