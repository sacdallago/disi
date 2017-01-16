module.exports = {
    entry: __dirname + '/lib/index.js',
    output: {
         path: __dirname + '/build',
         filename: 'disi.js',
         libraryTarget: 'umd',
         library: 'Disi'
    }
 };