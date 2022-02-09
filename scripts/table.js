const fs = require('fs');

module.exports = {
    table: (t, r) => { 
        var total = [];
        var table = JSON.parse(fs.readFileSync("tables/" + t + ".json"));

        // Roll for coins
        if (table['coin']) {
            
        }
        // Roll for loot (including coins)
        if (table['loot']) {
            
        }
        
    }
}