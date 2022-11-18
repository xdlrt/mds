export const Preview = ({ preview }: { preview: string }) => {
  return (
    <div className="flex items-center justify-center h-full overflow-y-auto break-all">
      <div className="h-full">
        <div
          className="p-4 shadow-2xl"
          style={{ width: 375 }}
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      </div>
    </div>
  );
};
