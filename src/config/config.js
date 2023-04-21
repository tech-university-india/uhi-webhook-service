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
  },
  '/v0.5/links/link/on-add-contexts':{
    topic: 'careContext'
  }
}

const allTopics = ['auth', 'consent','careContext']

module.exports = { config, allTopics }
