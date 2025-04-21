import { useState } from "react";
import { Typography } from "./components/Typography";
import { Input } from "./components/Input";
import { Toast } from "./components/Toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8 space-y-6">
    
      <div className="space-y-2">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="p">This is a paragraph showing how text looks.</Typography>
        <Typography variant="label">This is a label</Typography>
      </div>

    
      <div className="w-1/2">
        <Input label="Email" placeholder="Enter your email" />
      </div>

  
      <button
        onClick={() => setShowToast(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Show Toast
      </button>

  
      {showToast && (
        <Toast message="Successfully submitted!" type="success" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}

export default App;
