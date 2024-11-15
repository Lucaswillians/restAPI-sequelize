const { where } = require('sequelize')
const dataSource = require('../models')

class Services {
  constructor(nameModel) {
    this.model = nameModel
  }

  async getAllRegisters () {
    return dataSource[this.model].findAll()
  }

  async getOneRegisterById(id) {
    return dataSource[this.model].findByPk(id)
  }

  async createRegister(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async updatedRegister (updatedData, id) {
    const updatedRegisterList = dataSource[this.model].update(updatedData, {
      where: { id: id }
    })
    if (updatedRegisterList[0] === 0) return false
    
    return true
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services