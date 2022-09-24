import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  let handleClick: jest.Mock
  let renderResult: RenderResult

  beforeEach(() => {
    handleClick = jest.fn()
    renderResult = render(
      <Button variant="primary" onClick={handleClick}>
        Button
      </Button>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ボタンを押した時にonClickが呼ばれる', () => {
    // ボタンがクリックされたかどうか
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
