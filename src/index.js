// Solicita o nome do herói
const nome = prompt("Digite o nome do herói:");
let xp = 500;  // XP inicial
const xpPorIteracao = 500;  // Incremento de XP em cada iteração
const xpMaximo = 11000;     // Limite máximo de XP

// Função para determinar o nível do herói com base no XP
function determinarNivel(xp) {
    if (xp < 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

// Laço de repetição para simular a progressão do herói até o XP máximo
while (xp <= xpMaximo) {
    let nivel = determinarNivel(xp);
    console.log(`O Herói de nome ${nome} está no nível de ${nivel} com ${xp} XP.`);
    
    // Simula o ganho de experiência em cada iteração
    xp += xpPorIteracao;
}

console.log(`O Herói de nome ${nome} alcançou o nível máximo de Radiante!`);
