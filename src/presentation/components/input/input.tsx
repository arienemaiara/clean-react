/* eslint-disable @typescript-eslint/indent */
import React, { useContext } from 'react'

import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form-context'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)

  const error = errorState[props.name]

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span
        title={getTitle()}
        className={Styles.status}
        data-testid={`${props.name}-status`}
      >
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
