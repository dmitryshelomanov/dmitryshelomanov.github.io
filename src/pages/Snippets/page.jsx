import { Typography } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { DefaultSidebar } from "../../features/common/sidebar";
import { MainTemplate } from "../../ui";

export function SnippetsPage({ snipet }) {
  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title level={4} id={snipet.id}>
        {snipet.title}
      </Typography.Title>
      <SyntaxHighlighter language="javascript">{snipet.code}</SyntaxHighlighter>
    </MainTemplate>
  );
}
