import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    req.headers['x-correlation-id'] = Math.random().toString(36).substring(7);
    next();
});

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
