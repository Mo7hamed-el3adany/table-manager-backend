const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const upload = require('../middleware/upload.middleware');

const {
  getAll,
  create,
  update,
  remove,
  uploadImage,
} = require('../controllers/record.controller');

router.use(auth);

router.get('/records', getAll);
router.post('/records', upload.single('image'), create);
router.put('/records/:id', update);
router.delete('/records/:id', remove);
router.post('/upload', upload.single('image'), uploadImage);

module.exports = router;
