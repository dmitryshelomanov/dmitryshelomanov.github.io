import styled from "styled-components";
import IframeResizer from "iframe-resizer-react";
import { DefaultSidebar } from "../../features/common/sidebar";
import { MainTemplate } from "../../ui";
import { useSearchParams } from "react-router-dom";

const Frame = styled(IframeResizer)`
  border: none;
  width: 100%;
  height: 100%;
`;

export function FromGithubPage({ url }) {
  const [params] = useSearchParams();
  const hasParams = Array.from(params.values()).length > 0;
  const urlWithParams = hasParams ? `${url}?${params}` : url;

  return (
    <MainTemplate sidebar={<DefaultSidebar />} noPadding>
      <Frame src={urlWithParams} scrolling />
    </MainTemplate>
  );
}
