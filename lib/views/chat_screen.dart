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
      appBar: AppBar(
        title: const Center(child: Text('Dummy AI Chat App')),
      ),
      body: Column(
        children: [
          Expanded(
            child: Obx(() {
              // Auto-scroll when new messages arrive or typing starts
              WidgetsBinding.instance.addPostFrameCallback((_) {
                if (scrollController.hasClients) {
                  scrollController.animateTo(
                    scrollController.position.maxScrollExtent,
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.easeOut,
                  );
                }
              });

              return ListView.builder(
                controller: scrollController,
                itemCount: viewModel.messages.length +
                    (viewModel.isLoading.value ? 1 : 0),
                itemBuilder: (ctx, index) {
                  // Show typing indicator as the last item when loading
                  if (viewModel.isLoading.value &&
                      index == viewModel.messages.length) {
                    return const Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: EdgeInsets.symmetric(
                          vertical: 4,
                          horizontal: 8,
                        ),
                        child: TypingIndicator(),
                      ),
                    );
                  }

                  final message = viewModel.messages[index];
                  return MessageBubble(
                    text: message.text,
                    isUser: message.isUser,
                  );
                },
              );
            }),
          ),
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
                    onSubmitted: (_) => _sendMessage(viewModel, textController),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.send),
                  onPressed: () => _sendMessage(viewModel, textController),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  void _sendMessage(ChatViewModel viewModel, TextEditingController controller) {
    final text = controller.text.trim();
    if (text.isNotEmpty) {
      viewModel.sendMessage(text);
      controller.clear();
    }
  }
}