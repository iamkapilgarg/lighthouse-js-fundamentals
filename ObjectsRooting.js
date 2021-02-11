const judgeVegetable = function (vegetables, metric) {
  let highest = vegetables[0][metric];
  let name = vegetables[0]["submitter"];
  vegetables.forEach(function (veg) {
    if (veg[metric] > highest) {
      highest = veg[metric];
      name = veg["submitter"];
    }
  })
  return name;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));