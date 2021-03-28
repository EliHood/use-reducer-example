import React, { FC } from 'react'
import { FormStoreType } from '../types'
import { FormStore } from './FormContext'

const FormProvider: FC<FormStoreType> = ({ children, ...props }) => (
    <FormStore {...props}>{children}</FormStore>
)

export default FormProvider
