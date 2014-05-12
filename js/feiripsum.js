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

scenes.push({
    text : "E tem mais, Comissário. Eu e Robin descobrimos que sua mãe tmabém é" +
           " puta. Puta que pariu então eu sou um viado! To fudido eu preciso " +
           "ir embora pra casa... Chefe O'Hara, como é que eu faço? Não faz " +
           "nada, Comissário, eu e Robin vamos cuidar de tudo. Quando nós " +
           "descobrirmos alguma coisa vamos dizer ao senhor. Não se preocupe," +
           " eu e Robin somos a dupla dinâmica. Ah, dupla dinâmica é o caralho," +
           " vocês são dois filho da puta. Eles são dois viado, né? Vambora," +
           " Robin! Vambora!"
});

scenes.push({
    text : "Hmm, como é que tá aí, Robin? Essa porcaria... Essa porcaria num" +
    		" funciona, porra! É claro que funciona, Robin! Funciona nada," +
    		" esse pau velho tá podre. Porra! Caralho, essa merda não" +
    		" funciona! Robin, você é um garoto, não sei se pode ficar" +
    		" falando palavrão. Não enche o saco! Porra! Merda! Você é um" +
    		" menino ainda! Hã... eu não acredito, essa merda não funciona!" +
    		" Claro que funciona! Você é que não sabe mexer em porra" +
    		" nenhuma! Eu não aguenta mais essa merda de batcaverna! Porra!" +
    		" Só eu que faço tudo nesse merda... Saco! Vou embora, vou" +
    		" embora daqui! Merda! Saco!"
});

scenes.push({
    text : "Mal agradecido... Vou te colocar num colégio interno. Ah vá tomar" +
    		" no cu! Robin, você me mandou tomar no cu? Eu não acredito no " +
    		"que eu eu ouvi, não pode ser verdade o que eu escutei agora..." +
    		" Você é um menino ainda, Robin, eu te criei. Tá bom, tá bom, " +
    		"é verdade sim, não enche o saco. Nós precisamos bolar um plano" +
    		" para pegar o coringa, Robin. Eu sei de um plano. Eu também " +
    		"sei, seu porra. Chega de brincadeiras! Vamos até a casa do " +
    		"coringa, eu e você. Até a casa do coringa? Fazer o que lá? " +
    		"Porra! Fazer o que naquela merda? Eu sei de um plano, Robin." +
    		" Você vai entrar no quarto dele... Não, correção. Você vai se" +
    		" fantasiar como mulher do coringa, você vai dormir uma noite" +
    		" com o coringa! Você vai se fantasiar de viado! Merda..."
});

scenes.push({
    text : "Bátima, tá me escutando seu bicha? Seu puto! Vamos parar com esse" +
    		" xingamento, hein! Liga o radinho então nessa merda. Deixa eu" +
    		" ver essa porra aqui... Ué, Robin, me dê sua localização por" +
    		" favor, não estou entendendo nada do que tá escrito aqui..." +
    		" Hmm, tá bom... Nossa, o Robin, aquele viadinho! Robin viadinho" +
    		"? Quem é esse cara, porra? Hã? Olá putinha, tudo bem? Vamo " +
    		"transar hoje? Vamo comer uma bucetinha hoje? Que isso, Robin?" +
    		" Você nunca falou assim comigo, você é viadinho! Você é um " +
    		"viado! Viado é a puta que pariu, sai dessa! Vamo, quero comer" +
    		" seu cu hoje, sua gostosa! Quem é o maconheiro aí? Olha aqui," +
    		" meu, maconheiro não hein! Haha engraçadinho você hein? Muito" +
    		" engraçadinho pro meu gosto, viu? Viado! Ah, esse cara é babaca!" +
    		" Hã? Hmm, tá na hora de ir embora já... Você não vai sair, não," +
    		" sua biscate, enquanto você não der pra mim! Entendeu, sua " +
    		"filha da puta? Que isso, Robin, você nunca falou assim comigo" +
    		" seu filho da puta! Viadinho!"
});

