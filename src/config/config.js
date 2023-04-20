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
  '/health-information/hip/request': {
    topic: 'consent'
  },
  '/consent-requests/on-init': {
    topic: 'consent'
  },
  '/consents/hiu/notify': {
    topic: 'consent'
  },
  '/consents/on-fetch': {
    topic: 'consent'
  },
  '/links/link/on-add-contexts': {
    topic: 'consent'
  },
  '/patients/status/on-notify': {
    topic: 'consent'
  },
  '/care-contexts/discover': {
    topic: 'consent'
  },
  '/links/link/init': {
    topic: 'consent'
  },
  '/links/link/confirm': {
    topic: 'consent'
  }
}

const allTopics = ['auth', 'consent']

module.exports = { config, allTopics }
