const developmentInstance = {
  DB: 'allChat',
  USER: 'root',
  PASSWORD: 'omkar',
  DIALECT: 'mysql',
  HOST: 'localhost',
  POOL: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
const productionInstance = {
  DB: 'allChat',
  USER: 'root',
  PASSWORD: 'omkar',
  DIALECT: 'mysql',
  HOST: 'localhost',
  POOL: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  development: developmentInstance,
  production: productionInstance,
};
