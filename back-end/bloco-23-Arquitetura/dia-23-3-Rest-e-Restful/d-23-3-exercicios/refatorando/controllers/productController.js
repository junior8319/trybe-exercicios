const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.exclude(id);

  res.status(204).json(products);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const products = await ProductModel.update(id, name, brand);

  res.status(202).json(products);
});

module.exports = router;