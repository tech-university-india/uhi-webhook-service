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
  '/v0.5/health-information/hip/request': {
    topic: 'consent'
  },
  '/v0.5/consent-requests/on-init': {
    topic: 'consent'
  },
  '/v0.5/consents/hiu/notify': {
    topic: 'consent'
  },
  '/v0.5/consents/on-fetch': {
    topic: 'consent'
  },
  '/v0.5/links/link/on-add-contexts': {
    topic: 'careContext'
  },
  '/v0.5/patients/sms/on-notify': {
    topic: 'careContex'
  },
  '/v0.5/care-contexts/discover': {
    topic: 'careContex'
  },
  '/v0.5/links/link/init': {
    topic: 'careContex'
  },
  '/v0.5/links/link/confirm': {
    topic: 'careContex'
  }
}

const allTopics = ['auth', 'consent', 'careContext']

module.exports = { config, allTopics }
