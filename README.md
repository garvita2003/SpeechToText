# SpeechToText - Speech to Text Converter 🎤

## 📌 Introduction

**SpeechToText** is a React-based web application that converts speech from the microphone to text in real-time. This application is designed to help users input text through voice, making it ideal for users with slow typing speed or those who prefer voice input for accessibility and convenience.

**Key Features:**
- ✅ Real-time speech recognition and conversion to text
- ✅ Start and stop listening controls
- ✅ Copy to clipboard functionality
- ✅ Clear text and refresh option
- ✅ Responsive design for multiple devices
- ✅ Browser-native speech recognition support
- ✅ Continuous speech listening mode

---

## 🔄 Process / Flow

**Key Steps:**
1. User clicks "Start Listening 🔊" button to begin speech recognition
2. Microphone captures audio input from the user
3. Speech recognition engine converts audio to text in real-time
4. Converted text displays in the text area as user speaks
5. User can click "Copy to Clipboard 📝" to copy the text
6. User clicks "Stop Listening 🔇" to end speech recognition
7. User can refresh or clear the response by reloading the application

---

## 🛠️ Technology Used

| Technology | Purpose |
|-----------|---------|
| **React.js** | Frontend framework for building UI components |
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling and responsive design |
| **JavaScript** | Application logic and event handling |
| **Web Speech API** | Browser-native speech recognition |

**Language Composition:**
- JavaScript: 47.6%
- CSS: 42.9%
- HTML: 9.5%

**Dependencies:**
- `react-speech-recognition` - React hook for speech recognition
- `react-use-clipboard` - React hook for clipboard functionality
- `react-dom` - React DOM rendering
- `react-scripts` - Build and development scripts

---

## 🎓 Skills Gained

**Frontend Development:**
- ✅ React Hooks (useState) for state management
- ✅ React functional components
- ✅ CSS styling and responsive design
- ✅ Event handling and button interactions
- ✅ Component lifecycle management

**Web APIs:**
- ✅ Web Speech API integration
- ✅ Browser speech recognition implementation
- ✅ Microphone access and permissions handling
- ✅ Real-time data streaming and processing

**Third-party Integrations:**
- ✅ React hook library integration
- ✅ npm package management
- ✅ Third-party hook usage (useSpeechRecognition, useClipboard)

**UI/UX Design:**
- ✅ Responsive design implementation
- ✅ Accessibility considerations
- ✅ User feedback (copy confirmation)
- ✅ Mobile-first design approach

---

## 📂 Project Structure

```
SpeechToText/
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   ├── favicon.ico          # Favicon
│   └── logo files
│
├── src/                     # Source code
│   ├── App.js               # Main application component
│   ├── App.css              # Application styling
│   ├── index.js             # React entry point
│   ├── index.css            # Global styles
│   ├── App.test.js          # Component tests
│   ├── setupTests.js        # Test configuration
│   └── reportWebVitals.js   # Performance metrics
│
├── package.json             # Project dependencies
├── package-lock.json        # Locked dependency versions
└── README.md                # Documentation
```

---

## 📸 Demonstration

**Application Overview:**
https://github.com/user-attachments/assets/5b53ff18-527f-4b10-8285-e728d4246b28

---

## ⚙️ Setup Instructions

### Prerequisites:
- Node.js and npm installed on your system
- A modern web browser with microphone support (Chrome, Firefox, Edge, Safari)
- Microphone access permissions

### Installation Steps:

```bash
# 1. Clone the repository
git clone https://github.com/garvita2003/SpeechToText.git
cd SpeechToText

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
# Application will open at http://localhost:3000
```

### Available Scripts:

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (not reversible)
npm run eject
```

---

## 📋 How to Use

1. **Open the Application:**
   - Navigate to `http://localhost:3000` after running `npm start`

2. **Start Listening:**
   - Click the "Start Listening 🔊" button to begin speech recognition
   - Allow microphone access if prompted by the browser

3. **Speak:**
   - Speak clearly into your microphone
   - Your speech will be converted to text in real-time in the text area

4. **Copy Text:**
   - Click the "Copy to Clipboard 📝" button to copy the recognized text
   - A confirmation message "Copied! 👍" will appear

5. **Stop Listening:**
   - Click "Stop Listening 🔇" to end the speech recognition session

6. **Clear Text:**
   - Refresh the browser or reload the page to clear all text

---

## ⚠️ Browser Compatibility

**Supported Browsers:**
- ✅ Chrome/Chromium (Full support)
- ✅ Edge (Full support)
- ✅ Firefox (Full support)
- ✅ Safari (Full support)

**Note:** The application requires microphone access and modern Web Speech API support. Some older browsers may not have full support for speech recognition.

---

## 🎤 Speech Recognition Settings

**Current Configuration:**
- **Language:** English (India) - 'en-IN'
- **Mode:** Continuous listening
- **Output:** Real-time text transcription

You can modify the language and settings in `src/App.js` line 15:
```javascript
const startListening = () => SpeechRecognition.startListening({ 
  continuous: true, 
  language: 'en-IN'  // Change this to your preferred language code
});
```

---

## 🔒 Permissions

The application requires the following browser permissions:
- **Microphone Access:** Required for speech recognition to function

---

## 📝 Notes

- This application uses the native browser Web Speech API
- Internet connection may be required depending on the browser implementation
- Speech recognition accuracy may vary based on audio quality and background noise
- The text area stores the transcript during the session only
