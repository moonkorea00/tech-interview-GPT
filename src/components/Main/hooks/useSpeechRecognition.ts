/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormDispatch } from '@store/formContext';
import { speechRecognitionErrMap } from '@utils/error/error';

const useSpeechRecognition = () => {
  const isBrowserUnsupported = !(
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
  );

  const [isRecording, setIsRecording] = useState(false);
  const [mediaDeviceErr, setMediaDeviceErr] = useState(
    isBrowserUnsupported ? speechRecognitionErrMap['unsupported'] : ''
  );
  const [searchParams] = useSearchParams();

  const dispatch = useFormDispatch();

  if (isBrowserUnsupported) {
    return {
      isRecording,
      isBrowserUnsupported,
      mediaDeviceErr,
      setMediaDeviceErr,
      startSpeechRecognition: () => {},
      stopSpeechRecognition: () => {},
    };
  }

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.lang = searchParams.get('lang');
  recognition.interimResults = true;

  const checkAudioSettings = async () => {
    // prompt access
    await navigator.mediaDevices.getUserMedia({ audio: true });

    // check available device connection
    const devices: MediaDeviceInfo[] =
      await navigator.mediaDevices.enumerateDevices();
    const hasConnection = devices.some(device => device.kind === 'audioinput');

    if (!hasConnection) {
      throw new Error(speechRecognitionErrMap['connection']);
    }
  };

  const startSpeechRecognition = async () => {
    try {
      setMediaDeviceErr('');
      await checkAudioSettings();
      setIsRecording(true);
    } catch (err) {
      if (err instanceof Error) {
        // Web API Error instance
        if (err instanceof DOMException) {
          return setMediaDeviceErr(
            speechRecognitionErrMap.userMedia[
              err.name as keyof typeof speechRecognitionErrMap.userMedia
            ]
          );
        }
        return setMediaDeviceErr(err.message);
      }
    }
  };

  const stopSpeechRecognition = () => {
    setIsRecording(false);
  };

  const handleSpeechResult = (e: SpeechRecognitionEvent) => {
    const text = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    dispatch({ type: 'FORM/UPDATE_TRANSCRIPT', payload: text });
  };

  useEffect(() => {
    if (!recognition) return;

    if (isRecording) {
      recognition.start();
      recognition.addEventListener('result', handleSpeechResult);
    } else {
      recognition.removeEventListener('result', handleSpeechResult);
      recognition.stop();
    }

    recognition.onend = () => {
      setIsRecording(false);
    };

    return () => {
      recognition.removeEventListener('result', handleSpeechResult);
      recognition.stop();
    };
  }, [isRecording]);

  return {
    isRecording,
    isBrowserUnsupported,
    mediaDeviceErr,
    setMediaDeviceErr,
    startSpeechRecognition,
    stopSpeechRecognition,
  };
};

export default useSpeechRecognition;
