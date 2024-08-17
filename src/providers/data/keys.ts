import type { IDataProviderProps } from '@/typings/interfaces'
import type { InjectionKey } from 'vue'

export const dataInjectionKey = Symbol() as InjectionKey<IDataProviderProps>
