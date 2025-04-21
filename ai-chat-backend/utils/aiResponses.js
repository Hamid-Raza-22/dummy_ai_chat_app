const aiResponses = {
  greetings: ["hello", "hi", "hey", "namaste"],
  farewells: ["bye", "goodbye", "see you"],
  thanks: ["thank", "thanks", "shukriya"],
  help: ["help", "madad"],
  creator: ["who made you", "creator", "developer"]
};


function getAIResponse(message) {
  const lowerMsg = message.toLowerCase().trim();
  
  // Check for specific response patterns
  if (aiResponses.greetings.some(word => lowerMsg.includes(word))) {
    return "Hello! How can I assist you today?";
  }
  if (aiResponses.farewells.some(word => lowerMsg.includes(word))) {
    return "Goodbye! Have a wonderful day!";
  }
  if (aiResponses.thanks.some(word => lowerMsg.includes(word))) {
    return "You're welcome! Happy to help.";
  }
  if (aiResponses.help.some(word => lowerMsg.includes(word))) {
    return "I can help with general questions. What would you like to know?";
  }
  if (aiResponses.creator.some(word => lowerMsg.includes(word))) {
    return "I was created by a Engr. Hamid Raza using Node.js technology.";
  }
  if (lowerMsg.includes('your name')) {
    return "I'm your AI assistant!";
  }
  if (lowerMsg.includes('time')) {
    return `The current time is ${new Date().toLocaleTimeString()}`;
  }

  // Default responses
  const defaultResponses = [
    "That's an interesting point. Could you elaborate?",
    "I'm still learning. Could you ask me something else?",
    "Let me think about that... Can you rephrase your question?",
    "I understand you're asking about: " + message
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

module.exports = { getAIResponse };