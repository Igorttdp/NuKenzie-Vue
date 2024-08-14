import type { DataType } from '../types'

export interface IBaseButtonProps {
  label?: string
  width?: string
  reverse: boolean
}

export interface IDataViewItemProps {
  description: string
  type: DataType
  value: number | null
}
