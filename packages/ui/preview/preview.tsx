export const Preview = ({ preview }: { preview: string }) => {
  return (
    <div className="flex items-center justify-center h-full overflow-y-auto break-all">
      <div
        className="px-4 shadow-2xl h-full"
        style={{ width: 375 }}
        dangerouslySetInnerHTML={{ __html: preview }}
      ></div>
    </div>
  );
};
