import 'jest-dom/extend-expect'
import { cleanup, render, waitForElement } from 'react-testing-library'
import { Title } from '../components/Title/Title'
import React from 'react'

describe('Title', () => {
  afterEach(cleanup)

  test('Return the text from props', async () => {
    const { getByTestId } = render(<Title title="Teste" />)
    const title = await waitForElement(() => getByTestId('title'))
    expect(title).toHaveTextContent('Teste')
  })

})
