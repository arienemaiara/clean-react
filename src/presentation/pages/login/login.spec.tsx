import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Login from './login'

type SutType = {
  sut: RenderResult
}

const makeSut = (): SutType => {
  const sut = render(<Login />)
  return {
    sut
  }
}

describe('Login Component', () => {
  test('Should not render form status', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  test('Should not enable submit button on start', () => {
    const { sut } = makeSut()
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  test('Should render default status on e-mail and password', () => {
    const { sut } = makeSut()
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})
