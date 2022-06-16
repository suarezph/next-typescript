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

export { flatten }
