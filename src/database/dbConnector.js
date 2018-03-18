const knex = require('knex');

class Connector {
  constructor(options) {
    this.options = options;
  }

  getWaterPrice() {
    return Promise.resolve(knex(this.options)
      .select('name','price')
      .from('prices')
      .where({code: 'hot'})
      .orWhere({code: 'cold'})
      .then(data => {
        return data;
      })
    );
  }

  getElectricityPrice() {
    return Promise.resolve(knex(this.options)
      .select('name','price')
      .from('prices')
      .where({code: 'el'})
      .orWhere({code: 't1'})
      .orWhere({code: 't2'})
      .then(data => {
        return data;
      })
    );
  }

  getMeterType(tableName) {
    return Promise.resolve(knex(this.options).select('id', 'description').from(tableName)
      .then(rows => {
        return data;
      })
    );
  }

  createHouse(name, address, waterType, electricityType) {
    return Promise.resolve(knex(this.options)('houses')
      .insert({
        "name": name,
        "address": address,
        "water_meter_type": waterType,
        "electricity_meter_type": electricityType
      })
    );
  }

  addData(houseId, waterHot, waterCold, electricity, dateNext, notifyDate, price, actualPrice, debt) {
    const recordDate = new Date().toLocaleDateString();
    return Promise.resolve(knex(this.options)('readings')
      .insert({
        "house_id": houseId,
        "water_meter_hot": waterHot,
        "water_meter_cold": waterCold,
        "electricity_meter": electricity,
        "date_record": recordDate,
        "date_next_record": dateNext,
        "notify_date": notifyDate,
        "price": price,
        "actual_price": actualPrice,
        "debt": debt
      })
      .then(rows => {
        return rows;
      })
    );
  }

}

module.exports = Connector;