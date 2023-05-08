/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Dispatch } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Action } from '@@types/form';

const useSpeechRecognition = (dispatch: Dispatch<Action>) => {
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
      dispatch({ type: 'UPDATE_TRANSCRIPT', payload: text });
    };

    recognition.onend = () => {
      setIsRecording(false);
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
    isRecording,
    startSpeechRecognition,
    stopSpeechRecognition,
  };
};

export default useSpeechRecognition;
