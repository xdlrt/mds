export const RednotePreview = ({ previews }: { previews: string[] }) => {
  if (!previews.length)
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        There is nothing here.
      </div>
    );
  return (
    <div className="preview-wrap flex items-center justify-center break-all flex-col bg-amber-50">
      {previews.map((preview, i) => (
        <div className="border-solid border border-gray-200 mt-4 last:mb-4">
          <div key={i} className="preview-card bg-white">
            <div
              className="p-4 flex justify-center flex-col"
              style={{ width: 300, height: 372 }}
              dangerouslySetInnerHTML={{ __html: preview }}
            ></div>
            <div
              className="preview-card-footer text-xs border-t border-gray-200 border-opacity-50 px-4 flex items-center justify-end"
              style={{
                height: 28,
                color: "#aeaeae",
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <span>
                {i + 1}
                <span className="mx-px">/</span>
                {previews.length}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
