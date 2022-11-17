import { ChangeEventHandler } from "react";

export const MarkdownEditor = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLAreaElement>;
}) => {
  return <textarea onChange={onChange}></textarea>;
};
