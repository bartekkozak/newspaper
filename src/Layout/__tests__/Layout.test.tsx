import React from 'react'
import { renderWithRedux as render } from '../../Utils/test/renderWithRedux'

import Layout from '../Layout'

describe('[Component] Layout', () => {
  it('It should render Layout component correctly', () => {
    const { getByTestId, getByText } = render(<Layout />)

    expect(getByTestId('layout')).toBeDefined()
    expect(getByTestId('sortByDate')).toBeDefined()
    expect(getByTestId('filterBar')).toBeDefined()
    expect(getByTestId('news')).toBeDefined()
  })
})
