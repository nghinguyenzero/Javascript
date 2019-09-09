//import module "events"
var events = require('events');
var util = require('util');

var Person = function (name) {
 this.name = name;
}
util.inherits(Person, events.EventEmitter);

var jame = new Person('Jame');
var sky = new Person('Sky');
var people = [jame, sky];


people.forEach(person => {
    person.on('talk', function(msg){
        console.log(person.name + ' say that ' + msg);
    });
});

sky.emit('talk','hello guy');

