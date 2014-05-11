$(document).ready(function(){
    $('#form-generate').submit(function(e) {
       e.preventDefault();
       console.log("Clicou");
       var total_scenes = $('#scenes').val();
       console.log(total_scenes);
       var n_scenes = Math.min(scenes.length,total_scenes);
       var list = [];
       for (var i = 0; i < scenes.length; i++) {
           list.push(i);
       }
       var shuffled = shuffle(list);
       console.log(shuffled);
       // Clear container
       $('#text-generated-wrapper').html('');
       for (var i = 0; i < n_scenes; i++) {
           $('#text-generated-wrapper').append('<p>'+scenes[shuffled[i]].text+'</p>');  
       }
    });
});

var scenes = [];
scenes.push({
   text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus " +
   	  "ultrices egestas ligula, sit amet bibendum sapien mattis id. " +
   	  "Vestibulum at neque accumsan, congue magna at, tempus dolor. " +
   	  "Pellentesque et varius turpis, non bibendum risus. Aenean facilisis" +
   	  " eros urna. Donec ultricies vehicula nisl vel luctus. In nulla" +
   	  " turpis, dignissim sed dignissim interdum, dignissim varius arcu. " +
   	  "In nec tellus enim. Fusce vitae nisi a felis scelerisque rutrum sed" +
   	  " eget tortor. Vestibulum ut risus mi. Nulla tincidunt nibh ac" +
   	  " mauris egestas semper. Vivamus ac accumsan nisl."
});

scenes.push({
    text : "Pellentesque habitant morbi tristique senectus et netus et " +
	   "malesuada fames ac turpis egestas. Nunc nisi enim, tempus vitae" +
	   " scelerisque ac, mollis eget nulla. Nullam placerat arcu" +
	   " dignissim eros accumsan, nec faucibus lectus volutpat. " +
	   "Morbi in tellus in eros pharetra dictum ut vitae metus." +
	   " Vestibulum cursus, lectus quis sodales fermentum, elit massa " +
	   "tincidunt elit, in dapibus nibh nisl non nulla. Donec convallis" +
	   " dolor nec tellus cursus, nec dignissim massa fermentum."
});

scenes.push({
    text : "Pellentesque habitant morbi tristique senectus et netus et " +
           "malesuada fames ac turpis egestas. Nunc nisi enim, tempus vitae" +
           " scelerisque ac, mollis eget nulla. Nullam placerat arcu" +
           " dignissim eros accumsan, nec faucibus lectus volutpat. " +
           "Morbi in tellus in eros pharetra dictum ut vitae metus." +
           " Vestibulum cursus, lectus quis sodales fermentum, elit massa " +
           "tincidunt elit, in dapibus nibh nisl non nulla. Donec convallis" +
           " dolor nec tellus cursus, nec dignissim massa fermentum."
});

scenes.push({
    text : "Pellentesque habitant morbi tristique senectus et netus et " +
           "malesuada fames ac turpis egestas. Nunc nisi enim, tempus vitae" +
           " scelerisque ac, mollis eget nulla. Nullam placerat arcu" +
           " dignissim eros accumsan, nec faucibus lectus volutpat. " +
           "Morbi in tellus in eros pharetra dictum ut vitae metus." +
           " Vestibulum cursus, lectus quis sodales fermentum, elit massa " +
           "tincidunt elit, in dapibus nibh nisl non nulla. Donec convallis" +
           " dolor nec tellus cursus, nec dignissim massa fermentum."
});
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};