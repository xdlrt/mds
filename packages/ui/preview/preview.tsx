export const Preview = ({ preview }) => {
  return <div dangerouslySetInnerHTML={{ __html: preview }}></div>;
};
