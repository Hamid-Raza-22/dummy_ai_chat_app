import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../viewmodels/chat_viewmodel.dart';
import 'widgets/message_bubble.dart';
import 'widgets/typing_indicator.dart';

class ChatScreen extends StatelessWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final ChatViewModel viewModel = Get.put(ChatViewModel());
    final textController = TextEditingController();
    final scrollController = ScrollController();

    return Scaffold(
      appBar: AppBar(title: Center(child: const Text('Dummy AI Chat App'))),
      body: Column(
        children: [
          Expanded(
            child: Obx(() => ListView.builder(
              controller: scrollController,
              itemCount: viewModel.messages.length,
              itemBuilder: (ctx, index) {
                final message = viewModel.messages[index];
                return MessageBubble(
                  text: message.text,
                  isUser: message.isUser,
                );
              },
            )),
          ),
          Obx(() => viewModel.isLoading.value
              ? const TypingIndicator()
              : const SizedBox.shrink()),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: textController,
                    decoration: const InputDecoration(
                      hintText: 'Type a message...',
                      border: OutlineInputBorder(),
                    ),
                    onSubmitted: (_) {
                      viewModel.sendMessage(textController.text);
                      textController.clear();
                    },
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.send),
                  onPressed: () {
                    viewModel.sendMessage(textController.text);
                    textController.clear();
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}