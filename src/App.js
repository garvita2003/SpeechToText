import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    //subscribe to thapa technical for more awesome videos

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h3>Speech to Text Converter</h3>
                <br/>
                <p>An Application that converts speech from the microphone to text and makes it available to you.</p>

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={setCopied}>
                        {isCopied ? 'Copied! 👍': 'Copy to Clipboard 📝'}
                    </button>
                    <button onClick={startListening}>Start Listening 🔊</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening 🔇</button>

                </div>

            </div>

        </>
    );
};

export default App;