import express, { Request, Response } from 'express';
import * as admin from 'firebase-admin';
import { authMiddleware } from './middleware/auth.middleware';

admin.initializeApp();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3003;

app.get('/verify', authMiddleware, (req: Request, res: Response) => {
  res.json({
    success: true,
    data: { user: (req as any).user },
    correlationId: req.headers['x-correlation-id'] || 'n/a'
  });
});

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
