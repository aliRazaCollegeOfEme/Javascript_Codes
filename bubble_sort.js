let sample_array = Array(10).fill().map((_, index) => Math.floor(Math.random() * 10));

console.log(`Array before sorting: `, sample_array);

for(let outer = 0; outer < sample_array.length - 1; outer++){
    for(let inner = 1; inner < sample_array.length - 1 - outer - 1; inner++){
        if(sample_array[outer] > sample_array[inner]){
            [sample_array[outer], sample_array[inner]] = [sample_array[inner], sample_array[outer]];
        }
    }
}

console.log(`Array after sorting: `, sample_array);
