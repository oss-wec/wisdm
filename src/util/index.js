export function emptyModel (obj) {
  obj = Object.assign({}, obj)

  for (let k in obj) {
    obj[k] = null
  }

  return obj
}
