// 判断是否是包裹代码块的 pre 元素
function isPre(element: HTMLElement) {
  return (
    element.tagName === "PRE" &&
    Array.from(element.classList).includes("code__pre")
  );
}

// 判断是否是包裹代码块的 code 元素
function isCode(element: HTMLElement) {
  return (
    element.tagName === "CODE" &&
    Array.from(element.classList).includes("prettyprint")
  );
}

// 判断是否是包裹代码字符的 span 元素
function isSpan(element: HTMLElement) {
  return (
    element.tagName === "SPAN" &&
    (isCode(element.parentElement as HTMLElement) ||
      isCode(
        (element.parentElement as HTMLElement).parentElement as HTMLElement,
      ) ||
      isCode(
        (element.parentElement as HTMLElement).parentElement
          ?.parentElement as HTMLElement,
      ))
  );
}

function setStyles(element: HTMLElement) {
  function getElementStyles(
    element: HTMLElement,
    includes = ["color"],
    excludes = ["width", "height"],
  ) {
    const styles = getComputedStyle(element, null);
    return Object.entries(styles)
      .filter(
        ([key]) =>
          styles.getPropertyValue(key) &&
          includes.includes(key) &&
          !excludes.includes(key),
      )
      .map(([key, value]) => `${key}:${value};`)
      .join("");
  }

  switch (true) {
    case isPre(element):
    case isCode(element):
    case isSpan(element):
      const existingStyles = element.getAttribute("style") || "";
      const newStyles = getElementStyles(element);
      const combinedStyles = `${existingStyles}${
        existingStyles && newStyles ? ";" : ""
      }${newStyles}`;
      element.setAttribute("style", combinedStyles);
    default:
    // do nothing
  }
  if (element.children.length) {
    Array.from(element.children).forEach((child) =>
      setStyles(child as HTMLElement),
    );
  }
}

export function exportHTML(element: HTMLElement) {
  setStyles(element);
  const htmlStr = element.innerHTML;
  return htmlStr;
}
