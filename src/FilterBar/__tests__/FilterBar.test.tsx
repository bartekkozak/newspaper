import React from 'react'
import { renderWithRedux as render } from '../../Utils/test/renderWithRedux'

import FilterBar from '../FilterBar'

describe('[Component] FilterBar', () => {
  it('It should render FilterBar component correctly', () => {
    const { getByTestId, getByText } = render(<FilterBar />)

    expect(getByTestId('filterBar')).toBeDefined()
    expect(getByText('fashion')).toBeDefined()
    expect(getByText('sport')).toBeDefined()
    expect(getByText('Data sources')).toBeDefined()
  })
})
