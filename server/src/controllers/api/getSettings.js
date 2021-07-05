const axios = require('axios');

const config = require('./config');

module.exports = async (req, res) => {
  console.log('get settings')
  try {
    const response = await axios.get('/conf', config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
