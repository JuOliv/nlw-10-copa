function createGame(jogador1, hora, jogador2){
    return `
        <li>
            <img
                src="./assets/icon=${jogador1}.svg"
                alt="Bandeira da ${jogador1}"
            />
            <strong>${hora}</strong>
            <img
                src="./assets/icon=${jogador2}.svg"
                alt="Bandeira de ${jogador2}"
            />
        </li>
    `
}
let delay = -0.4;

function createCard(data, semana, jogos){
    delay = delay +0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${semana}</span></h2>
            <ul>
                ${jogos}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createCard(
            `24/11`,
            `quinta`,
            createGame(`switzerland`, `07:00`, `cameroon`) +
            createGame(`uruguay`, `10:00`, `south korea`) +
            createGame(`portugal`, `13:00`, `ghana`) +
            createGame(`brazil`, `16:00`, `serbia`)
        )+
        
        createCard(
            `25/11`,
            `sexta`,
            createGame(`wales`, `07:00`, `iran`) +
            createGame(`qatar`, `10:00`, `senegal`) +
            createGame(`netherlands`, `13:00`, `ecuador`) +
            createGame(`england`, `16:00`, `united states`)
        )+

        createCard(
            "26/11",
            "sábado",
            createGame("tunisia", "07:00", "australia") +
            createGame("poland","10:00", "sahrawi arab democratic republic") +
            createGame("france", "13:00", "denmark") +
            createGame("argentina", "16:00", "mexico")
        )+

        createCard(
            `28/11`,
            `segunda`,
            createGame(`cameroon`, `07:00`, `serbia`) +
            createGame(`south korea`, `10:00`, `ghana`) +
            createGame(`brazil`, `13:00`, `switzerland`) +
            createGame(`portugal`, `16:00`, `uruguay`)
        )