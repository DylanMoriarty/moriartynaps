const pop = require('./pop.json')
const fs = require('fs')

let output = {}

const years = Object.keys(pop[1])

pop.forEach((f) => {
  output[f.age] = []

  for (var i = 101 - 1; i >= 0; i--) {
    if (f[i]) {
      const feature = {}

      feature.age = f.age - i

      let rawVal = f[i]
      let val
      if (typeof rawVal == 'string') {
        val = rawVal.replace(/[, ]+/g, "")
      } else {
        val = rawVal
      }

      feature.value = val

      output[f.age].push(feature)
    }
  }
})

let yearArray= []

for (var i = 2019; i >= 1855; i--) {
  yearArray.push(i)
}

for (const o in output) {
  const data = output[o]
  const yearsInData = (data.map(d => { return d.age }))

  yearArray.forEach((y) => {
    if(!yearsInData.includes(y)) {
      const toPush = {
        'age': y,
        'value': 0
      }

      data.push(toPush)
    } else {
      return
    }
  })

  data.sort(function(a, b) { 
    return a.age - b.age
  })
}


fs.writeFile('pops.json', JSON.stringify(output), (err) => {
  if (err) throw err;
})


// 1855, 2019