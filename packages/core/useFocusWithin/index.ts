import { computed, Ref } from 'vue-demi'
import { MaybeElementRef, unrefElement } from '../unrefElement'
import { useActiveElement } from '../useActiveElement'
import { ConfigurableWindow } from '../_configurable'
export interface FocusWithinReturn {
  /**
   * True if the element or any of its descendants are focused
   */
  focused: Ref<boolean>
}

/**
 * Track if focus is contained within the target element
 *
 * @see https://vueuse.org/useFocusWithin
 * @param target The target element to track
 * @param options Focus within options
 */
export function useFocusWithin(target: MaybeElementRef, options: ConfigurableWindow = {}): FocusWithinReturn {
  const activeElement = useActiveElement(options)
  const targetElement = computed(() => unrefElement(target))
  const focused = computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false)

  return { focused }
}
