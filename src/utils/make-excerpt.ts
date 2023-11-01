export function makeExcerpt(text: string) {
  return text.substring(0, 115).concat('...')
}
