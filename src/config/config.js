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
    topic: 'fhir'
  },
  '/v0.5/consent-requests/on-init': {
    topic: 'consentRequest'
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
    topic: 'careContext'
  },
  '/v0.5/care-contexts/discover': {
    topic: 'careContext'
  },
  '/v0.5/links/link/init': {
    topic: 'careContext'
  },
  '/links/link/confirm': {
    topic: 'consent'
  },
  '/v0.5/links/link/confirm': {
    topic: 'careContext'
  },
  '/v0.5/health-information/hiu/on-request': {
    topic: 'healthInformation'
  },
  '/v1.0/patients/profile/share': {
    topic: 'share'
  }
}
const allTopics = ['auth', 'consent', 'careContext', 'share', 'consentRequest', 'healthInformation', 'fhir']

module.exports = { config, allTopics }
