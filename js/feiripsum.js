$(document).ready(function(){
    $('#form-generate').submit(function(e) {
       e.preventDefault();
       var total_scenes = $('#scenes').val();
       var n_scenes = Math.min(scenes.length,total_scenes);
       var list = [];
       for (var i = 0; i < scenes.length; i++) {
           list.push(i);
       }
       var shuffled = shuffle(list);
       // Clear container
       $('#text-generated-wrapper').html('');
       for (var i = 0; i < n_scenes; i++) {
           $('#text-generated-wrapper').append('<p>'+scenes[shuffled[i]].text+'</p>');  
       }
    });
});

var scenes = [];
scenes.push({
   text : "A cana, chefe! A cana! A cana! As cana filho das puta como é que me" +
   		" descobriram aqui? E o batima porra, agora que eu ia fudê com" +
   		" o batima! Eles tao chegando mais perto! Chegando mais perto..." +
   		" Vamo embora daqui que nós tamo fudido! Vambora! Vambora"
});

scenes.push({
    text : "Hã... que porra é essa aqui, hein? Vamo vê o que tem lá atrás! Vamo" +
    		" lá! Vamo lá vê! A dupla dinâmica? Não, seu guarda, é sua mãe" +
    		" e seu pai vestidos para o baile dos enxutos.Vamo logo com " +
    		"essa porra, seu filho da puta! Tira a gente daqui. Viado!" 
});

scenes.push({
    text : "Puta que o pariu, Batima. Eu não acredito em nenhuma palavra disso..." +
    		" Puta que o pariu, chefe O'Hara. E como é que pode ser verdade" +
    		" uma porra dessa, hein, Batima? Me explica essa porra! É simples," +
    		" comissário, essa fita mostra tudo... Mostra o quê? Caralho..." +
    		" A sua mãe trepando, filha da puta!" 
});

scenes.push({
    text : "Sua mãe sua mulher são duas putas, Comissário. Eu não queria falar" +
    		" nisso mas a verdade é essa... São duas putas pagas. Como puta" +
    		" paga, porra? Puta paga? E agora como é que eu faço? É simples," +
    		" Comissário. Eu e Robino estamos no encalço daquele filho da" +
    		" puta que as comeu. É muito simples, comissário... Ela é uma " +
    		"puta mesmo! O açougueiro comeu ela! Putaque... Mas como? " +
    		"Comissário, eu e Robin descobrimos ontem, colocamos essa fita" +
    		" em seu apartamento para sabermos se o coringa ia aparecer lá" +
    		" mas ela nos traiu. Sua mulher é uma puta mesmo, ela estava" +
    		" dando para o açougueiro. Ela tava trepando com aquele " +
    		"açougueiro cheio de gonorreia!"
});
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};