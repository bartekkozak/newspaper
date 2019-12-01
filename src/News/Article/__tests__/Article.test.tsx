import React from 'react'
import { render } from '@testing-library/react'
import Article from '../Article'

describe('[Component] Article', () => {
  const getProps = () =>
    ({
      image: 'image.png',
      title: 'Title test',
      date: 1549321200000,
    } as any)

  it('It should render Article component correctly', () => {
    const { getByTestId, getByText } = render(<Article article={getProps()} />)
    expect(getByTestId('article')).toBeDefined()
    expect(getByText('Title test')).toBeDefined()
    expect(getByText('4. Mar 2019')).toBeDefined()
  })
})
