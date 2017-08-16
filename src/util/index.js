export function emptyModel (obj) {
  obj = Object.assign({}, obj)

  for (let k in obj) {
    obj[k] = null
  }

  return obj
}

export function pick (o, ...props) {
  return Object.assign({}, ...props.map(prop => ({[prop]: o[prop]})))
}
