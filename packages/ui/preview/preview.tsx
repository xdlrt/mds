export const Preview = ({ preview }: { preview: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: preview }}></div>;
};
