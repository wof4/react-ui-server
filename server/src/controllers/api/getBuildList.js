const axios = require('axios');

const config = require('./config');

module.exports = async (req, res) => {
  console.log('build')
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 25;
    const response = await axios.get(
      `/build/list?offset=${offset}&limit=${limit}`,
      config
    );
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
};
