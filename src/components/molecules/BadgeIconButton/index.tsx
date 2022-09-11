import Badge from "components/atoms/Badge";
import React from "react";
import styled from "styled-components";

const BadgeIconButtonWrapper = styled.span<{ size: number | string }>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: -10px;
`

type BadgeIconButtonProps = {
  icon: React.ReactNode;
  badgeContent?: number;
  badgeBackgroundColor: string;
  size?: number | string;
};

/**
 * バッジ付きアイコンボタン
 */
const BadgeIconButton = (props: BadgeIconButtonProps) => {
  const { icon, badgeContent, badgeBackgroundColor, size = "24px" } = props;

  return (
    <BadgeIconButtonWrapper size={size}>
      {icon}
      <BadgeWrapper>
        <Badge
          content={`${badgeContent}`}
          backgroundColor={badgeBackgroundColor}
        />
      </BadgeWrapper>
    </BadgeIconButtonWrapper>
  );
};

export default BadgeIconButton;
