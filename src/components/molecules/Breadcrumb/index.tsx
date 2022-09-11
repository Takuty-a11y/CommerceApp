import React from "react";
import Flex from "components/layout/Flex";
import styled from "styled-components";

const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

interface BreadcrumbProps {
  children?: React.ReactNode;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { children } = props;
  return <BreadcrumbRoot as="ol">{children}</BreadcrumbRoot>;
};

export default Breadcrumb;
