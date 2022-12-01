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
        `26/11`,
        `sábado`,
        createGame(`tunisia`, `0 X 1`, `australia`) +
            createGame(`poland`, `2 X 0`, `sahrawi arab democratic republic`) +
            createGame(`france`, `2 X 1`, `denmark`) +
            createGame(`argentina`, `2 X 0`, `mexico`)
    ) +
    createCard(
        `27/11`,
        `domingo`,
        createGame(`japan`, `0 X 1`, `costa rica`) +
            createGame(`belgium`, `0 X 2`, `morocco`) +
            createGame(`croatia`, `4 X 1`, `canada`) +
            createGame(`spain`, `1 X 1`, `germany`)
    ) +
    createCard(
        `28/11`,
        `segunda`,
        createGame(`cameroon`, `3 X 3`, `serbia`) +
            createGame(`south korea`, `2 X 3`, `ghana`) +
            createGame(`brazil`, `1 X 0`, `switzerland`) +
            createGame(`portugal`, `2 x 0`, `uruguay`)
    ) +
    createCard(
        `29/11`,
        `terça`,
        createGame(`ecuador`, `1 X 2`, `senegal`) +
            createGame(`netherlands`, `2 X 0`, `qatar`) +
            createGame(`wales`, `0 X 3`, `england`) +
            createGame(`iran`, `0 X 1`, `united states`)
    ) +
    createCard(
        "30/11",
        "quarta",
        createGame("australia", `1 X 0`, "denmark") +
            createGame("tunisia", `1 X 0`, "france") +
            createGame("poland", `0 X 2`, "argentina") +
            createGame("sahrawi arab democratic republic", `1 X 2`, "mexico")
    ) +
    createCard(
        `01/12`,
        `quinta`,
        createGame(`croatia`, `12:00`, `belgium`) +
            createGame(`canada`, `12:00`, `morocco`) +
            createGame(`japan`, `16:00`, `spain`) +
            createGame(`costa rica`, `16:00`, `germany`)
    ) +
    createCard(
        `02/12`,
        `sexta`,
        createGame(`ghana`, `12:00`, `uruguay`) +
            createGame(`south korea`, `12:00`, `portugal`) +
            createGame(`serbia`, `16:00`, `switzerland`) +
            createGame(`cameroon`, `16:00`, `brazil`)
    ) 
