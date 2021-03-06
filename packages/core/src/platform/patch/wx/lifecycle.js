import { CREATED, MOUNTED, UPDATED } from '../../../core/innerLifecycle'
const APP_HOOKS = [
  'onLaunch',
  'onShow',
  'onHide',
  'onError',
  'onPageNotFound'
]

const PAGE_HOOKS = [
  'onLoad',
  'onReady',
  'onShow',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onPageScroll',
  'onTabItemTap',
  'onResize'
]

const COMPONENT_HOOKS = [
  'created',
  'attached',
  'ready',
  'moved',
  'detached',
  'pageShow',
  'pageHide',
  'updated'
]

export const lifecycleProxyMap = {
  [CREATED]: ['created'],
  [MOUNTED]: ['ready', 'onReady'],
  [UPDATED]: ['updated']
}

export const LIFECYCLE = {
  APP_HOOKS,
  PAGE_HOOKS,
  COMPONENT_HOOKS
}
