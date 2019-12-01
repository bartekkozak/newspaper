import React from 'react'
import { renderWithRedux as render } from '../../Utils/test/renderWithRedux'

import SortByDate from '../SortByDate'

describe('[Component] SortByDate', () => {
  it('It should render SortByDate component correctly', () => {
    const { getByTestId, getByText } = render(<SortByDate />)

    expect(getByTestId('sortByDate')).toBeDefined()
    expect(getByText('Sort by date')).toBeDefined()
    expect(getByText('▲')).toBeDefined()
    expect(getByText('▼')).toBeDefined()
  })
})
