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
