const config = {
  '/v0.5/users/auth/on-fetch-modes': {
    topic: 'auth'
  },
  '/v0.5/users/auth/on-init': {
    topic: 'auth'
  },
  '/v0.5/users/auth/on-confirm': {
    topic: 'auth'
  },
  '/v0.5/consents/hip/notify': {
    topic: 'consent'
  }
}

const allTopics = ['auth', 'consent']

module.exports = { config, allTopics }
