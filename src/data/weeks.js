const currentWk = true;
const previousWk = true;

const alexb = 1;
const angelique = 2;
const annie = 3;
const bri = 4;
const caelyn = 5;
const caitlin = 6;
const cassie = 7;
const catherine = 8;
const courtney = 9;
const demi = 10;
const elyse = 11;
const erika = 12;
const hannab = 13;
const hannag = 14;
const heather = 15;
const kaity = 16
const kirpa = 17;
const nicole = 18;
const nina = 19;
const onyeka = 20;
const sydney = 21;
const tayshia = 22;
const tracy = 23;

function comparePoints(a, b) {
  if (a.points < b.points) {
    return -1;
  }
  if (a.points > b.points)
    return 1;
  return 0;
}

const weeks = [{
  name: "Final Rose",
  points: 30,
  cutNo: 1,
  cuts: null,
}, {
  name: "Runner Up",
  points: 15,
  cutNo: 1,
  cuts: null,
}, {
  name: "Fantasy Suite",
  points: 10,
  cutNo: 1,
  cuts: null,
}, {
  name: "Hometowns",
  points: 7,
  cutNo: 3,
  cuts: null,
}, {
  name: "Week 6",
  points: 6,
  cutNo: 3,
  currentWk,
  cuts: [sydney, demi, kaity],
}, {
  name: "Week 5",
  points: 5,
  previousWk,
  cutNo: 3,
  cuts: [elyse, onyeka, nicole],
}, {
  name: "Week 4",
  points: 4,
  cutNo: 2,
  cuts: [tracy, courtney],
}, {
  name: "Week 3",
  points: 3,
  cutNo: 4,
  cuts: [catherine, bri, nina, caitlin],
}, {
  name: "Week 2",
  points: 2,
  cutNo: 4,
  cuts: [alexb, angelique, annie, erika],
}, {
  name: "Week 1",
  points: 0,
  cutNo: 0,
  cuts: null
}, ].sort(comparePoints)

export default weeks;
