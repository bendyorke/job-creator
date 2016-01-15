import { spins } from 'data'

const sample = array => {
  return array[Math.floor(Math.random() * array.length)]
}

export function spin(string) {
  return spins[string]
    .split(/{([^}]*)}/)
    .map(partial => sample(partial.split('|')))
    .join('')
}
