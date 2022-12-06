function createGame(jogador1, hora, jogador2){
    var resp = `
        <li>
    `
    if (!jogador1){
        resp = resp + `<p>A Definir</p>`
    }
    else{
        resp =
            resp +
            `<img
                src="./assets/icon=${jogador1}.svg"
                alt="Bandeira da ${jogador1}"
            />`
    }
    resp = resp + `<strong>${hora}</strong>`
    if (!jogador2) {
        resp = resp + `<p>A Definir</p>`
    } else {
        resp =
            resp +
            `<img
                src="./assets/icon=${jogador2}.svg"
                alt="Bandeira da ${jogador2}"
            />`
    }
    resp = resp + `</li>`
    return resp
    /* return `
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
    ` */
}
let delay = -0.1;

function createCard(data, semana, jogos){
    delay = delay +0.1;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${semana}</span></h2>
            <ul>
                ${jogos}
            </ul>
        </div>
    `
}

document.querySelector("#oitavas").innerHTML = `
    
    ${createCard(
        "03/12",
        "sábado",
        createGame("netherlands", "3 X 1", "united states") +
            createGame("argentina", "2 X 1", "australia")
    )} 
    ${createCard(
        "04/12",
        "domingo",
        createGame("france", "3 X 1", "poland") +
            createGame("england", "3 X 0", "senegal")
    )} 
    ${createCard(
        "05/12",
        "segunda",
        createGame("japan", "1 (1) X 1 (3)", "croatia") +
            createGame("brazil", "4 X 1", "south korea")
    )} 
    ${createCard(
        "06/12",
        "terça",
        createGame("morocco", "12:00", "spain") +
            createGame("portugal", "16:00", "switzerland")
    )} 
`
document.querySelector("#quartas").innerHTML = `
    
    ${createCard(
        "03/12",
        "sexta",
        createGame("brazil", "12:00", "croatia") +
            createGame("netherlands", "16:00", "argentina")
    )} 
    ${createCard(
        "04/12",
        "Sábado",
        createGame("", "12:00", "") +
         createGame("france", "16:00", "england")
    )} 
`

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
        createGame(`croatia`, `0 X 0`, `belgium`) +
            createGame(`canada`, `1 X 2`, `morocco`) +
            createGame(`japan`, `2 X 1`, `spain`) +
            createGame(`costa rica`, `2 X 4`, `germany`)
    ) +
    createCard(
        `02/12`,
        `sexta`,
        createGame(`ghana`, `0 X 2`, `uruguay`) +
            createGame(`south korea`, `2 X 1`, `portugal`) +
            createGame(`serbia`, `2 X 3`, `switzerland`) +
            createGame(`cameroon`, `1 X 0`, `brazil`)
    ) 
