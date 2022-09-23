import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "themes";
import ProductForm from ".";

describe("ProductForm", () => {
  let handleProductSave: jest.Mock;
  let renderResult: RenderResult;
  // スタブ
  global.URL.createObjectURL = () => "https://test.com";

  beforeEach(() => {
    handleProductSave = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <ProductForm onProductSave={handleProductSave} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("フォーム入力後、onProductSaveが呼ばれる", async () => {
    // DOMが更新される事を保証、React Hook FormのhandleSubmitが呼ばれるまで待つ
    await act(async () => {
      // 商品画像を入力
      const element = await screen.findByTestId("dropzone");
      fireEvent.drop(element, {
        dataTransfer: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      });

      // 商品のタイトルを入力
      const inputUsernameNode = screen.getByPlaceholderText(
        /商品のタイトル/
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: "商品" } });

      // 商品情報を入力
      const inputPasswordNode = screen.getByPlaceholderText(
        /最高の商品です/
      ) as HTMLInputElement;
      fireEvent.change(inputPasswordNode, {
        target: { value: "テストテスト" },
      });

      // 価格を入力
      const inputPriceNode = screen.getByPlaceholderText(
        /100/
      ) as HTMLInputElement;
      fireEvent.change(inputPriceNode, { target: { value: "100" } });

      // 出品ボタンをクリック
      fireEvent.click(screen.getByText("出品"));
    });

    // handleProductSaveが呼ばれていることを確認
    expect(handleProductSave).toHaveBeenCalledTimes(1);
  });

  it("商品タイトル入力だけでは、バリデーションエラーでonProductSaveが呼ばれない", async () => {
    // DOMが更新される事を保証、React Hook FormのhandleSubmitが呼ばれるまで待つ
    await act(async () => {
      // 商品のタイトルを入力
      const inputUsernameNode = screen.getByPlaceholderText(
        /商品のタイトル/
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: "商品" } });

      // 出品ボタンをクリック
      fireEvent.click(screen.getByText("出品"));
    });

    // handleProductSaveが呼ばれていないことを確認
    expect(handleProductSave).toHaveBeenCalledTimes(0);
  });
});
