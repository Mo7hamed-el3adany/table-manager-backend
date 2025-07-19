const Record = require('../models/record.model');

exports.getAll = async (_, res) => {
  const records = await Record.find();
  res.json(records);
};

exports.create = async (req, res) => {
  const { item, status, remark } = req.body;
  if (!item || !status) return res.status(400).json({ message: 'Missing fields' });

  const record = new Record({
    item,
    status,
    remark,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : undefined,
  });
  await record.save();
  res.status(201).json(record);
};

exports.update = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!record) return res.status(404).json({ message: 'Record not found' });
  res.json(record);
};

exports.remove = async (req, res) => {
  const record = await Record.findByIdAndDelete(req.params.id);
  if (!record) return res.status(404).json({ message: 'Not found' });
  res.sendStatus(204);
};

exports.uploadImage = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
};
