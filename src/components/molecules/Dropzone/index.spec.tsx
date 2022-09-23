import { fireEvent, render, RenderResult, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { theme } from "themes"
import Dropzone from "."

describe("Dropzone", () => {
  let handleDrop: jest.Mock
  let renderResult: RenderResult

  beforeEach(() => {
    handleDrop = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropzone onDrop={handleDrop} />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDropが呼ばれる', async () => {
    // ファイルをドロップする
    const element = await screen.findByTestId('dropzone')
    fireEvent.drop(element, {
      dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    })

    // ファイルが入力されたか確認
    expect(handleDrop).toHaveBeenCalledTimes(1)
  })
})