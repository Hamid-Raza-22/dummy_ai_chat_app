class ApiResponse {
  final String reply;

  ApiResponse({required this.reply});

  factory ApiResponse.fromJson(Map<String, dynamic> json) {
    return ApiResponse(
      reply: json['reply'] as String? ?? 'No response from server', // Handle null
    );
  }
}
