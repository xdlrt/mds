export const copy = (text: string) => {
  let input = document.getElementById("copy-input") as HTMLInputElement;
  if (!input) {
    // input 必须在页面内存在。
    input = document.createElement("input");
    input.id = "copy-input";
    input.style.position = "absolute";
    input.style.left = "-1000px";
    input.style.zIndex = "-1000";
    document.body.appendChild(input);
  }

  // 让 input 选中一个字符
  input.value = "NOTHING";
  input.setSelectionRange(0, 1);
  input.focus();

  const copyHandler = (e: ClipboardEvent) => {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/html", text);
      e.clipboardData.setData("text/plain", text);
    }
    document.removeEventListener("copy", copyHandler);
  };

  document.addEventListener("copy", copyHandler);
  document.execCommand("copy");
};
