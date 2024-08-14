import appendListToNode from "../../utils/appendListToNode.js";
function tutorial() {
    const tutorialDiv = document.createElement('div');
    tutorialDiv.classList.add('flex', 'flex-col', 'justify-center', 'items-center');
    const tutorialImg = document.createElement('img');
    tutorialImg.src = "../../../static/images/fresnelFormula.png";
    tutorialImg.width = 200;
    const textAssembler = (strings) => {
        const div = document.createElement('div');
        strings.map((s) => {
            const p = document.createElement('p');
            p.classList.add('py-2');
            p.innerText = s;
            div.appendChild(p);
        });
        return div;
    };
    const tutorialText = textAssembler([
        'La Zona de Fresnel es una serie de áreas elipsoidales entre una antena emisora y una receptora.',
        'Para asegurarse de que la señal se reciba correctamente, el radio que ocupa la primera Zona de Fresnel debería estar idealmente libre de obstáculos.',
        'El número de Zonas de Fresnel es infinito -- no obstante, solo las primeras tres se consideran significativas.',
        '',
        "Hecho por Luca Petrocchi"
    ]);
    appendListToNode([
        tutorialImg,
        tutorialText
    ], tutorialDiv);
    return tutorialDiv;
}
export default tutorial;
