require('dotenv').config();
const http = require('http');
const url = require('url');
const { getAIResponse } = require('./utils/aiResponses');

const PORT = process.env.PORT || 3000;

// Helper to send JSON responses
const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

// Rate-limiting logic
const requestLimits = new Map(); // Tracks request timestamps by IP
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 100; // Max requests per window

const isRateLimited = (ip) => {
  const now = Date.now();
  if (!requestLimits.has(ip)) {
    requestLimits.set(ip, []);
  }

  const timestamps = requestLimits.get(ip).filter((time) => now - time < RATE_LIMIT_WINDOW);
  requestLimits.set(ip, timestamps);

  if (timestamps.length >= RATE_LIMIT_MAX) {
    return true;
  }

  timestamps.push(now);
  return false;
};

// Create HTTP server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Rate limiting check
  if (isRateLimited(ip)) {
    return sendResponse(res, 429, { success: false, error: 'Rate limit exceeded' });
  }

  if (req.method === 'POST' && parsedUrl.pathname === '/api/chat') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const { message } = JSON.parse(body);

        if (!message || typeof message !== 'string') {
          return sendResponse(res, 400, {
            success: false,
            error: 'Message must be a non-empty string',
          });
        }

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const reply = getAIResponse(message);

        sendResponse(res, 200, {
          success: true,
          data: {
            reply,
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        console.error('Chat error:', error);
        sendResponse(res, 500, {
          success: false,
          error: 'Internal server error',
        });
      }
    });

    return;
  }

  if (req.method === 'GET' && parsedUrl.pathname === '/api/health') {
    return sendResponse(res, 200, {
      status: 'OK',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    });
  }

  // Fallback for unknown routes
  sendResponse(res, 404, { success: false, error: 'Endpoint not found' });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});