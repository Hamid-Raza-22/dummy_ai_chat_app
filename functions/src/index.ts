import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import cors from "cors";  // Changed import

admin.initializeApp();

const corsHandler = cors({ origin: true });

// Enhanced AI response logic
const aiResponses = {
  greetings: ["hello", "hi", "hey"],
  farewells: ["bye", "goodbye", "see you"],
  thanks: ["thank", "thanks", "appreciate"],
  feelings: ["how are you", "how's it going"],
};

/**
 * Function to get AI responses for given messages
 * @param message User-provided message as string
 * @returns AI-generated response string
 */
function getAIResponse(message: string): string {
  const lowerMsg = message.toLowerCase().trim();

  if (aiResponses.greetings.some((word) => lowerMsg.includes(word))) {
    return "Hi there! How can I assist you today?";
  }
  if (aiResponses.farewells.some((word) => lowerMsg.includes(word))) {
    return "Goodbye! Have a wonderful day!";
  }
  if (aiResponses.thanks.some((word) => lowerMsg.includes(word))) {
    return "You're welcome! Is there anything else I can help with?";
  }
  if (aiResponses.feelings.some((phrase) => lowerMsg.includes(phrase))) {
        return "I'm a Dummy AI Assistant developed by Hamid Raza, always ready to help!";
  }
  if (lowerMsg.includes("your name")) {
    return "I'm your Firebase AI assistant!";
  }

  const defaultResponses = [
    "I'm not sure I understand. Could you rephrase that?",
    "That's an interesting question. Let me think about how to respond.",
    "I'm still learning. Could you ask me something else?",
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

/**
 * Cloud Function for chat
 * @param req HTTP request object
 * @param res HTTP response object
 */
exports.chat = functions.https.onRequest((req, res) => {
  return corsHandler(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
      }

      const { message } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({
          error: "Invalid input",
          details: "Message must be a non-empty string",
        });
      }

      // Simulate processing delay (500-1500ms)
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 1000 + 500)
      );

      const reply = getAIResponse(message);

      return res.json({
        reply,
        timestamp: admin.firestore.Timestamp.now().toDate().toISOString(),
      });
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(500).json({
        error: "Internal server error",
        details: errorMessage,
      });
    }
  });
});

/**
 * Health check function
 * @param req HTTP request object
 * @param res HTTP response object
 */
exports.health = functions.https.onRequest((req, res) => {
  return corsHandler(req, res, () => {
    return res.json({
      status: "OK",
      timestamp: admin.firestore.Timestamp.now().toDate().toISOString(),
      runtime: process.env.FUNCTION_NAME || "local",
    });
  });
});
