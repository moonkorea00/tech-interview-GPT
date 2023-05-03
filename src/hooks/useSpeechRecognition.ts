/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [searchParams] = useSearchParams();

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = searchParams.get('lang');
  recognition.interminResults = true;

  const startSpeechRecognition = () => {
    setIsRecording(true);
  };

  const stopSpeechRecognition = () => {
    setIsRecording(false);
  };

  useEffect(() => {
    const handleSpeechResult = (e: SpeechRecognitionEvent) => {
      const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setTranscript(text);
    };

    if (isRecording) {
      recognition.start();
      recognition.addEventListener('result', handleSpeechResult);
    } else {
      recognition.removeEventListener('result', handleSpeechResult);
      recognition.stop();
    }

    return () => {
      recognition.removeEventListener('result', handleSpeechResult);
      recognition.stop();
    };
  }, [isRecording]);

  return {
    transcript,
    setTranscript,
    isRecording,
    startSpeechRecognition,
    stopSpeechRecognition,
  };
};

export default useSpeechRecognition;
