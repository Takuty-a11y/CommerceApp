import ScaleImage from "components/atoms/ScaleImage";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import styled from "styled-components";

// 商品カードのコンテナ
const ProductCardContainer = styled.div`
  position: relative;
`;

// 商品カード画像のコンテナ
const ProductCardImageContainer = styled.div`
  z-index: 99;
`;

// 商品カードの情報
const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`;

interface ProductCardProps {
  /**
   * 商品タイトル
   */
  title: string;
  /**
   * 商品価格
   */
  price: number;
  /**
   * 商品のぼかし画像のデータURIスキーム
   */
  blurDataUrl?: string;
  /**
   * 商品画像URL
   */
  imageUrl: string;
  /**
   * バリアント（表示スタイル）
   */
  variant?: "detail" | "listing" | "small";
}

/**
 * 商品カード
 */
const ProductCard = (props: ProductCardProps) => {
  const { title, price, blurDataUrl, imageUrl, variant } = props;
  const { size, imgSize } = (() => {
    switch (variant) {
      case "detail":
        return { size: { base: "320px", md: "540px" }, imgSize: 540 };
      case "listing":
        return { size: { base: "160px", md: "240px" }, imgSize: 240 };
      default:
        return { size: { base: "160px" }, imgSize: 160 };
    }
  })();

  return (
    <ProductCardContainer>
      {variant != "small" && (
        <ProductCardInfo>
          <Box>
            <Text
              as="h2"
              fontSize={{ base: "small", md: "mediumLarge" }}
              letterSpacing={{ base: 2, md: 3 }}
              lineHeight={{ base: "32px", md: "48px" }}
              backgroundColor="white"
              margin={0}
              paddingRight={2}
              paddingLeft={2}
              paddingTop={0}
              paddingBottom={0}
            >
              {title}
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="inline-block"
              backgroundColor="white"
              fontSize={{ base: "extraSmall", md: "medium" }}
              lineHeight={{ base: "8px", md: "12px" }}
              letterSpacing={{ base: 2, md: 4 }}
              margin={0}
              padding={{ base: 1, md: 2 }}
            >
              {price}円
            </Text>
          </Box>
        </ProductCardInfo>
      )}
      <ProductCardImageContainer>
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
          />
        )}
      </ProductCardImageContainer>
      {variant === "small" && (
        <Box marginTop={1}>
          <Text as="h2" variant="medium" margin={0} padding={0}>
            {title}
          </Text>
          <Text as="span" variant="medium">
            {price}円
          </Text>
        </Box>
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;