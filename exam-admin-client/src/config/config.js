const config = {
  development: {
    BASE_API: 'http://127.0.0.1:4000'
  },
  production: {
    BASE_API: 'http://127.0.0.1:4000'
  },
  staging: {
    BASE_API: 'http://127.0.0.1:4000'
  },
  get(name) {
    return this[process.env.NODE_ENV][name];
  }
};

export default config;