scenes.push({
    text : "Ah, cala a boca sua biscate, se não você vai tomar um cacete aqui" +
    		" já já, hein? Olha aqui, ô muleque! Você quer um cigarro? Dá" +
    		" aí, vai. Dá essa porra aí. Só se for maconha! Acende essa" +
    		" merda logo! Porra, essa merda não é maconha! Essa porra..." +
    		" eu quero é maconha! Ai eu quero trepar com você, Robin! Ah," +
    		" quer trepar com ele, é? Só com ele! Só com ele! Cala a boca," +
    		" sua puta! Olha lá como é que você fala com ela, hein, rapá!" +
    		" Ah, você não é aquele viadinho, não? Sou sim, e daí? E daí" +
    		" que você vai trepar com teu pai, vai bater uma punhetinha" +
    		" pro batima, tá? Cala a boca seu filha da puta se não eu vou" +
    		" te acertar lá fora, hein! Ah, acertar o caralho, porra, você" +
    		" vai tomar no seu cu, tá? Vai se fuder, viadinho, porra! Ah," +
    		" engraçadinho, ah! Engraçadinho é o caralho, seu filha da" +
    		" puta, te acerto lá fora, maconheiro! Tchau, hein, putinha " +
    		"relaxada, te como ainda. Viado. Vai tomar no cu. Nossa, como" +
    		" é que você fala assim com ele, hein? Você não viu que esse" +
    		" cara é viado, pô, ele tá aqui pra... é espião esse cara aí," +
    		" porra! Esse cara tá a mando do Batima aqui, pô! Até minha vó" +
    		" sabe que esse cara é bicha! É um viado corno manso! Tá" +
    		" escrito na cara dele que é um corno, quer fuder com todo " +
    		"mundo, quer fuder com você! Ah, vá tomar no cu, vou embora " +
    		"daqui também! Vaca. Viado..."
});

scenes.push({
    text : "Batima, eu não aguento mais lá em cima, tá um puta puteiro do" +
    		" caralho! Puteiro não, Robin, modere o seu linguajar. É memo," +
    		" a tia tá dando a buceta lá! Então, vamos fazer uma coisa, " +
    		"vamo buscar umas putas pra trazer pra cá, vai! Isso aí, vamo" +
    		" lá! Vamo pegar umas puta!"
});

scenes.push({
    text : "Hmm hoje eu vou comer o bátima, vou fuder ele direitinho, vou" +
    		" tirar o pinto dele fora! E aquela biscate ali? Você não " +
    		"vai comer ela hoje não? Hein? Ah, deixa pra lá, essa menina" +
    		" não é de nada! Não gosto de mulher, gosto mesmo é do Bátima!" +
    		" Esse cara pra mim é viado, hein? Hein? Minha filha, vem cá!" +
    		" Sabe o que é isso aqui, minha filha? Isso aqui é pra amolecer" +
    		" pinto! Isso aqui cai pinto! É um lico que você passa na " +
    		"cabeça do pau! Ai, eu nem acredito que isso é pra cair pinto." +
    		" É... mas você vai passar isso na cabeça do pau do Bátima!" +
    		" Não! Do Bátima? Ai, eu nem acredito! Agora você vai fazer o" +
    		" seguinte... Você vai pegar o Bátima e passar na... Faço tudo" +
    		" que você quiser! Queridinho da mamãe! Tesudinho, lindo! Ah," +
    		" gracinha... Esse cara é viado, hein? Viado! Opa, opa, que" +
    		" negócio é esse de me chamar de viado aí, hein? Ah, o Bátima" +
    		" tá chegando! Vamo acertar ele direitinho agora, hein?"
});

scenes.push({
    text : "3 horas! Porra, 3 horas já, caramba! Eu sei ver hora, porra... Bom," +
    		" o negócio é o seguinte, o pau vai comer solto aqui. Moçada," +
    		" todo mundo pra trás. É, o pau vai comer solto aqui, o cacete" +
    		" vai comer aqui, vamo levantar o pau nessa merda! Robin, modere" +
    		" o linguajar, por favor. Muito bem. Você trouxe a moeda que" +
    		" eu pedi? Tá aqui, tá aqui, na minha mão, olha ela aqui. Então" +
    		" vai naquela máquina e liga essa porra. Hmm, deixa eu ver..." +
    		" Enfia essa porra aqui, agora deixa eu ver... Aqui, isso aqui," +
    		" isso aqui... Ah, o Bátima chegou! Agora eu vou tirar o pinto" +
    		" dele! O Bátima tá fudido na minha mão agora! Agora, agora," +
    		" agora!"
});

scenes.push({
    text : "Uhhuhuhuhuuhhu! Isso é um assalto, seu filho da puta! Vira a" +
    		" bundinha pra mim, vira, Bátima! Viado, bicha! Seus dois" +
    		" bichas! Rápido, Robin, para trás do Bat-escudo! Dessa vez" +
    		" eu acerto esse filho da puta! Bátima, daonde você tirou" +
    		" esse Bat-escudo, hein? Porra, daonde você tirou essa merda?" +
    		" Você tá muito engraçadinho, hein, Robin? Lógico que foi do" +
    		" cu! Podia ser mais daonde? Vou saber onde você guarda essa" +
    		" porra? Engraçadinho! Você tá muito metido, hein, Robin! Eu" +
    		" te acerto hoje lá na bat-caverna, viu? Ah, deixa pra lá seu" +
    		" filha da puta! Você me chamou de novo de filho da puta? Não" +
    		" acredito! Viadinho filho da puta! Seu maconheiro do caralho," +
    		" cala a boca!"
});

