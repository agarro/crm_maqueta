const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const SERVICES = {
  AUTH: 'http://crm-auth-service:4001',
  AI: 'http://crm-ai-service:4002',
  LEADS: 'http://crm-leads:4003',
};

app.use('/api/auth', createProxyMiddleware({ target: SERVICES.AUTH, changeOrigin: true }));
app.use('/api/ai', createProxyMiddleware({ target: SERVICES.AI, changeOrigin: true }));
app.use('/api/leads', createProxyMiddleware({ target: SERVICES.LEADS, changeOrigin: true }));

app.listen(3000, () => console.log('Gateway running on port 3000'));
