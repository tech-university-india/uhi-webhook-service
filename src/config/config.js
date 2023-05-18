const config = {
  '/v0.5/users/auth/on-fetch-modes': {
    topic: 'auth',
  },
  '/v0.5/users/auth/on-init': {
    topic: 'auth',
  },
  '/v0.5/users/auth/on-confirm': {
    topic: 'auth',
  },
  '/v0.5/consents/hip/notify': {
    topic: 'hip-consent-notify',
  },
  '/v0.5/health-information/hip/request': {
    topic: 'send-data-to-hiu',
  },
  '/v0.5/consent-requests/on-init': {
    topic: 'consentRequest',
  },
  '/v0.5/consents/hiu/notify': {
    topic: 'hiu-consent-artifacts',
  },
  '/v0.5/consents/on-fetch': {
    topic: 'hiu-fetch-server-status',
  },
  '/v0.5/links/link/on-add-contexts': {
    topic: 'careContext',
  },
  '/v0.5/patients/sms/on-notify': {
    topic: 'careContext',
  },
  '/v0.5/care-contexts/discover': {
    topic: 'careContext',
  },
  '/v0.5/links/link/init': {
    topic: 'careContext',
  },
  '/links/link/confirm': {
    topic: 'consent',
  },
  '/v0.5/links/link/confirm': {
    topic: 'careContext',
  },
  '/v0.5/health-information/hiu/on-request': {
    topic: 'hiu-health-information-request',
  },
  '/v1.0/patients/profile/share': {
    topic: 'share',
  },

  '/v1.0/health-information/data-push': {
    topic: 'hiu-data-push',
  },
  '/v0.5/consent-requests/on-status': {
    topic: 'consentRequestStatus',
  },
};
const allTopics = Array.from(
  new Set(Object.values(config).map(info => info.topic))
);
module.exports = {config, allTopics};
