import 'package:get/get.dart';
import '../models/message.dart';
import '../repositories/chat_repository.dart';

class ChatViewModel extends GetxController {
  final ChatRepository _repository = ChatRepository();
  var messages = <Message>[].obs; // Observable list
  var isLoading = false.obs; // Observable boolean

  Future<void> sendMessage(String text) async {
    if (text.isEmpty || isLoading.value) return;

    // Add user message
    messages.add(Message(text: text, isUser: true));

    try {
      isLoading(true);
      final response = await _repository.sendMessage(Message(text: text, isUser: true));
      messages.add(Message(text: response.reply, isUser: false));
    } catch (e) {
      messages.add(Message(text: 'Error: ${e.toString()}', isUser: false));
    } finally {
      isLoading(false);
    }
  }
}