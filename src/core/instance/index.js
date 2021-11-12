import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue 构造函数
// 不用 class 目的：方便后续给 Vue 实例混入实例成员
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // _init
stateMixin(Vue) // $data、$props、$set、$delete、$watch
eventsMixin(Vue) // $on、$off、$once、$emit
lifecycleMixin(Vue) // Vue.prototype._update（调用__patch__）、Vue.prototype.$forceUpdate、Vue.prototype.$destroy（beforeDestroy、destroyed）
renderMixin(Vue) // installRenderHelpers、Vue.prototype.$nextTick、Vue.prototype._render（调用选项的render）

export default Vue
