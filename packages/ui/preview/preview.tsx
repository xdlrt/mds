export const Preview = ({ preview }: { preview: string }) => {
  if (!preview)
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        这里空空如也
      </div>
    );
  return (
    <div className="flex items-center justify-center h-full overflow-y-auto break-all">
      <div className="h-full">
        <div
          id="preview"
          className="p-4 shadow-2xl min-h-full"
          style={{ width: 375 }}
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      </div>
    </div>
  );
};
