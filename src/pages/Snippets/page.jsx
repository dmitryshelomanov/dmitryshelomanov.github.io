import { Typography } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { DefaultSidebar } from "../../features/common/sidebar";
import { MainTemplate } from "../../ui";
import { fib, tasks, sort } from "./code";

export function SnippetsPage() {
  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title level={4} id="tasks">
        Задачи с собеседований
      </Typography.Title>
      <SyntaxHighlighter language="javascript">{tasks}</SyntaxHighlighter>

      <Typography.Title level={4} id="fib">
        Числа Фибоначи
      </Typography.Title>
      <SyntaxHighlighter language="javascript">{fib}</SyntaxHighlighter>

      <Typography.Title level={4} id="sort">
        Сортировки
      </Typography.Title>
      <SyntaxHighlighter language="javascript">{sort}</SyntaxHighlighter>
    </MainTemplate>
  );
}
