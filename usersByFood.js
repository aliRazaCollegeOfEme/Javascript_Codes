// Map users by food into an object using javascipt .map()

var myUsers = [
    {name: 'ali', likes: 'grilled chicken'},
	{name: 'raza', likes: 'cold beer'},
	{name: 'sam', likes: 'chocolate'}
]

var usersByFood = myUsers.map((user) => {
	var container = {};
	container[user.name] = user.likes;
	container.age = user.name.length * 10;

	return container;
});
