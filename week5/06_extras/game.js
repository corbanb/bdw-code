var person = {};



function move(height, walk){
	person.y = height;
	person.x = walk;
}

jump(20, 80);
console.log(person.y, person.x);
jump(30, 180);
console.log(person.y, person.x);

