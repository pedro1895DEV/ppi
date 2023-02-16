$(document).ready(function () {
    $("p").hover(function () {
        $(this).html("jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário (client-side).[8] A biblioteca é um projeto da Fundação JS (em inglês: JS Foundation),[9] que faz parte da Fundação Linux (em inglês: Linux Foundation)[10] e seu desenvolvimento é realizado pelo time jQuery (em inglês: The jQuery Team).[11]");
    });
    $("p").mouseout(function () {
        $(this).html("JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.[4]");
    });
})