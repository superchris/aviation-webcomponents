
module.exports = {
  mochaOptions: {
    reporter: 'nyan'
  },

  lassoConfig: {
    require: {
      transforms: [
        {
          transform: 'lasso-babel-transform'
        }
      ]
    }
  }
}
