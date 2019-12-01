import React from 'react'
import { render } from '@testing-library/react'
import ErrorMessage from '../ErrorMessage'

describe('[Component] ErrorMessage', () => {
  const getProps = (loading?: boolean) =>
    ({
      category: 'fashion',
      onClick: jest.fn(),
      loading: loading || false,
    } as any)

  it('It should render ErrorMessage component correctly', () => {
    const { getByTestId, getByText } = render(<ErrorMessage {...getProps()} />)
    expect(getByTestId('errorMessage')).toBeDefined()
    expect(getByText('Try again')).toBeDefined()
    expect(getByText(`Couldn't get fashion news from server`)).toBeDefined()
  })

  it('It should not render try again button', () => {
    const { getByText } = render(<ErrorMessage {...getProps(true)} />)
    expect(getByText('Loading...')).toBeDefined()
  })
})
