import { greeting } from './main'

describe('greeting people', () => {
  test('greeting to salva', () => {
    expect(greeting('salva')).toBe('hello salva')
  })
})
