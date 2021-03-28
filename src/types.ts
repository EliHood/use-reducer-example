import { ReactNode } from 'react'

export interface FormValues {
    [key: string]: string
}

export interface IFormContextType {
    state: FormValues
    dispatch: (data: FormValues) => void
}

export interface FormStoreType {
    children: ReactNode
    initValue: FormValues
}
