import html2canvas from "html2canvas";

export const RednoteHeader = () => {
  const handleDownloadImages = async () => {
    const previewElements = document.querySelectorAll(".preview-wrap > div");

    for (let i = 0; i < previewElements.length; i++) {
      const element = previewElements[i] as HTMLElement;

      const canvas = await html2canvas(element, {
        scale: 3,
      });

      const link = document.createElement("a");
      link.download = `preview-${i + 1}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Rednote Markdown Converter
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              {`A highly concise Rednote Markdown editor! 🎉`}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
              type="button"
              onClick={handleDownloadImages}
            >
              Download images
            </button>
            <a
              href="https://github.com/xdlrt/mds"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none cursor-pointer"
              rel="noreferrer"
            >
              <span className="text-sm font-medium">Github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1.5 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
