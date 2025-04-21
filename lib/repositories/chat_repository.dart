import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_dotenv/flutter_dotenv.dart';
import '../models/api_response.dart';
import '../models/message.dart';

class ChatRepository {
  // Future<ApiResponse> sendMessage(Message message) async {
  //   try {
  //     final response = await http.post(
  //         Uri.parse(dotenv.env['API_URL']!),
  //       headers: {'Content-Type': 'application/json'},
  //       body: jsonEncode({'message': message.text}),
  //     );
  //
  //     if (response.statusCode == 200) {
  //       final json = jsonDecode(response.body) as Map<String, dynamic>;
  //       final data = json['data'] as Map<String, dynamic>; // Ensure this matches backend structure
  //       if (data['reply'] == null) {
  //         throw Exception('Server returned null reply');
  //       }
  //       return ApiResponse(reply: data['reply']);
  //     } else {
  //       throw Exception('Failed with status ${response.statusCode}');
  //     }
  //   } on http.ClientException catch (e) {
  //     throw Exception('Network error: $e');
  //   } on FormatException {
  //     throw Exception('Invalid server response format');
  //   }
  // }
  Future<ApiResponse> sendMessage(Message message) async {
    try {
      final response = await http.post(
                Uri.parse(dotenv.env['FIREBASE_API_URL']!),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'message': message.text}),
      );

      if (response.statusCode == 200) {
        final json = jsonDecode(response.body) as Map<String, dynamic>;

        // Directly access the reply field from the root JSON object
        if (json['reply'] == null) {
          throw Exception('Server returned null reply');
        }

        return ApiResponse(reply: json['reply'].toString());
      } else {
        throw Exception('Failed with status ${response.statusCode}: ${response.body}');
      }
    } on http.ClientException catch (e) {
      throw Exception('Network error: $e');
    } on FormatException {
      throw Exception('Invalid server response format');
    }
  }
}

