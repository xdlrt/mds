import { ChangeEventHandler } from "react";

export const MarkdownEditor = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return <textarea onChange={onChange}></textarea>;
};
