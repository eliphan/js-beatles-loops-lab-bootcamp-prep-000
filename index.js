// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  var l = musicians.length
  for (let i = 0; i < l; i++)
  array.push(`${musicians[i]} play ${instruments[i]}`)

return array
}