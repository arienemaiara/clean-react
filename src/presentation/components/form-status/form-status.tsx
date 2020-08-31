import React, { useContext } from 'react'

import Styles from './form-status-styles.scss'

import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/contexts/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, errorMessage } = state
  return (
    <div className={Styles.loadWrap} data-testid="error-wrap">
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
