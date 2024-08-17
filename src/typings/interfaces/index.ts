import type { ComputedRef, Ref } from 'vue'
import type { DataType } from '../types'

export interface IBaseButtonProps {
  label?: string
  width?: string
  reverse: boolean
}

export interface IDataViewProps {
  description: string
  type: DataType
  value: number | null
}

export interface IDataViewItemProps extends IDataViewProps {
  id: number
}

export type INewDataViewItemProps = Omit<IDataViewProps, 'id'>

export interface IDataProviderProps {
  data: Ref<Array<IDataViewProps>>
  updateData(newData: IDataViewProps): void
  deleteItem(id: number): void
  total: ComputedRef<number>
}
