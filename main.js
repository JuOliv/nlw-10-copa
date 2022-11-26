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
    createCard("20/11", "domingo", createGame("qatar", "0 X 2", "ecuador")) +
    createCard(
        "21/11",
        "segunda",
        createGame("england", "6 X 2", "iran") +
            createGame("senegal", "0 X 2", "netherlands") +
            createGame("united states", "1 X 1", "wales")
    ) +
    createCard(
        "22/11",
        "terça",
        createGame("argentina", "1 X 2", "sahrawi arab democratic republic") +
            createGame("denmark", "1 X 0", "tunisia") +
            createGame("mexico", "0 X 0", "poland") +
            createGame("france", "4 X 1", "australia")
    ) +
    createCard(
        "23/11",
        "quarta",
        createGame("morocco", "0 X 0", "croatia") +
            createGame("germany", "1 X 2", "japan") +
            createGame("spain", "7 X 0", "costa rica") +
            createGame("belgium", "1 X 0", "canada")
    ) +
    createCard(
        `24/11`,
        `quinta`,
        createGame(`switzerland`, `1 X 0`, `cameroon`) +
            createGame(`uruguay`, `0 X 0`, `south korea`) +
            createGame(`portugal`, `3 X 2`, `ghana`) +
            createGame(`brazil`, `2 X 0`, `serbia`)
    ) +
    createCard(
        `25/11`,
        `sexta`,
        createGame(`wales`, `0 X 2`, `iran`) +
            createGame(`qatar`, `1 X 3`, `senegal`) +
            createGame(`netherlands`, `1 X 1`, `ecuador`) +
            createGame(`england`, `0 X 0`, `united states`)
    ) +
    createCard(
        "26/11",
        "sábado",
        createGame("tunisia", "07:00", "australia") +
            createGame("poland", "10:00", "sahrawi arab democratic republic") +
            createGame("france", "13:00", "denmark") +
            createGame("argentina", "16:00", "mexico")
    ) +
    createCard(
        "27/11",
        "domingo",
        createGame("japan", "07:00", "costa rica") +
            createGame("belgium", "10:00", "morocco") +
            createGame("croatia", "13:00", "canada") +
            createGame("spain", "16:00", "germany")
    ) +
    createCard(
        `28/11`,
        `segunda`,
        createGame(`cameroon`, `07:00`, `serbia`) +
            createGame(`south korea`, `10:00`, `ghana`) +
            createGame(`brazil`, `13:00`, `switzerland`) +
            createGame(`portugal`, `16:00`, `uruguay`)
    )