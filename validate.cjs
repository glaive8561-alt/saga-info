// DOM behavior checks; this is not a browser rendering or video-network test.
const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');
const {parseHTML} = require('linkedom');
const css = require('css-tree');
const {window, document} = parseHTML(fs.readFileSync('dist/index.html','utf8'));
window.matchMedia = () => ({matches:false});
window.Element.prototype.scrollIntoView = function(){};
window.Element.prototype.focus = function(){};
const scrolls = [];
const track = document.getElementById('testimonial-track');
track.scrollBy = (value) => scrolls.push(value.left);
track.querySelector('.testimonial').getBoundingClientRect = () => ({width:300});
const dialog = document.getElementById('video-dialog');
dialog.showModal = function(){this.setAttribute('open','');};
dialog.close = function(){this.removeAttribute('open');this.dispatchEvent(new window.Event('close'));};
const context=vm.createContext({window,document,console,Date,URL,setTimeout,clearTimeout,getComputedStyle:()=>({columnGap:'22px'})});
vm.runInContext(fs.readFileSync('dist/data.js','utf8'),context);
vm.runInContext(fs.readFileSync('dist/app.js','utf8'),context);
const data=window.SAGA_DATA;
const click=(selector)=>{const e=document.querySelector(selector);assert(e,selector);e.click();};
const key=(selector,value)=>{const e=new window.Event('keydown',{bubbles:true,cancelable:true});e.key=value;document.querySelector(selector).dispatchEvent(e);};
assert.equal(document.querySelector('[role=tab][aria-selected=true]').textContent.trim(),'01AI 미션 그룹');
assert.equal(document.getElementById('group-panel').dataset.current,'0');
for(let i=0;i<12;i++){
  click('[data-group="'+i+'"]');
  assert.equal(document.getElementById('group-title').textContent,data.groups[i].title);
  assert.equal(document.querySelectorAll('[role=tab][aria-selected=true]').length,1);
  assert.equal(document.getElementById('group-stats').hidden,data.groups[i].stats.length===0);
  assert.equal(document.querySelectorAll('#group-stats>div').length,data.groups[i].stats.length);
  assert.equal(document.querySelectorAll('#group-activities>li').length,3);
  assert.equal(document.querySelectorAll('#group-visual img').length,data.groups[i].photos.length);
  assert.equal(document.getElementById('group-source').getAttribute('href'),data.groups[i].source.href);
  assert.equal(document.getElementById('group-source-note').textContent,data.groups[i].source_note);
  for(const p of data.groups[i].photos) assert(fs.existsSync('dist/'+p.src),'photo '+p.src);
  assert(fs.existsSync('dist/'+data.groups[i].source.href),'PDF '+data.groups[i].source.href);
  assert(!document.getElementById('group-visual').innerHTML.includes('undefined'));
}
assert.equal(data.groups[0].stats.length,0,'Conflicting AI totals are excluded');
click('[data-group="0"]');assert.equal(document.getElementById('group-stats').textContent,'','Previous group statistics are cleared');
assert.equal(document.querySelectorAll('.group-shared-sources a').length,2);
click('[data-group="11"]');
click('#group-next');assert.equal(document.getElementById('group-panel').dataset.current,'0');
click('#group-prev');assert.equal(document.getElementById('group-panel').dataset.current,'11');
key('[data-group="11"]','Home');assert.equal(document.getElementById('group-panel').dataset.current,'0');
key('[data-group="0"]','End');assert.equal(document.getElementById('group-panel').dataset.current,'11');
key('[data-group="11"]','ArrowRight');assert.equal(document.getElementById('group-panel').dataset.current,'0');
const start=new window.Event('touchstart');start.changedTouches=[{clientX:260,clientY:100}];
const end=new window.Event('touchend');end.changedTouches=[{clientX:100,clientY:110}];
document.getElementById('group-panel').dispatchEvent(start);
document.getElementById('group-panel').dispatchEvent(end);
assert.equal(document.getElementById('group-panel').dataset.current,'1');
for(let i=0;i<5;i++){
  click('[data-lesson="'+i+'"]');
  assert.equal(document.getElementById('lesson-screen').dataset.video,data.lessons[i].id);
  assert.equal(document.querySelectorAll('[data-lesson][aria-pressed=true]').length,1);
}
click('#lesson-screen');
assert(dialog.hasAttribute('open'));
assert(document.querySelector('#dialog-screen iframe').src.includes('jJK8WYopOOE'));
click('#close-video');
assert.equal(document.querySelector('#dialog-screen iframe'),null);
assert(!document.body.classList.contains('modal-open'));
for(const id of ['RfzgTDxWbnA','VHp1j7otP8Y','-S1ZFYkMTMs','lSF8SKJs6cA','D0EskTdCMPw']){
  click('[data-video="'+id+'"]');
  assert(document.querySelector('#dialog-screen iframe').src.includes(id));
  if(id==='D0EskTdCMPw')assert(document.querySelector('#dialog-screen iframe').src.includes('start=507'));
  click('#close-video');
}
click('.menu-toggle');assert.equal(document.getElementById('mobile-menu').hidden,false);
key('.menu-toggle','Escape');assert.equal(document.getElementById('mobile-menu').hidden,true);
click('.menu-toggle');click('#mobile-menu a');assert.equal(document.getElementById('mobile-menu').hidden,true);
click('#reviews-next');click('#reviews-prev');assert.deepEqual(scrolls,[322,-322]);
assert.equal(document.querySelectorAll('#academic-calendar .calendar-month').length,12);
assert.equal(document.querySelectorAll('#academic-calendar time').length,365);
for(const [date,cls] of [['2027-02-16','t1'],['2027-04-24','t1'],['2027-05-08','t2'],['2027-07-13','t2'],['2027-09-04','t3'],['2027-11-20','t3']]){
  assert.equal(document.querySelector('time[datetime="'+date+'"]').parentElement.className,cls);
}
for(const date of ['2027-02-15','2027-04-25','2027-07-14','2027-11-21'])assert(!document.querySelector('time[datetime="'+date+'"]').parentElement.className);
const parseErrors=[];
for(const file of ['dist/styles.css','dist/refinement.css'])css.parse(fs.readFileSync(file,'utf8'),{onParseError:(e)=>parseErrors.push(file+': '+e.message)});
assert.deepEqual(parseErrors,[]);
console.log('PASS: 12 source-backed group selections, per-group photos/PDF links/activities/statistics cleanup, wraparound, keyboard, swipe handler, 5 lesson selections, 6 video launches/cleanup, mobile menu, review arrows, 365 calendar dates and term boundaries, CSS parse.');
console.log('NOT TESTED: real browser layout at desktop/mobile sizes; real YouTube playback/network. No browser-control skill is available.');
