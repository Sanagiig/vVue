import config from '../../config'

import {
  warn,
  isObject,
  toObject,
  isReservedAttribute,
  camelize
} from '../../util/index'

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
export function bindObjectProps (
  this:any,
  data: any,
  tag: string,
  value: any,
  asProp: boolean,
  isSync?: boolean
): VNodeData {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      )
    } else {
      if (Array.isArray(value)) {
        value = toObject(value)
      }
      let hash
      for (const key in value) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data
        } else {
          const type = data.attrs && data.attrs.type
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {})
        }
        const camelizedKey = camelize(key)
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key]

          if (isSync) {
            const on = data.on || (data.on = {})
            on[`update:${camelizedKey}`] = function ($event:any) {
              value[key] = $event
            }
          }
        }
      }
    }
  }
  return data
}
