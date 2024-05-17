import React from "react";

import App from "./App";

import { createRoot } from "react-dom/client";

// Create a root instance using createRoot
const root = createRoot(document.getElementById("root"));

// Render your main App component
root.render(<App />);
