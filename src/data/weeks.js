const currentWk = true;
const previousWk = true;

const alayah = 1;
const avonlea = 2;
const alexa = 3;
const courtney = 4;
const deandra = 5;
const eunice =6;
const hannahann = 7;
const jade = 8;
const jasmine = 9;
const jenna = 10;
const kiarra = 11;
const katrina = 12;
const kelley = 13;
const kelsey = 14;
const kylie = 15;
const lauren = 16;
const lexi = 17;
const madison = 18;
const maurissa = 19;
const megan = 20;
const mykenna = 21;
const natashia = 22;
const payton = 23;
const sarah = 24;
const savannah = 25;
const shiann = 26;
const sydney = 27;
const tammy = 28;
const victoriaf = 29;
const victoriap = 30;

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
  cutNo: 1,
  points: 30,
  // cuts:[],
}, {
  name: "Runner Up",
  cutNo: 1,
  cuts:[victoriaf],
  currentWk,
  points: 15,
}, {
  name: "Fantasy Suite",
  cutNo: 1, 
  points: 10,
  cuts:[kelsey],
  previousWk,
}, {
  name: "Hometowns",
  cutNo: 2,
  points: 7,
  cuts:[kelley, natashia],
}, {
  name: "Week 6",
  cutNo: 4,
  points: 6,
  cuts:[victoriap, tammy, mykenna, sydney],
}, {
  name: "Week 5",
  cutNo: 2,
  cuts: [shiann, lexi],
  points: 5,
}, {
  name: "Week 4",
  cutNo: 4,
  points: 4,
  cuts: [savannah, deandra, kiarra, alayah]
}, {
  name: "Week 3",
  cutNo: 3,
  points: 3,
  cuts: [alexa, jasmine, sarah ]
}, {
  name: "Week 2",
  points: 2,
  cutNo: 3,
  cuts: [lauren, payton, courtney],
}, {
  name: "Week 1",  
  points: 0,
  cutNo: 8,
  cuts: [avonlea, eunice, jade, jenna, katrina, kylie, maurissa, megan],
}, ].sort(comparePoints)

export default weeks;
