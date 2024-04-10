const Patron = require('../models/Patron');

async function getAllPatrons() {
  return await Patron.find();
}

async function getPatronById(id) {
  return await Patron.findById(id);
}

async function addPatron(patronData) {
  return await Patron.create(patronData);
}

async function updatePatron(id, patronData) {
  return await Patron.findByIdAndUpdate(id, patronData, { new: true });
}

async function deletePatron(id) {
  return await Patron.findByIdAndDelete(id);
}

module.exports = {
  getAllPatrons,
  getPatronById,
  addPatron,
  updatePatron,
  deletePatron
};
