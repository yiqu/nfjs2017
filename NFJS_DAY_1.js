// Profiling client side in JS
window.performance

performance.mark('mark 1');

performance.measure('mark1', 'mark2');

//clear the mark by
performance.clearMarks();

window.performance.getEntriesByName('mark1');

// web page test:
web page test: https://www.webpagetest.org/ tests speed based on location.

for example the game page from GH: 
https://www.webpagetest.org/result/171027_W3_ba3d673222b7539ae2913db2195d2bd5/1/details/#waterfall_view_step1

ighthouse: https://github.com/GoogleChrome/lighthouse


//Meta programming in JS
// proto type
inject with symbols, to avoid conflicts of same name prototypes

comnst numbers = [1,2,3,4,5]

comsole.log(numbers[0])

what if you want numbers.first() ?

Define a prototype first() function.

// this gives you Array's the first
Object.defineProperty(Array.prototype, 'first', {
  get: function() { return this[0]}
})

Now Array has a .first . [1,2,3,4].first will give u 1

// can do multiple properties
Object.defineProperties(Array.prototype, {
  first: { get: function() { }},
  last: {get: function() { }}
})

creating a proxy:
it has 2 parts, target and handler

class Person {
  constructor(first, last) {
  this.first = first;
  }
}

let peter = new Person('peter')

// another proxy that will print out what do you mean when its undefined
// proxy took PEter object, and give it a new function
let proxThatGivesYouDiffUndefined = new Proxy(peter, {
    get: function(target, property, receiver) { 
      if(property in target) {
        return target[property]
      } else {
      return 'What you mean?' 
      }  
    } }
  );

  proxThatGivesYouDiffUndefined.fist // peter
  proxThatGivesYouDiffUndefined.age // what do you mean?

  revokable proxy:

  let proxThatGivesYouDiffUndefined = Proxy.revocable(peter, {
    get: function(target, property, receiver) { 
      if(property in target) {
        return target[property]
      } else {
      return 'What you mean?' 
      }  
    } }
  );
  