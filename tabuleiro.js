function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	// Preços das casas
	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	// Esta função ajusta o nome de uma propriedade.
	document.getElementById("cell1name").textContent = "Bangu"; 

	// Adiciona imagens de ícones
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	// Texto para Companhias (Light / Naturgy)
	return '&nbsp;&nbsp;&nbsp;&nbsp;Se 1 "Companhia" é sua, o aluguel é 4x o valor dos dados.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Se ambas "Companhias" são suas, o aluguel é 10x o valor dos dados.';
}

function transtext() {
    // Texto para Transportes (Metrô, Supervia, etc)
	return '<div style="font-size: 14px; line-height: 1.5;">Aluguel<span style="float: right;">R$25.</span><br />Se 2 Transportes são seus<span style="float: right;">50.</span><br />Se 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />Se 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

// ### INÍCIO DA MUDANÇA DE LÓGICA (ESTACIONAMENTO GRÁTIS) ###

function luxurytax() {
    // Mudei de "Luxury Tax" para "IPVA"
	addAlert(player[turn].name + " pagou R$100 de IPVA.");
	player[turn].pay(100, 0);
	
	// Adiciona dinheiro ao pote do Estacionamento Grátis
	freeParkingPot += 100;
	addAlert("R$100 foram adicionados ao Estacionamento Grátis!");

	$("#landed").show().text("Você caiu no IPVA. Pague R$100.");
}

function citytax() {
    // Mudei de "City Tax" para "IPTU"
	addAlert(player[turn].name + " pagou R$200 de IPTU.");
	player[turn].pay(200, 0);

	// Adiciona dinheiro ao pote do Estacionamento Grátis
	freeParkingPot += 200;
	addAlert("R$200 foram adicionados ao Estacionamento Grátis!");

	$("#landed").show().text("Você caiu no IPTU. Pague R$200.");
}

// ### FIM DA MUDANÇA DE LÓGICA ###


var square = [];

// *** CUSTOMIZAÇÃO DO TABULEIRO (RIO DE JANEIRO) ***

square[0] = new Square("INÍCIO", "RECEBA R$200 AO PASSAR.", "#FFFFFF");
square[1] = new Square("Bangu", "R$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Cofre", "SIGA AS INSTRUÇÕES NA CARTA", "#FFFFFF");
square[3] = new Square("Campo Grande", "R$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("IPTU", "Pague R$200", "#FFFFFF");
square[5] = new Square("SuperVia", "R$200", "#FFFFFF", 200, 1);
square[6] = new Square("Lapa", "R$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Sorte", "SIGA AS INSTRUÇÕES NA CARTA", "#FFFFFF");
square[8] = new Square("Santa Teresa", "R$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Urca", "R$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Apenas Visitando", "", "#FFFFFF");
square[11] = new Square("Méier", "R$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Light", "R$150", "#FFFFFF", 150, 2);
square[13] = new Square("Tijuca", "R$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Grajaú", "R$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Metrô-Rio", "R$200", "#FFFFFF", 200, 1);
square[16] = new Square("Recreio", "R$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Cofre", "SIGA AS INSTRUÇÕES NA CARTA", "#FFFFFF");
square[18] = new Square("Jacarepaguá", "R$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Barra da Tijuca", "R$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Estacionamento Grátis", "", "#FFFFFF");
square[21] = new Square("Flamengo", "R$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Sorte", "SIGA AS INSTRUÇÕES NA CARTA", "#FFFFFF");
square[23] = new Square("Botafogo", "R$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Copacabana", "R$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("VLT Carioca", "R$200", "#FFFFFF", 200, 1);
square[26] = new Square("Jardim Botânico", "R$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Gávea", "R$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Naturgy", "R$150", "#FFFFFF", 150, 2);
square[29] = new Square("São Conrado", "R$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Vá para a Prisão", "Vá direto para a Prisão. Não passe pelo Início. Não receba R$200.", "#FFFFFF");
square[31] = new Square("Joá", "R$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Itanhangá", "R$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Cofre", "SIGA AS INSTRUÇÕES NA CARTA", "#FFFFFF");
square[34] = new Square("Grumari", "R$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("BRT", "R$200", "#FFFFFF", 200, 1);
square[36] = new Square("Sorte", "SIGA AS INSTRUÇÕES NA CARTA", "#FFFFFF");
square[37] = new Square("Ipanema", "R$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("IPVA", "Pague R$100", "#FFFFFF");
square[39] = new Square("Leblon", "R$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

// *** AQUI COMEÇA A TRADUÇÃO E CUSTOMIZAÇÃO DAS CARTAS ***

var communityChestCards = []; // Cartas "Cofre"
var chanceCards = []; // Cartas "Sorte"

// Cartas Cofre
communityChestCards[0] = new Card("Saída Livre da Prisão. Esta carta pode ser guardada até ser usada ou vendida.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Você ganhou o concurso Garota de Ipanema. Receba R$10.", function() { addamount(10, 'Cofre');});
communityChestCards[2] = new Card("Venda de ações da Petrobrás. Você recebe R$50.", function() { addamount(50, 'Cofre');});
communityChestCards[3] = new Card("Seguro de vida vence. Receba R$100.", function() { addamount(100, 'Cofre');});
communityChestCards[4] = new Card("Restituição do Imposto de Renda. Receba R$20.", function() { addamount(20, 'Cofre');});
communityChestCards[5] = new Card("Fundo de férias vence. Receba R$100.", function() { addamount(100, 'Cofre');});
communityChestCards[6] = new Card("Você herdou R$100.", function() { addamount(100, 'Cofre');});
communityChestCards[7] = new Card("Receba R$25 por serviços de consultoria.", function() { addamount(25, 'Cofre');});
communityChestCards[8] = new Card("Pague taxas hospitalares de R$100.", function() { subtractamount(100, 'Cofre');});
communityChestCards[9] = new Card("O caixa eletrônico da praia te deu R$200 a mais. Receba!", function() { addamount(200, 'Cofre');});
communityChestCards[10] = new Card("Pague a taxa escolar de R$50.", function() { subtractamount(50, 'Cofre');});
communityChestCards[11] = new Card("Taxa médica. Pague R$50.", function() { subtractamount(50, 'Cofre');});
communityChestCards[12] = new Card("É seu aniversário. Receba R$10 de cada jogador.", function() { collectfromeachplayer(10, 'Cofre');});
communityChestCards[13] = new Card("Avance até o \"INÍCIO\" (Receba R$200).", function() { advance(0);});
communityChestCards[14] = new Card("Você foi cobrado por reparos de rua. R$40 por casa. R$115 por hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Vá para a Prisão. Vá direto para a Prisão. Não passe pelo \"INÍCIO\". Não receba R$200.", function() { gotojail();});

// Cartas Sorte
chanceCards[0] = new Card("SAÍDA LIVRE DA PRISÃO. Esta carta pode ser guardada até ser usada ou trocada.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Faça reparos gerais em todas as suas propriedades. Para cada casa, pague R$25. Para cada hotel, R$100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Multado por estacionar no calçadão. Pague R$15.", function() { subtractamount(15, 'Sorte');});
chanceCards[3] = new Card("Você foi eleito presidente do conselho. Pague a cada jogador R$50.", function() { payeachplayer(50, 'Sorte');});
chanceCards[4] = new Card("Volte três casas.", function() { gobackthreespaces();});
chanceCards[5] = new Card("AVANCE ATÉ A COMPANHIA MAIS PRÓXIMA (Light ou Naturgy). SE NÃO TIVER DONO, compre. SE TIVER DONO, jogue os dados e pague 10x o valor.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Você achou uma carteira na Lapa. Receba R$50.", function() { addamount(50, 'Sorte');});
chanceCards[7] = new Card("AVANCE ATÉ O TRANSPORTE MAIS PRÓXIMO. Se NÃO TIVER DONO, compre. Se TIVER DONO, pague o dobro do aluguel.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pague imposto de pobreza de R$15.", function() { subtractamount(15, 'Sorte');});
chanceCards[9] = new Card("Faça uma viagem pela SuperVia. Se você passar pelo \"INÍCIO\", receba R$200.", function() { advance(5);}); // Ajustei o nome para SuperVia (square[5])
chanceCards[10] = new Card("AVANCE até o Leblon.", function() { advance(39);}); // Ajustei o nome para Leblon (square[39])
chanceCards[11] = new Card("AVANCE até Copacabana. Se você passar pelo \"INÍCIO\", receba R$200.", function() { advance(24);}); // Ajustei o nome para Copacabana (square[24])
chanceCards[12] = new Card("Seu empréstimo de construção venceu. Receba R$150.", function() { addamount(150, 'Sorte');});
chanceCards[13] = new Card("AVANCE ATÉ O TRANSPORTE MAIS PRÓXIMO. Se NÃO TIVER DONO, compre. Se TIVER DONO, pague o dobro do aluguel.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("AVANCE até o Méier. Se você passar pelo \"INÍCIO\", receba R$200.", function() { advance(11);}); // Ajustei o nome para Méier (square[11])
chanceCards[15] = new Card("Vá para a Prisão. Vá Direto para a Prisão. Não passe pelo \"INÍCIO\". Não receba R$200.", function() { gotojail();});