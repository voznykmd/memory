
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
var memory_color_ids = [];
var colors_flipped = 0;
Array.prototype.memory_color_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	colors_flipped = 0;
	var output = '';
    memory_array.memory_color_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="color_'+i+'" onclick="memoryFlipColor(this,\''+memory_array[i]+'\')"></div>';

	}
	document.getElementById('memory_board').innerHTML = output;

}
function memoryFlipColor(color,val){
	if(color.innerHTML == "" && memory_values.length < 2){
		color.style.background = val;
		color.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_color_ids.push(color.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_color_ids.push(color.id);
			if(memory_values[0] == memory_values[1]){
				colors_flipped += 2;
				// Clear both arrays
				memory_values = [];
        memory_color_ids = [];
				// Check to see if the whole board is cleared
				if(colors_flipped == memory_array.length){
					alert("Вітаю! Ви це зробили. Cпробуйте знову.");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 colors back over
				    var color_1 = document.getElementById(memory_color_ids[0]);
				    var color_2 = document.getElementById(memory_color_ids[1]);
				    color_1.style.background = 'no-repeat';
            	    color_1.innerHTML = "";
				    color_2.style.background = 'no-repeat';
            	    color_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            memory_color_ids = [];
				}
				setTimeout(flip2Back, 900);
			}
		}
	}
}
