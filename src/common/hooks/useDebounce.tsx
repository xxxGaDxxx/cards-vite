import { useEffect, useState } from 'react'

const DEFAULT_DELAY = 500

type UseDebounceProps<T> = {
  value: T
  delay?: number
}

export const useDebounce = <T extends unknown>({
  value,
  delay = DEFAULT_DELAY,
}: UseDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
