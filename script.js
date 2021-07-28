// Complete the jumpingOnClouds function below.
const jumpingOnClouds = (c, k) => {
    let energy = 100;
    let energyZapped = 2;
    let currentCloud = 0;
    let index;

    while (index !== 0 && energy >= 0) {
        currentCloud === 0 && (index = 0);
        index = (index + k) % c.length;
        energy = c[index] > 0 ?
            energy - 1 - energyZapped : energy - 1;
        currentCloud++;

        console.log('cloud#', currentCloud, 'energy left', energy, 'index', index);
    }

    console.log(energy);
    return energy;
}
