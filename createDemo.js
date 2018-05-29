const db = connect('127.0.0.1:27017/demo');

db.atheletes.insert({firstName: 'Jayson', lastName: 'Tatum', sport: 'basketball', nationality: 'US', gender: 'M'});
db.atheletes.insert({firstName: 'Tom', lastName: 'Brady', sport: 'football', nationality: 'US', gender: 'M'});
db.atheletes.insert({firstName: 'Diego', lastName: 'Fagundez', sport: 'soccer', nationality: 'US', gender: 'M'});
db.atheletes.insert({firstName: 'Ashley', lastName: 'Wagner', sport: 'figure skating', nationality: 'US', gender: 'F'});
db.atheletes.insert({firstName: 'Serena', lastName: 'Williams', sport: 'tennis', nationality: 'US', gender: 'F'});
db.atheletes.insert({firstName: 'Roger', lastName: 'Federer', sport: 'tennis', nationality: 'Switzerland', gender: 'M'});
db.atheletes.insert({firstName: 'Alex', lastName: 'Morgan', sport: 'soccer', nationality: 'US', gender: 'F'});
db.atheletes.insert({firstName: 'Maya', lastName: 'Moore', sport: 'basketball', nationality: 'US', gender: 'F'});
