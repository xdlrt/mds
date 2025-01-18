export const RednotePreview = ({ previews }: { previews: string[] }) => {
  if (!previews.length)
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        There is nothing here.
      </div>
    );
  return (
    <div className="preview-wrap flex items-center justify-center break-all flex-col">
      {previews.map((preview, i) => (
        <div
          key={i}
          className="mt-4 p-4 flex justify-center flex-col"
          style={{ width: 300, height: 400 }}
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      ))}
    </div>
  );
};
