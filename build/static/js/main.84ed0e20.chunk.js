(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5527:function(e,a,t){e.exports=t(5850)},5532:function(e,a,t){},5534:function(e,a,t){},5850:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(82),o=t.n(i),s=(t(5532),t(36)),c=t(37),l=t(39),m=t(38),u=t(40),h=t(83),p=(t(5534),function(e){function a(e){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,"Hello World")}}]),a}(n.Component)),d=t(2),g=t(22);function f(e,a){return e.score>a.score?-1:e.score<a.score?1:0}var k=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.dataStandings,t=e.constants;return r.a.createElement(n.Fragment,null,r.a.createElement(d.v,{gutterBottom:!0,variant:"h1"},"Leaderboard ",r.a.createElement("img",{alt:"",className:"datBigRose",src:"".concat("","/assets/bigRose.png")})),r.a.createElement(d.v,{gutterBottom:!0,variant:"h2"},t.curWeek.name," | $",t.pot," pot"),function(e,a){var t=e.sort(f);return r.a.createElement(n.Fragment,null,r.a.createElement(d.p,{className:"noMargin"},r.a.createElement(d.s,null,r.a.createElement(d.t,{className:"headerRow"},r.a.createElement(d.r,{className:"noBorder tiny"}),r.a.createElement(d.r,{className:"small"}),r.a.createElement(d.r,{className:"small"},"Points"),r.a.createElement(d.r,{className:"small"},"Highest Possible Score"),"Week 3"===a.curWeek.name?r.a.createElement(d.r,{className:"small"},"Weekly Change"):"")),r.a.createElement(d.q,null,t.map(function(e,t){var n="",i="";return e.diff<0?(n="error",i=r.a.createElement(g.a,{className:"smallIcon"})):e.diff>0&&(n="success",i=r.a.createElement(g.c,{className:"smallIcon"})),r.a.createElement(d.t,{key:"standing-row-".concat(t)},r.a.createElement(d.r,{align:"center",className:"dark tiny"},t+1),r.a.createElement(d.r,{className:"small"},e.name),r.a.createElement(d.r,{className:"small"},e.score),r.a.createElement(d.r,{className:"small"},e.potentialRemainingPts+e.score),"Week 3"===a.curWeek.name?r.a.createElement(d.r,{className:"".concat(n)},i,Math.abs(e.diff)||""):"")}))))}(a,t))}}]),a}(n.Component);var b=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"getStandingsContent",value:function(){var e=this.props,a=e.dataStandings,t=e.dataContestants,i=e.dataWeeks,o=a;return r.a.createElement(n.Fragment,null,r.a.createElement(d.k,{container:!0,spacing:16},o.map(function(e){return r.a.createElement(d.k,{item:!0,xs:12,sm:6,md:3,lg:2},r.a.createElement(d.i,null,r.a.createElement(d.j,{expandIcon:r.a.createElement(g.d,null)},r.a.createElement(d.v,null,e.name," | ",e.score," points")),r.a.createElement(d.l,null,function(e,a,t){var n=[],i=0;return e.picks.map(function(e){var o=a.filter(function(a){return a.id===e})[0];switch(i){case 1:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[9].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 2:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[8].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 3:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[7].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 4:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[6].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 6:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[5].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 9:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[4].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 12:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[3].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 15:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[2].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))));break;case 18:n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[1].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null))))}n.push(r.a.createElement(d.m,null,r.a.createElement(d.b,{className:o.exitWk?"dunzo":"",src:"".concat("","/assets/contestant_profiles/").concat(o.profilePic,".png")}),r.a.createElement(d.o,null,o.name," "))),i+=1}),n.push(r.a.createElement(d.m,{className:"weekBreak"},r.a.createElement(d.o,{className:"weekBreakText"},t[1].name),r.a.createElement(d.n,null,r.a.createElement(g.b,null)))),n}(e,t,i))))})))}},{key:"render",value:function(){var e=this.props.constants;return r.a.createElement(n.Fragment,null,r.a.createElement(d.v,{gutterBottom:!0,variant:"h1"},"Brackets"),r.a.createElement(d.v,{gutterBottom:!0,variant:"h2"},e.curWeek.name),this.getStandingsContent())}}]),a}(n.Component);function v(e){var a=[];return e.forEach(function(e){var t=e.exitWk?"cardMedia dunzo":"cardMedia";a.push(r.a.createElement(d.k,{key:"contestant-".concat(e.id),item:!0,lg:2,md:3,sm:4,xs:12},r.a.createElement(d.d,null,r.a.createElement(d.e,null,r.a.createElement(d.g,{className:t,image:"".concat("","/assets/contestant_profiles/").concat(e.profilePic,".png")})),r.a.createElement(d.f,null,r.a.createElement(d.v,{variant:"h5"},e.name),r.a.createElement(d.v,{variant:"body1"},e.age),r.a.createElement(d.v,{variant:"body1"},e.job),r.a.createElement(d.v,{variant:"body1"},e.hometown),function(e){if(e)return r.a.createElement(d.v,{color:"error",variant:"body1"},e)}(e.exitWk)))))}),a}var w=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.dataContestants;return r.a.createElement(n.Fragment,null,r.a.createElement(d.v,{gutterBottom:!0,variant:"h1"},"Contestants"),r.a.createElement(d.k,{container:!0,spacing:16},v(e)))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d.v,{gutterBottom:!0,variant:"h1"},"Chirps"),r.a.createElement(d.v,{gutterBottom:!0,variant:"h2"}),r.a.createElement(d.k,{container:!0,justify:"center",spacing:16},r.a.createElement(d.k,{item:!0,md:8,sm:10,xs:12},r.a.createElement(d.v,{gutterBottom:!0,variant:"h2"},"Week 2 recap"),r.a.createElement(d.h,null),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),"Molly McGaughan pulls off a perfectly imperfect round 1!"),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),"Dr. 2-Hard's dream of an Alex B. proposal goes down in flames early...ouch."),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),'Kim "bring in the ringer" FB all alone in front with a perfect first week.'),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),"Lauren, Liz and Tennis match scores with 6 year old Bachelor enthusiast, Willa Mae Perrin.")),r.a.createElement(d.k,{item:!0,md:8,sm:10,xs:12},r.a.createElement(d.v,{gutterBottom:!0,variant:"h2"},"Week 3 recap"),r.a.createElement(d.h,null),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),"We have a new leader in Ms. Katie Kills...Kim still the favorite with the bookies with the highest potential score."),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),"Jayson with a strong move up the middle from 12 to 6."),r.a.createElement(d.v,{gutterBottom:!0,variant:"body1"},r.a.createElement("i",{className:"chirp fab fa-twitter"}),"Colton and Willa agree that Tracy is hotter than Bri...hmmmmmm."))))}}]),a}(n.Component),y=(t(5643),t(26)),C=Object(y.createMuiTheme)({overrides:{MuiButton:{root:{fontFamily:["Montserrat","sans-serif"].join(",")}},MuiTableCell:{root:{padding:"4px 24px 4px 24px"}},MuiTypography:{h1:{fontSize:"1.5rem",fontFamily:["Montserrat","sans-serif"].join(","),paddingLeft:"12px",paddingTop:"12px"},h2:{textTransform:"uppercase",fontFamily:["Montserrat","sans-serif"].join(","),paddingLeft:"12px",fontSize:".8rem"}}},palette:{},typography:{}}),N=[{name:"Yi-Mei",profilePic:"",picks:[7,14,22,5,11,13,4,15,10,6,21,16,9,18,8,1,3,17]},{name:"Lindsay",profilePic:"",picks:[7,14,22,5,16,21,9,13,4,23,8,6,20,18,15,17,3,10]},{name:"Kim",profilePic:"",picks:[7,22,14,5,13,10,6,20,16,21,9,8,17,11,18,23,15,4]},{name:"Tennis",profilePic:"",picks:[5,14,13,12,21,3,4,7,6,10,1,9,16,22,19,20,15,8]},{name:"Cindy",profilePic:"",picks:[7,14,3,4,5,22,17,15,16,13,20,19,11,6,10,12,18,8]},{name:"Molly",profilePic:"",picks:[7,14,4,1,9,5,6,16,13,15,3,2,12,10,8,17,22,20]},{name:"Liz",profilePic:"",picks:[5,14,7,13,11,6,22,12,15,2,16,10,21,3,18,23,9,8]},{name:"Richard",profilePic:"",picks:[1,14,5,16,13,11,10,7,20,21,22,17,3,18,23,4,6,8]},{name:"Blaire",profilePic:"",picks:[14,5,10,11,16,13,15,19,7,18,17,6,9,22,4,1,20,8]},{name:"Gray",profilePic:"",picks:[7,14,6,15,5,16,10,22,4,18,17,3,11,9,13,8,12,20]},{name:"Willa",profilePic:"",picks:[11,19,23,17,13,7,8,10,12,18,14,6,21,1,4,3,5,15]},{name:"Katie",profilePic:"",picks:[7,5,22,14,9,6,13,15,23,21,16,10,11,17,18,3,20,8]},{name:"Brittany",profilePic:"",picks:[14,7,13,10,5,16,6,12,22,4,18,15,17,21,1,20,11,8]},{name:"Chas",profilePic:"",picks:[7,14,22,5,13,20,1,10,12,6,11,18,21,15,9,23,17,4]},{name:"Jayson",profilePic:"",picks:[14,5,21,7,16,10,4,22,9,17,3,15,13,18,2,6,20,11]},{name:"Lauren",profilePic:"",picks:[7,21,14,3,5,1,4,10,18,12,15,23,16,17,19,6,9,13]}];N.forEach(function(e){var a=e.name,t=[],n=e.picks;18!==n.length&&console.log("not the right num of entries for ".concat(a," (").concat(n.length,")"));for(var r=n.slice().sort(),i=0;i<r.length-1;i++)r[i+1]==r[i]&&t.push(r[i]);t.length>0&&console.log("Duplicates in Bracket for ".concat(a," (id: ").concat(t[0],")"))});var P=N;var j=[{name:"Final Rose",points:30,cutNo:1,cuts:null},{name:"Runner Up",points:15,cutNo:1,cuts:null},{name:"Fantasy Suite",points:10,cutNo:1,cuts:null},{name:"Hometowns",points:7,cutNo:2,cuts:null},{name:"Week 6",points:6,cutNo:2,cuts:null},{name:"Week 5",points:5,cutNo:3,cuts:null},{name:"Week 4",points:4,cutNo:3,cuts:[23,9]},{name:"Week 3",points:3,cutNo:4,currentWk:!0,cuts:[8,4,19,6]},{name:"Week 2",points:2,previousWk:!0,cutNo:4,cuts:[1,2,3,12]},{name:"Week 1",points:0,cutNo:0}].sort(function(e,a){return e.points<a.points?-1:e.points>a.points?1:0}),B=[{id:1,profilePic:"alex-b",name:"Alex B.",age:"29",job:"Dog Rescuer",hometown:"Vancouver, BC",slug:"",description:"Alex is the proud owner of a successful\n  dog rescue business, which takes her\n  all over the world in search of fourlegged\n  friends to save. To date, she's\n  saved almost 5000 dogs from\n  slaughter. Luckily for Alex, rumor has it\n  Colton is a dog lover too.",funFacts:"- She once lived in a van in Australia.\n  - Her favorite movies are The Mighty\n  Ducks, The Lion King and Old School.\n  - Country is her favorite music genre.",exitWk:null},{id:2,profilePic:"angelique",name:"Angelique",age:"28",job:"Marketing Salesperson",hometown:"Hamilton, NJ",slug:"",description:"Angelique is a small-town Jersey girl\n  with a love of corny jokes. Here's one for\n  you, Angelique: Why did Colton cross\n  the road? To meet you, of course!",funFacts:"- Her favorite TV show is How To Get\n  Away with Murder, and her favorite\n  actress is Viola Davis.\n  - She's always dreamed of owning a\n  clothing boutique.\n  - If she could have any super power,\n  she'd be able to tell if anyone was\n  lying.ave any job in the world, she'd be a\n  zookeeper...",exitWk:null},{id:3,profilePic:"annie",name:"Annie",age:"23",job:"Financial Associate",hometown:"New York, NY",slug:"",description:"Annie grew up on a farm in Wisconsin\n  where she learned to ride horses. She\n  competed in nationals for horse riding\n  before attending the University of\n  Alabama to study finance. Annie loves\n  country music and swing dancing. She's\n  hoping to sweep Colton off his feet!",funFacts:"- She describes herself as a party-starter\n  who always wants everyone to have fun.\n  - She hates mosquitos, but they love her.\n  - Ryan Gosling is her favorite actor.",exitWk:null},{id:4,profilePic:"bri",name:"Bri",age:"24",slug:"",job:"Model",hometown:"Los Angeles, CA",description:"A model from Southern California, Bri is\n  much more than just a pretty face. She\n  played soccer for eight years, enjoys\n  hiking and camping, and loves to hit the\n  snowboard slopes. Her biggest dating\n  fear? Farting too loudly. (Don't worry Bri,\n  we won't tell Colton.)",funFacts:"- Her favorite sport to watch is hockey.\n  - She's been modeling since she was 14\n  years old.\n  - She loves it when her date notices her\n  outfit.",exitWk:null},{id:5,profilePic:"caelynn",name:"Caelynn",age:"23",job:"Miss North Carolina",hometown:"Charlotte, NC",slug:"",description:"Caelynn grew up in Fredericksburg,\n  Virginia, and attended Virginia\n  Commonwealth University, where\n  she got her degree in broadcast\n  journalism. She was named Miss\n  North Carolina in 2018 and was the\n  first runner-up at Miss USA. But\n  Caelynn is not your typical beauty\n  queen. She once flew to Japan for a\n  first date! Luckily, she'll only have to\n  travel to the Bachelor mansion to\n  meet Colton.",funFacts:"- Her biggest mentor and role model\n  is her grandmother, who was the first\n  woman to be head of the FBI in Los\n  Angeles.\n  - She's a terrible cook, except for\n  breakfast...",exitWk:null},{id:6,profilePic:"caitlin",name:"Caitlin",age:"25",job:"Realtor",hometown:"Toronta, ON",slug:"",description:"Caitlin is a successful realtor from\n  Toronto, Ontario, Canada, who\n  enjoys photography, painting and\n  singing in the shower. Here's hoping\n  she musters the courage to belt out\n  a few tunes in front of Colton...or,\n  maybe not?",funFacts:"- Her favorite dessert is cheesecake.\n  - She considers herself a city person\n  more than a country person.\n  - If she could go anywhere in the US,\n  she would ride horses through the\n  Colorado mountains.",exitWk:null},{id:7,profilePic:"cassie",name:"Cassie",age:"23",job:"Speach Pathologist",hometown:"Huntington Beach, CA",slug:"",description:"A true native Californian, Cassie grew\n  up at the beach and is an avid surfer.\n  She is currently completing her degree\n  in speech pathology and hopes to one\n  day open up a private practice to work\n  with kids. Maybe in the meantime she\n  can teach Colton the language of love.",funFacts:"- She owns two cats named Maverick\n  and Goose.\n  - Skydiving is the most outrageous\n  thing she's done.\n  - The one thing she wouldn't do for\n  love is turn her back on her family.",exitWk:null},{id:8,profilePic:"catherine",name:"Catherine",age:"26",job:"DJ",hometown:"Ft. Lauderdale, FL",slug:"",description:"By day, Catherine is a successful\n  commercial real estate agent. By night,\n  Catherine is DJ Agro\u2014an up-andcoming\n  hip-hop DJ making a name for\n  herself on the Ft. Lauderdale club\n  scene. Along with her dog daughter,\n  Lucy, Catherine is hoping to spin her\n  way into Colton's heart.",funFacts:"- She doesn't have any tattoos\n  because \"you don't put a bumper\n  sticker on a Ferrari.\"\n  - Her favorite author is Dr. Seuss...",exitWk:null},{id:9,profilePic:"courtney",name:"Courtney",age:"23",job:"Caterer",hometown:"Atlanta, GA",slug:"",description:"Courtney was born in Wiesbaden,\n  Germany, but grew up in McDonough,\n  Georgia, with four younger siblings. She\n  turned her passion for food and cooking\n  into a successful catering business,\n  crafting healthy meal plans for athletes.\n  Now she's just hoping she has the recipe\n  for love with Colton!",funFacts:'- Her most embarrassing moment was\n  tripping (twice!) on stage at her\n  graduation.\n  - The closest she\'s ever been to\n  marriage is a Pinterest board titled "I\n  do."...',exitWk:null},{id:10,profilePic:"demi",name:"Demi",age:"23",job:"Interior Designer",hometown:"Red Oak, TX",slug:"",description:"Demi grew up in rural Texas and is a\n  proud country girl. She loves ATVing,\n  fishing and watching WWE. She can also\n  drive a stick shift. She's ready to put her\n  pursuit of Colton into overdrive! Keep an\n  eye on this one, Bachelor Nation!",funFacts:'- One item on her bucket list is to be the\n  first petite Victoria\'s Secret Angel\u2014with\n  an entourage known as the "Demi\n  Angels."\n  - Her favorite color is yellow.\n  - If she could have lunch with anyone, it\n  would be Jon Snow (in character).',exitWk:null},{id:11,profilePic:"elyse",name:"Elyse",age:"31",job:"Makeup Artist",hometown:"Soldotna, AK",slug:"",description:"Elyse grew up outside of Anchorage in\n  Soldotna, Alaska, where she spent her\n  childhood ice-skating and snowmobiling.\n  She found warmer a climate when she\n  relocated to Scottsdale, Arizona, where\n  she now works as a makeup artist. She\n  also enjoys hiking, reading and spending\n  time with friends over good food and\n  wine.",funFacts:"- Her favorite holiday is New Year's Eve\n  because of the glitter, glam, and hope of\n  new beginnings.\n  - She has never been out of the country...",exitWk:null},{id:12,profilePic:"erika",name:"Erika",age:"25",job:"Recruiter",hometown:"Encinitas, CA",slug:"",description:"",funFacts:"",exitWk:null},{id:13,profilePic:"hannah",name:"Hannah",age:"23",job:"Miss Alabama",hometown:"Tuscaloosa, GA",slug:"",description:"",funFacts:"",exitWk:null},{id:14,profilePic:"hannah-g",name:"Hannah G.",age:"23",job:"Content Creator",hometown:"Birmingham, AL",slug:"",description:"",funFacts:"",exitWk:null},{id:15,profilePic:"heather",name:"Heather",age:"22",job:"Never Been Kissed",hometown:"Carlsbad, CA",slug:"",description:"",funFacts:"",exitWk:null},{id:16,profilePic:"katie",name:"Katie",age:"26",job:"Medical Sales Representative",hometown:"Sherman Oaks, CA",slug:"",description:"",funFacts:"",exitWk:null},{id:17,profilePic:"kirpa",name:"Kirpa",age:"26",job:"Dental Hygienist",hometown:"Whittler, CA",slug:"",description:"",funFacts:"",exitWk:null},{id:18,profilePic:"nicole",name:"Nicole",age:"25",job:"Social Media Coordinator",hometown:"Miami, FL",slug:"",description:"",funFacts:"",exitWk:null},{id:19,profilePic:"nina",name:"Nina",age:"30",job:"Sales Account Manager",hometown:"Raleigh, NC",slug:"",description:"",funFacts:"",exitWk:null},{id:20,profilePic:"onyenka",name:"Onyeka",age:"24",job:"IT Risk Consultant",hometown:"Dallas, TX",slug:"",description:"",funFacts:"",exitWk:null},{id:21,profilePic:"sydney",name:"Sydney",age:"27",job:"NBA Dancer",hometown:"New York, NY",slug:"",description:"",funFacts:"",exitWk:null},{id:22,profilePic:"tayshia",name:"Tayshia",age:"28",job:"Phlebotomist",hometown:"Corona Del Mar, CA",slug:"",description:"",funFacts:"",exitWk:null},{id:23,profilePic:"tracy",name:"Tracy",age:"31",job:"Wardrobe Stylist",hometown:"Los Angeles, CA",slug:"",description:"",funFacts:"",exitWk:null}],W=t(106),x=t.n(W),S={pot:20*(P.length-1)};function F(e,a,t){for(var n=0;n<e.length;n+=1)if(e[n][a]===t)return n;return-1}function A(e,a){return e.score>a.score?-1:e.score<a.score?1:0}function O(e,a){return e.previousScore>a.previousScore?-1:e.previousScore<a.previousScore?1:0}function M(e,a){return e.missingPts<a.missingPts?-1:e.missingPts>a.missingPts?1:0}function T(e,a){return e.previousMissingPts<a.previousMissingPts?-1:e.previousMissingPts>a.previousMissingPts?1:0}function H(){var e=[],a=[];P.forEach(function(t,n){var r=function(e){var a=0,t=0,n=0,r=0,i=0,o=22,s=B.map(function(e){return e.id});return j.forEach(function(c){c.currentWk&&(S.curWeek=c),o-=c.cutNo;var l=e.slice(0,o);c.cuts&&(s=s.filter(function(e){return!c.cuts.includes(e)}),l.forEach(function(e){s.indexOf(e)>-1&&(a+=c.points,c.currentWk||(t+=c.points))})),c.cuts||l.forEach(function(e){s.indexOf(e)>-1?i+=c.points:(n+=c.points,c.currentWk||(r+=c.points))})}),{cur:a,prev:t,missingPts:n,potentialRemainingPts:i,prevMissingPts:r}}(t.picks);P[n].score=r.cur,P[n].previousScore=r.prev,P[n].missingPts=r.missingPts,P[n].prevMissingPts=r.prevMissingPts,P[n].potentialRemainingPts=r.potentialRemainingPts,e.push(t),a.push(t)});var t=e.sort(M).sort(A),n=a.sort(T).sort(O);P.forEach(function(e,a){var r=F(t,"name",e.name),i=F(n,"name",e.name);P[a].diff=i-r}),console.log(P)}function L(){j.forEach(function(e){e.cuts&&e.cuts.forEach(function(a){B[a-1].exitWk=e.name})}),H()}var D=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={page:"standings"},t.changePage=t.changePage.bind(Object(h.a)(Object(h.a)(t))),L(),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"getContent",value:function(){var e;switch(this.state.page){case"home":e=r.a.createElement(p,null);break;case"contestants":e=r.a.createElement(w,{dataContestants:B});break;case"brackets":e=r.a.createElement(b,{dataContestants:B,dataStandings:P,dataWeeks:j,constants:S});break;case"standings":e=r.a.createElement(k,{dataStandings:P,constants:S});break;case"chirps":e=r.a.createElement(E,{dataStandings:P,constants:S});break;default:e=r.a.createElement(p,null)}return e}},{key:"changePage",value:function(e){var a=e.currentTarget.getAttribute("data-key");this.setState({page:a})}},{key:"render",value:function(){var e=this.state.page;return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,null),r.a.createElement(y.MuiThemeProvider,{theme:C},r.a.createElement(d.a,{position:"sticky",color:"default"},r.a.createElement(d.u,null,r.a.createElement(d.c,{className:"".concat("standings"===e?"active":""," menuBtn"),onClick:this.changePage,size:"medium","data-key":"standings","aria-label":"Open drawer"},"Leaders"),r.a.createElement(d.c,{className:"".concat("brackets"===e?"active":""," menuBtn"),onClick:this.changePage,size:"medium","data-key":"brackets","aria-label":"Open drawer"},"Brackets"),r.a.createElement(d.c,{className:"".concat("contestants"===e?"active":""," menuBtn"),onClick:this.changePage,size:"medium","data-key":"contestants","aria-label":"Open drawer"},"Contestants"),r.a.createElement(d.c,{className:"".concat("chirps"===e?"active":""," menuBtn"),onClick:this.changePage,size:"medium","data-key":"chirps","aria-label":"Open drawer"},"Chirps"))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},this.getContent()))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5527,2,1]]]);
//# sourceMappingURL=main.84ed0e20.chunk.js.map