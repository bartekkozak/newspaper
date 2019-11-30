import React from 'react'
import { renderWithRedux as render } from '../../Utils/test/renderWithRedux'

import News from '../News'

describe('[Component] News', () => {
  it('It should render news component correctly', () => {
    const { getByTestId } = render(<News />)
    expect(getByTestId('news')).toBeDefined()
  })
})
