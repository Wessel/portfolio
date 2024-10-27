module.exports = {
  CHARACTERS: [
    // Unicode range from U+0020 to U+007E (including the last one).
    // Contains: space, !, ", #, $, %, &, ', (, ), *, +, comma, 
    // -, dot, /, numbers, :, ;, <, =, >, ?, @, A-Z, [, \, ], ^,
    // _, `, a-z, {, |, }, ~
    'E9C3', // docker
    'E998', // c
    'E9A1', // css 3
    'E9A0', // c#
    'E9B1', // debian
    'E92C', // arch
    'E965', // cassandra
    'E9DB', // elixir
    'EA2D', // git
    'EA67', // html5
    'EBEE', // sass
    'EBE6', // rust
    'EB9C', // python
    'EC63', // typescript
    'EBC6', // redhat
    'EBC8', // redis
    'EB79', // postgres
    'EC68' // ubuntu
  ],

  // Drop all the features except 'tnum' and 'kern'
  LAYOUT_FEATURES: ['tnum', 'kern']
}