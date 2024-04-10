const patronRepository = require('../repositories/patronRepository');

async function getAllPatrons() {
  return await patronRepository.getAllPatrons();
}

async function getPatronById(id) {
  return await patronRepository.getPatronById(id);
}

async function addPatron(patronData) {
  if (!patronData.name) {
    throw new Error('Name is required.');
  }
  return await patronRepository.addPatron(patronData);
}

async function updatePatron(id, patronData) {
  if (!patronData.name) {
    throw new Error('Name is required.');
  }
  return await patronRepository.updatePatron(id, patronData);
}

async function deletePatron(id) {
  return await patronRepository.deletePatron(id);
}

module.exports = {
  getAllPatrons,
  getPatronById,
  addPatron,
  updatePatron,
  deletePatron
};
