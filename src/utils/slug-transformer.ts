export function slugTransformer(slug: string) {
  const words = slug.split('-')
  const compoundWord = words.length === 3

  const wordsCapitalized = []

  if (!compoundWord) {
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i]

      const firstLetterCapitalized = currentWord.charAt(0).toUpperCase()
      const wordWithoutFirstLetter = currentWord.substring(1)
      const capitalizedWord = firstLetterCapitalized + wordWithoutFirstLetter

      wordsCapitalized.push(capitalizedWord)
    }

    const transformedSlug = wordsCapitalized[0] + ' ' + wordsCapitalized[1]

    return transformedSlug
  }

  for (let i = 0; i < words.length; i++) {
    const isConnector = i === 1
    if (!isConnector) {
      const currentWord = words[i]

      const firstLetterCapitalized = currentWord.charAt(0).toUpperCase()
      const wordWithoutFirstLetter = currentWord.substring(1)
      const capitalizedWord = firstLetterCapitalized + wordWithoutFirstLetter

      wordsCapitalized.push(capitalizedWord)
    }
  }

  const transformedSlug =
    wordsCapitalized[0] + ' ' + words[1] + ' ' + wordsCapitalized[1]

  return transformedSlug
}
