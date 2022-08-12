export function concat(array: any[], ...arg: any[]) {
  for (let item of arg) {
    array = array.concat(Array.isArray(item) ? item : [item])
  }
  return array
}


