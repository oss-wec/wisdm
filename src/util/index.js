export function emptyModel (obj, replace) {
  obj = Object.assign({}, obj)

  for (let k in obj) {
    obj[k] = replace
  }

  return obj
}

export function pick (o, ...props) {
  return Object.assign({}, ...props.map(prop => ({[prop]: o[prop]})))
}
