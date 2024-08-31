// this를 사용해야 하면 확장해서 사용하세요 ~!
// ex) const context = this;
// ex) fetchFn.call(context, params);
export function debounce(fetchFn: Function, delay: number) {
  let timer: NodeJS.Timeout;
  return function (params: unknown) {
    clearTimeout(timer);
    timer = setTimeout(() => fetchFn(params), delay);
  };
}
