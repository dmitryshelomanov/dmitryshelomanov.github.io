import { useLingui } from "@lingui/react";
import { Typography } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { DefaultSidebar } from "../../features/common/sidebar";
import { MainTemplate } from "../../ui";

export function SnippetsPage({ snipet }) {
  const { i18n } = useLingui();

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title level={4} id={snipet.id}>
        {i18n._(snipet.title)}
      </Typography.Title>
      <SyntaxHighlighter language="javascript">{snipet.code}</SyntaxHighlighter>
    </MainTemplate>
  );
}
