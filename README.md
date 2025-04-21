
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
├── models/ # Data models
├── repositories/ # Data layer
├── viewmodels/ # Business logic
├── views/ # UI components
└── main.dart # App entry point

## Project Structure in Details

lib/
├── models/
│   ├── message.dart
│   └── api_response.dart
├── repositories/
│   └── chat_repository.dart
├── viewmodels/
│   └── chat_viewmodel.dart
├── views/
│   ├── chat_screen.dart
│   └── widgets/
│       ├── message_bubble.dart
│       └── typing_indicator.dart
└── main.dart

## APK
[Dummy AI Chat App.apk](build/app/outputs/flutter-apk/Dummy%20AI%20Chat%20App.apk)