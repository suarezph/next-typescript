function flatten(input: any, reference?: any, output?: any) {
  output = output || {}
  for (var key in input) {
    var value = input[key]
    key = reference ? reference + '.' + key : key
    if (typeof value === 'object' && value !== null) {
      flatten(value, key, output)
    } else {
      output[key] = value
    }
  }
  return output
}

function menuhasChildren(item) {
  const { items: children } = item

  if (children === undefined) {
    return false
  }

  if (children.constructor !== Array) {
    return false
  }

  if (children.length === 0) {
    return false
  }

  return true
}

export { flatten, menuhasChildren }
