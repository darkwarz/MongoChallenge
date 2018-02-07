function PocketMonsters(name,health,stats,attacks,db) { // function that loads all stats
//monster pikachu
db.monsters.insert({"Name": "Pikachu", "creator": "pokemon", "Health":150, "Last fought": new Date(2018, 2, 1), "Attacks": ["bite","shock","thunder"], "Stats": {"Attack":80, "Defense":30}})
//monster charmander
db.monsters.insert({"Name": "Charmander", "creator": "pokemon", "Health":120, "Last fought": new Date(2018, 2, 1), "Attacks": ["bite","burn","fireball"], "Stats": {"Attack":100, "Defense":20 }})

db.monsters.find() //console log all monsters in collection

db.monsters.find({"Name": "Pikachu"}) // console log by name of monster

db.monsters.find({"Attacks": "bite"}) // console log by attack name

db.monsters.find({"Stats.Defense":20}) // console log by stat defense
}


//lvl3


var mongo = function(db) {

};

{
	"name": "Bat",
	"Level": 4,
	"health": 25,
	"type": "Flying",
	"attacks": ["scratch", "bite"],
	"stats": {
		"attack": 5,
		"defense": 2
	}
	"style": "cool"
}


//1.Write the command that will find all monsters with an attack lower than 10

db.monsters.find({“stats.attack”: {“$lt”: 10}});

//2.Write the command that will find all monsters with a level above 5 but below 15 inclusive

db.monsters.find({level: {"$gte":5, "$lte":15}});

//3.Write the command to find monsters that do not have the “bite” attack.

db.monsters.find({"attacks": "$ne": "bite"}})

//4.Write the command to find monsters with levels less than 6 but only return the name, level and health attributes

db.monsters.find({"level": { "$lt": 6 }},
{ name: true, level: true, health: true });


//5.Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style

db.monsters.find({ "stats.attack": { "$gt": 10, "$lt": 20}},
{ health: false, style: false });


//6.Write the command to find out how many monsters are in the collection.

db.monsters.find();

//7.Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom

db.monsters.find().sort({ "level": -1 });