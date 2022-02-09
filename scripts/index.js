const { roll } = require('./roll.js');
const { table } = require('./table.js');

let actions = document.querySelectorAll(".sidebar__action");
for (var i = 0; i < actions.length; i++) {
    actions[i].addEventListener('click', (e) => { 
        let table_id = e.target.id;
        let dice_roll = roll(1, 100);

        table(table_id, dice_roll);

    });
}
