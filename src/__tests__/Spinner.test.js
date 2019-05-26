import 'jest-dom/extend-expect'
import { cleanup, render, waitForElement } from 'react-testing-library'
import  Spinner  from '../components/Spinner/Spinner'
import React from 'react'

describe('Spinner', () => {
  afterEach(cleanup)

  test('Return the right src from img', async () => {
    const { getByTestId } = render(<Spinner />)
    const needle = await waitForElement(() => getByTestId('needle'))
    const vinyl = await waitForElement(() => getByTestId('vinyl'))

    expect(needle).toHaveAttribute('src', 'needle.svg')
    expect(vinyl).toHaveAttribute('src', 'vinyl.svg')
  })

})
