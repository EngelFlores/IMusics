import 'jest-dom/extend-expect'
import { cleanup, render, waitForElement } from 'react-testing-library'
import PageContainer from '../components/PageContainer/PageContainer'
import { Title } from '../components/Title/Title'
import React from 'react'

describe('Spinner', () => {
  afterEach(cleanup)

  test('Return spinner when loaded is true', async () => {
    const { getByTestId } = render(<PageContainer loaded={true} />)
    const pageContainer = await waitForElement(() => getByTestId('pageContainer'))

    expect(pageContainer).toMatchSnapshot()
  })

  test('Return children when loaded is false', async () => {
    const { getByTestId } = render(<PageContainer loaded={false} children={Title}/>)
    const pageContainer = await waitForElement(() => getByTestId('pageContainer'))

    expect(pageContainer).toMatchSnapshot()
  })

})
