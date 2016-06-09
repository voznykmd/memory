
var memory_array = [];
memory_array [0] = 'red';
memory_array [1] = 'red';

memory_array [2] = 'blue';
memory_array [3] = 'blue';

memory_array [4] = 'green';
memory_array [5] = 'green';

memory_array [6] = 'yellow';
memory_array [7] = 'yellow';

memory_array [8] = 'pink';
memory_array [9] = 'pink';

memory_array [10] = 'purple';
memory_array [11] = 'purple';

memory_array [12] = 'lime';
memory_array [13] = 'lime';

memory_array [14] = 'aqua';
memory_array [15] = 'aqua';

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';

	}
	document.getElementById('memory_board').innerHTML = output;

}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = val;
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
        memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Вітаю! Ви це зробили. Cпробуйте знову.");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            memory_tile_ids = [];
				}
				setTimeout(flip2Back, 900);
			}
		}
	}
}
