import express from 'express';
const router = express.Router();

router.get('/health', (req, res) => {
  res.send(`<h1>Everything looks fine ... ${new Date().toLocaleTimeString()}</h1>`);
});

export default router;