scenes.push({
    text : "Robin, desculpa... Nós somos a dupla dinâmica, temos que lutar em " +
    		"prol da justiça. Hmm, vai se fuder seu filho da puta! Outra " +
    		"vez? Não acredito que você está me xingando outra vez, Robin!" +
    		" Eu vou te fuder agora, hein! Sai daqui, filha da puta! Não" +
    		" enche o saco seu bicha! Você não faz nada comigo não, seu" +
    		" filho da puta! Filha da puta? Seu... calaboca! Não acredito!" +
    		" Seu viado do caralho, filho da puta! Vem me pegar! Robin, se" +
    		" você não sair daqui já, eu vou te comer a bunda aqui mesmo," +
    		" hein! Viado, corno manso! Sai daqui! Vem me pegar! Perae," +
    		" perae! Esqueci uma coisa! Meu filho, você vende camisinha" +
    		" aqui? Eu quero uma camisinha. É que eu preciso comer o Robin" +
    		" hoje à noite..."
});

scenes.push({
    text : "Alô. É sim, tudo bem? É da casa do caralho. É o chefe? Já vai..." +
    		" Chefe! Já vai, já vai, já vai! Ô chefe, anda, porra! É pra " +
    		"mim, é pra mim, é pra mim! Alô. Quem tá falando? Ah, a tia" +
    		" do Bátima. Que que você quer, sua velha puta! Porra! Quer" +
    		" que eu te coma? Mas como, eu comer você? Ah, tá bom, vamo" +
    		" fazer o seguinte... comer a senhora aí na mansão Wayne? Eu" +
    		" vô, eu vô. Ah, eu vô agora mesmo! Agora mesmo, eu vô! Eu" +
    		" vô! A senhora dá o cu pra mim, tá? Eu vô! Eu vou comer a" +
    		" tia do Bátima! Uhuhuhuhuhu Agora mesmo eu vou lá, eu vou lá!"
});

scenes.push({
    text : "Ah, to morrendo de cansaço! Vambora meninas, vambora! Eu vou " +
    		"embora, tchau minha querida... Ah, deixa eu pegar esse " +
    		"negócio do coringa de amolecer pinto, ai que tesão! Tira " +
    		"essa placa... Aha! Minha filha me dá esse frasco aqui! Sua " +
    		"putinha relaxada! Me dá esse frasco aqui, minha filha! A " +
    		"senhora... Não enche o saco, bicha! Ih, fudeu, Robin! Passar" +
    		" um perfuminho, hmm... Hmm, perfume. Aahn... Hã? Vamo, Robin," +
    		" vamo levar ela pra Bat-caverna!"
});

scenes.push({
    text : "Chefe... Que foi? Eu to cansado pra caralho! Só eu trabalho nessa" +
    		" porra! Merda! Dou o cu aqui todo dia! É... eu não posso" +
    		" fazer mais nada, eu to ficando velho, to acabado. Meu pinto" +
    		" não sobe mais... Preciso fazer alguma coisa pra me alegrar." +
    		" Eu sou um palhaço, eu sou o coringa, um palhaço, o joker!" +
    		" Você quer um charuto, meu filho? É Havano. Quero, obrigado!" +
    		" Ahahaha! Enganei o bobo na casca do ovo, eu sou um bobo, eu" +
    		" sou um palhaço! Por falar em palhaço, que horas são, hein?" +
    		" 5:30. Ah, tá na hora de comer a tia do Bátima! Eu vou comer" +
    		" a tia do Bátima! Eu sou o primeiro, eu sou o primeiro! Vamo" +
    		" lá! Vamo lá! Vamo lá!"
});

scenes.push({
    text : "Ae moçada, pega ae, pega ae! Arremessa ae logo! Vamo jogar, vamo" +
    		" jogar! Moçada, vamo parar com isso aqui, ,vai, já encheu" +
    		" o saco esse jogo. Porra, vamo fazer uma suruba então. Suruba," +
    		" aonde porra?  Em qualquer lugar, porra! Vambora! Vambora!" +
    		" Alguém tem uma moeda aí? Vamo ver se essa porra tá " +
    		"funcionando. Achei a moeda, deixa eu ver... Ué, que porra é " +
    		"essa aqui? Lê isso logo! Lê essa porra logo! Olha, meu, é um" +
    		" documento, tá escrito que o Bátima é viado! Viado? Uhuhuhu!" +
    		" Seus bichas! Ah, vou contar pro Bátima, hein, vou contar pro" +
    		" Bátima que vi vocês pegando isso, viu? Seus cornos mansos..." +
    		" Viadinhos! Quem é esse cara, hein? Ah, você não sabe quem eu" +
    		" sou, é? Cala a boca, seu maconheiro filho da puta, senão vai" +
    		" tomar porrada, hein, seu filho da puta! Maconheiro! Eu vou te" +
    		" rachar, hein, viado! Viado é a puta que pariu, hein! Vamo" +
    		" pegar esses cara de pau, vai!"
});

