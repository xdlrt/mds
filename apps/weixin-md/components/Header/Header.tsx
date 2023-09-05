import { copy } from "../../utils/clipboard";
import { exportHTML } from "../../utils/export";
import { toast } from "../Toast";

export const Header = () => {
  const handleCopy = () => {
    let previewDOM = document.getElementById(`preview`);
    if (!previewDOM) return toast.error("现在没什么可以复制的");
    copy(exportHTML(previewDOM));
    toast.success("内容已复制，可到公众号后台粘贴");
  };

  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              公众号排版工具
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              {`一款高度简洁的微信公众号 Markdown 编辑器! 🎉`}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
              type="button"
              onClick={handleCopy}
            >
              复制到剪贴板
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
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
