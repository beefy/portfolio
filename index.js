var s_words = ["Saber","Sabotage","Sacrifice","Sage","Saga","Salamander","Salami","Salon","Sanction","Sandalwood","Sandpaper","Sandwich","Sanitation","Sanity","Sapling","Satellite","Satin","Sauce","Sauerkraut","Sausage","Savior","Saw","Sawdust","Sawmill","Saxophone","Sea","Satyr","Shady","Siren","Stick","Swan","Savanna","Sandhill","Saddle","Seal","Sheep","Snake","Spot","Squirrel","Stripe"];

var n_words = ["Naming","Napping","National","Native","Natty","Naturalized","Naval","Nappy","Nativist","Natural","Nameless","Narrative","Nautical","Navigational","Narwhal","Neofiber","Neomy","Newt","Nestor","Needlefish","Naga","Naiad","Neck","Nymph"];

var s_num = Math.floor(Math.random() * (s_words.length));
var n_num = Math.floor(Math.random() * (n_words.length));
$('#whoamI')[0].innerText = n_words[n_num] + " " + s_words[s_num];