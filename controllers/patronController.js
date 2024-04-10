const patronService = require('../services/patronService');

async function getAllPatrons(req, res) {
  try {
    const patrons = await patronService.getAllPatrons();
    res.json(patrons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getPatronById(req, res) {
  const { id } = req.params;
  try {
    const patron = await patronService.getPatronById(id);
    if (!patron) {
      return res.status(404).json({ message: 'Patron not found' });
    }
    res.json(patron);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addPatron(req, res) {
  const patronData = req.body;
  try {
    const newPatron = await patronService.addPatron(patronData);
    res.status(201).json(newPatron);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updatePatron(req, res) {
  const { id } = req.params;
  const patronData = req.body;
  try {
    const updatedPatron = await patronService.updatePatron(id, patronData);
    if (!updatedPatron) {
      return res.status(404).json({ message: 'Patron not found' });
    }
    res.json(updatedPatron);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deletePatron(req, res) {
  const { id } = req.params;
  try {
    const deletedPatron = await patronService.deletePatron(id);
    if (!deletedPatron) {
      return res.status(404).json({ message: 'Patron not found' });
    }
    res.json({ message: 'Patron deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllPatrons,
  getPatronById,
  addPatron,
  updatePatron,
  deletePatron
};
