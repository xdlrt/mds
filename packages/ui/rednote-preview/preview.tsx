export const RednotePreview = ({ previews }: { previews: string[] }) => {
  if (!previews.length)
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        这里空空如也
      </div>
    );
  return (
    <div className="preview-wrap flex items-center justify-center break-all flex-col">
      {previews.map((preview, i) => (
        <div
          key={i}
          className="p-4 shadow-2xl flex justify-center flex-col"
          style={{ width: 300, height: 400 }}
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      ))}
    </div>
  );
};
