var list = n => {
  const L = [];
  for (let i = 1; i <= n; i++) {
    L.push(i);
  }
  return L;
};

// prettier-ignore
function makeType (n) {
  return `export function useCallbackRef<${list(n).map(i => `T${i}`).join(', ')}${n > 0 ? ', ' : ''}F extends (...params: any[]) => any>(
    callback: (${list(n).map(i => `t${i}: T${i}`).join(', ')}) => F,
    deps: [${list(n).map(i => `T${i}`).join(', ')}]
  ): F;
`
}

var L = [];
for (let i = 0; i < 20; i++) {
  L.push(makeType(i));
}
console.log(L.join(``));
