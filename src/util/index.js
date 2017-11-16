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

export function sentenceCase (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function rmFalsy (obj) {
  let newObj = {}

  Object.keys(obj).forEach(i => {
    if (obj[i]) {
      newObj[i] = obj[i]
    }
  })

  return newObj
}
