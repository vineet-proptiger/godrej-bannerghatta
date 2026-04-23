let _geoPromise = null
export function getGeo() {
  if (!_geoPromise) {
    _geoPromise = fetch('/api/geo').then(r => r.json()).catch(() => null)
  }
  return _geoPromise
}

export function getParam(name) {
  if (typeof window === 'undefined') return ''
  return new URLSearchParams(window.location.search).get(name) || ''
}

import { BLOCKED_GCLIDS } from './config'

export function isGclidBlocked() {
  if (typeof window === 'undefined') return false
  const gclid = getParam('gclid')
  if (!gclid) return false
  if (BLOCKED_GCLIDS.includes(gclid)) return true
  try {
    const list = JSON.parse(localStorage.getItem('_submitted_gclids') || '[]')
    return list.includes(gclid)
  } catch { return false }
}

export function saveGclid() {
  if (typeof window === 'undefined') return
  const gclid = getParam('gclid')
  if (!gclid) return
  try {
    const list = JSON.parse(localStorage.getItem('_submitted_gclids') || '[]')
    if (!list.includes(gclid)) {
      list.push(gclid)
      localStorage.setItem('_submitted_gclids', JSON.stringify(list))
    }
  } catch {}
}

export function buildTrackingFields(ipAddress, geoAddress) {
  return {
    utm_source:    getParam('utm_source'),
    utm_medium:    getParam('utm_medium'),
    utm_campaign:  getParam('utm_campaign'),
    utm_term:      getParam('utm_term'),
    utm_content:   getParam('utm_content'),
    campaign_name: getParam('campaign_name'),
    adgroup_name:  getParam('adgroup_name'),
    gclid:         getParam('gclid'),
    gbraid:        getParam('gbraid'),
    wbraid:        getParam('wbraid'),
    SourceURL:     typeof window !== 'undefined' ? window.location.href : '',
    landing_page:  typeof window !== 'undefined' ? window.location.href : '',
    referrer:      typeof document !== 'undefined' ? document.referrer : '',
    device:        typeof window !== 'undefined' ? (window.innerWidth < 768 ? 'mobile' : 'desktop') : '',
    ip_address:    ipAddress || '',
    geo_city:      geoAddress?.city        || '',
    geo_region:    geoAddress?.region      || '',
    geo_postal:    geoAddress?.postal_code || '',
    geo_country:   geoAddress?.country     || '',
  }
}
