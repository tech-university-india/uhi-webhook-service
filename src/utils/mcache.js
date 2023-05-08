const cache = require('memory-cache');

const setCache = (key, value, duration) => {
  cache.put(key, value, duration);
};

const getCache = key => {
  return cache.get(key);
};

module.exports = {setCache, getCache};
