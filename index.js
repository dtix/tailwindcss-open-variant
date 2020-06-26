module.exports = function () {
  return function({ addVariant, e }) {
      addVariant('open', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
              return `[open].${e(`open${separator}${className}`)}[open], details[open] .${e(`open${separator}${className}`)}`
          })
      })
  }
}
