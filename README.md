
## Getting Started

This project is a starting point for a Flutter application.

# Dummy AI Chat App (MVVM Architecture)

A Flutter mobile application that allows users to  Dummy chat with an AI, built with MVVM architecture and a Node.js & Firebase backend.

## Features

- Clean MVVM architecture implementation
- Real-time chat interface with message bubbles
- Typing indicator animation
- Auto-scroll to latest message
- Error handling for API calls
- Local backend server integration

## Tech Stack

**Frontend:**
- Flutter (Dart)
- GetX (State Management)
- HTTP (API calls)

**Backend:**
- Firebase # in Functions Directory
- (Local) Node.js # in ai_chat_backend Directory

## Project Structure

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

## APK 
[⬇️ Download APK](Dummy%20AI%20Chat%20App.apk){:download="Dummy_AI_Chat_App.apk"}


## Developer Details
 Engr. Hamid Raza
 Software Engineer
 hamidraza.engr@gmail.com
 +923131489445