scenes.push({
    text : "Vocês que sabe, quer me pegar de pau, pega, mas depois aguenta as" +
    		" consequencias, viu, seus viados? Bichas! Pegar esses caras de" +
    		" pau, porra! Viado é a puta que pariu, vamo dar um cacete" +
    		" nesses viados! Ah, vocês querem que o Bátima venha aqui, né?" +
    		" Pegar vocês, salvar vocês. Não quero nada, porra! Vamo pegar" +
    		" esses cara de pau ou não? Ah, mas o Bátima morreu, viu, seus" +
    		" viados? Ele morreu. Às quatro horas da tarde, eu tirei o" +
    		" pinto dele fora! Ah! Falar em tirar o pinto dele fora, vou" +
    		" tirar o pinto de vocês também, o que vocês acham, hein? Hã?"
});

scenes.push({
    text : "Não se preocupem, rapazes! Eu mesmo coloquei esse documento aí! " +
    		"Esse documento não prova nada! Só prova que o coringa é um" +
    		" filho da puta! E por falar em filho da puta, o Robin vai dar" +
    		" o cu pra todo mundo hoje! O Robin é um viado! Só que um de " +
    		"cada vez, não precisa espalhar. Vamo pegar esses filho da puta" +
    		" agora! Vamo, vamo, vamo! Ah, o pau vai comer solto por aqui!" +
    		" Ai, meu pinto! Ai, meu pinto! Ai meu saco! Meu saco! Ah," +
    		" agora aguenta essa aqui, Bátima, pega essa, pega essa! " +
    		"Peidorrento! Eu te pego, filho da puta! Ai, ai, ai, me enrolou" +
    		" todo, Bátima, me salve, esse filho da puta me enrolou," +
    		" eu to fudido, agora ele vai comer meu cu! Me solta, me solta," +
    		" merda! "
});

scenes.push({
    text : "Vou usar esse spray pra tirar o seu pinto fora, Bátima, seu corno!" +
    		" Ha! Não adianta, coringa! Antes de sair da Bat-caverna eu" +
    		" tirei o meu pinto fora! Eu não tenho pinto! Não sei se" +
    		" você sabe disso... Eu sou eunuco! Você tá fudido agora" +
    		" comigo! Ah! Ué, que que tá acontecendo aqui, hein? Vamo" +
    		" ver, vamo ver. O que você fez com ele, hein, Bátima?" +
    		" Eu não fiz nada, ele que começou a brincadeira. Ele" +
    		" que começou e agora se fudeu! Bom, moçada, eu vou embora" +
    		" que eu tenho mais o que f Vamo embora dessa merda, tá" +
    		" fedendo já!"
});

scenes.push({
    text : "Querida, onde você vai? Adeus, Robin! Onde você vai, minha filha?" +
    		" Onde você vai, porra? Não vai dar mais pra mim hoje? Você é" +
    		" um tesão, hein! Não vai embora, não! Uuuuh, não fala assim" +
    		" que eu fico ruim! Robin, eu não aguento mais você, seu " +
    		"filho da puta! Ah, que isso, minha filha, não fala assim" +
    		" de mim, não. Pelo amor de deus, eu tenho pinto grande, você" +
    		" não acha? Ah, meu pau é grande pra caralho, você não acha?" +
    		" Porra! Clotilde, o camburão está esperando. O camburão? " +
    		"Olha, eu queria trepar era com o senhor, viu? Você não quer" +
    		" dar pra mim, não? Não, minha filha, eu não sou disso... eu" +
    		" sou viado, não sei se você sabe. É, ele é viado, você não " +
    		"sabia dessa, não? Eu não te falei, não? Cala boca, viado!" +
    		" Ai, mas não faz mal, assim mesmo serve. Eu faço uma " +
    		"chupetinha, você não deixa, não? Tchau, tesão. Adeus, viu?" +
    		" Tesuda, não vai embora não. Ai, eu quero dar pro senhor," +
    		" viu? O senhor deve ter um pintão! Eu quero dar pro senhor!" +
    		" Vou pegar no seu pinto! Ela pega mesmo, hein! Cuidao, hein!" +
    		" Essa juventude de hoje está muito mudada."
});

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};