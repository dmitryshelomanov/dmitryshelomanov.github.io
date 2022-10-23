import styled from "styled-components";
import IframeResizer from "iframe-resizer-react";
import { DefaultSidebar } from "../../features/common/sidebar";
import { MainTemplate } from "../../ui";

const Frame = styled(IframeResizer)`
  border: none;
  width: 100%;
  height: 100%;
`;

export function FromGithubPage({ url }) {
  return (
    <MainTemplate sidebar={<DefaultSidebar />} noPadding>
      <Frame src={url} scrolling />
    </MainTemplate>
  );
}
