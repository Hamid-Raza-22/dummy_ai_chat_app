
# Dummy AI Chat App (MVVM Architecture)

A Flutter mobile application that allows users to  Dummy chat with an AI, built with MVVM architecture and a Node.js & Firebase backend.

## Features

- Clean MVVM architecture implementation
- Real-time chat interface with message bubbles
- Typing indicator animation
- Auto-scroll to latest message
- Error handling for API calls
- Local backend server integration

## Technical Specifications

| Component          | Technology Used         |
|--------------------|-------------------------|
| **Framework**      | Flutter 3.0+            |
| **State Management** | GetX 4.6+             |
| **Networking**     | HTTP Package  |
| **Local Backend**  | Node.js 18+  |
| **Cloud Backend**  | Firebase Functions      |


**Backend:**
- Firebase # in Functions Directory
- (Local) Node.js # in ai_chat_backend Directory

## Project Structure

```
lib/
├── models/               # Data models and entities
│   ├── message.dart      # Message data structure
│   └── api_response.dart # Standard API response format
│
├── repositories/         # Data access layer
│   └── chat_repository.dart # Handles all API communications
│
├── viewmodels/           # Business logic layer
│   └── chat_viewmodel.dart # Manages application state
│
├── views/                # Presentation layer
│   ├── chat_screen.dart  # Main chat interface
│   └── widgets/          # Reusable UI components
│       ├── message_bubble.dart # Custom chat bubbles
│       └── typing_indicator.dart # Animated typing indicator
│
└── main.dart            # Application entry point
```

## Loom Video
[Live Demo Link](https://www.loom.com/share/76bb546443084e0dacf9d3f98b34ef48)

## Download APK From Repository 
[⬇️ Download APK (20MB)](Dummy%20AI%hat%20App.apk)

## Direct Download APK
[⬇️ Download APK (20MB)](https://github.com/Hamid-Raza-22/dummy_ai_chat_app/blob/master/Dummy%20AI%20Chat%20App.apk)

## Contact
**Hamid Raza**  
📍 Senior Software Engineer (Flutter Specialist) (Tech Lead)

📧 **Email**: [hamidraza.engr@gmail.com](mailto:hamidraza.engr@gmail.com)  
📞 **Phone**: [+92 313 1489445](tel:+923131489445)  
🔗 **LinkedIn**: [Hamid Raza](https://www.linkedin.com/in/hamid-raza-a01780199)  
💻 **GitHub**: [@hamidraza-dev](https://github.com/Hamid-Raza-22) 

