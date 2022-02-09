module.exports = {
    roll: (n, d) => { 

        let total = 0;

        // Roll n-sided die, n amount of times
        for (let i = 0; i < n; i++) {
            total += Math.floor(Math.random() * d) + 1;
        }

        return total;
    }
}