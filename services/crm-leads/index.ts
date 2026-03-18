import express from 'express';
import { z } from 'zod';
import { LeadSchema, ErrorResponseSchema } from '../../shared/types/lead';

const app = express();
app.use(express.json());

const leads = []; // Simulación de DB para este ejemplo

app.post('/leads', (req, res) => {
  try {
    const validatedData = LeadSchema.parse(req.body);
    leads.push(validatedData);
    res.status(201).json(validatedData);
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).json({ error: "Validation failed", code: "VALIDATION_ERROR", details: err.errors });
    } else {
      res.status(500).json({ error: "Internal Server Error", code: "INTERNAL_ERROR" });
    }
  }
});

app.listen(4003, () => console.log('Leads service running on 4003'));
