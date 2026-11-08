const assert=require('node:assert/strict'),fs=require('node:fs'),E=require('./public/engine'),D=require('./public/data');
let count=0;function test(name,fn){fn();count++;console.log('PASS '+name)}
const src=fs.readFileSync('original/dictionaries_project_ojas_gupta.py','utf8');
const literal=JSON.parse(src.slice(src.indexOf('{'),src.indexOf('\n# Functions')).trim());
test('All 36 dictionaries exactly preserved, including absent keys',()=>{assert.equal(Object.keys(D).length,36);assert.deepEqual(D,literal);assert.equal(Object.hasOwn(D['AEK Athens'],'saves'),false)});
function originalScore(s){let n=0;for(const[k,v]of Object.entries(s)){switch(k){case'losses':n-=v*2;break;case'wins':n+=v*10;break;case'draws':n+=v*3;break;case'goals':n+=v*4;break;case'sot':n+=v;break;case'conversion_rate':n+=v*.5;break;case'pass_accuracy':n+=v*.2;break;case'clean_sheets':n+=v*5;break;case'saves':n+=v;break;case'defensive_tackles':n+=v*.5}}return n}
test('Every original club score matches Python branches',()=>{for(const s of Object.values(D))assert.ok(Math.abs(E.score(s)-originalScore(s))<1e-10);assert.equal(E.rank(D)[0].name,'PSG');assert.equal(E.score(D.PSG),140.82)});
test('Country average + five points per club preserved',()=>{let c=E.countries(D)[0];assert.equal(c.name,'England');assert.equal(c.count,5);assert.ok(Math.abs(c.score-(Object.values(D).filter(s=>s.country==='England').reduce((n,s)=>n+originalScore(s),0)/5+25))<1e-8)});
test('Custom weights and negative losses',()=>{assert.equal(E.score({wins:2,losses:1},{wins:1,losses:-2}),0);assert.equal(E.score({losses:3}),-6)});
test('Unknown values and empty datasets safe',()=>{assert.equal(E.score({country:'X'}),0);assert.deepEqual(E.rank({}),[]);assert.deepEqual(E.countries({}),[]);assert.equal(E.weakness({},{}),undefined)});
test('Validation accepts decimals, zero, and missing stats',()=>assert.equal(E.validate('New Club',{country:'X',conversion_rate:4.2,goals:0}),true));
test('Validation rejects duplicates, negatives, nonfinite, ranges and fractional counts',()=>{for(const s of [{goals:-1},{wins:1.2},{pass_accuracy:101},{sot:NaN},{saves:Infinity}])assert.throws(()=>E.validate('New',{country:'X',...s}));assert.throws(()=>E.validate('arsenal',{country:'X'},D));assert.throws(()=>E.validate(' ',{country:'X'}));assert.throws(()=>E.validate('X',{country:''}));assert.equal(E.validate('Arsenal',D.Arsenal,D,'Arsenal'),true)});
test('Simulation repeatable, complete and never changes source',()=>{let before=JSON.stringify(D),s=E.simulate(D.Arsenal,D.PSG,E.weights,42,10000);assert.deepEqual(s,E.simulate(D.Arsenal,D.PSG,E.weights,42,10000));assert.equal(s.wins+s.draws+s.losses,10000);assert.equal(JSON.stringify(D),before);assert.ok(s.example.every(n=>Number.isInteger(n)&&n>=0));assert.notDeepEqual(s,E.simulate(D.Arsenal,D.PSG,E.weights,43,10000))});
test('Tied scores preserve dictionary insertion order',()=>assert.deepEqual(E.rank({B:{},A:{}}).map(x=>x.name),['B','A']));
test('Country selection handles entirely negative scores',()=>assert.equal(E.countries({A:{country:'X',losses:100},B:{country:'Y',losses:50}})[0].name,'Y'));
console.log(`${count} test groups passed.`);
