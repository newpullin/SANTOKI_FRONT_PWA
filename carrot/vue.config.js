module.exports = {
  pwa: {
    workboxOptions: {
      include: [/^index\.html$/, /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/],
      exclude: []
    }

  },
  "transpileDependencies": [
    "vuetify"
  ]
}