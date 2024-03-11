export function zoom(svgEle: SVGElement) {
  let node: HTMLElement = <HTMLElement>svgEle.childNodes.item(0);
  node.style.transition = "1s";

  function zoomIn() {
    node.style.width = "100%";
    node.style.height = "100%";
    console.log("Zooming in");
  }

  function zoomOut() {
    node.style.transform = "scale(1)";
  }
  node.addEventListener("click", zoomIn);
  // node.addEventListener("mouseleave", zoomOut);

  return {
    destroy() {
      node.removeEventListener("click", zoomIn);
      // node.removeEventListener("mouseleave", zoomOut);
    },
  };
}
