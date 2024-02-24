/* --
*
* Você pode alterar os valores das variáveis ​​​​como -- (altura total) no painel CSS para aumentar/diminuir o comprimento da rolagem, quanto menor comprimento significa menos rolagem e animação rápida e quanto maior comprimento significa mais rolagem e animação lenta. e "velocidade" neste painel JavaScript para ajustar/definir a distância que os itens (nuvens, montanhas, árvores, etc.) irão se mover. Aproveitar! 😊
*
* Obrigado por ver!
*
*
-- */

// GSAP
// --------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

// VARIÁVEIS
// --------------------------------------------------------
let scene = gsap.timeline();
let speed = 200;

// GATILHOS DE ROLAGEM
// --------------------------------------------------------
ScrollTrigger.create({
  animation: scene,
  trigger: "body",
  start: "top top",
  end: "100% 100%",
  scrub: 2,
});

// CENA
// --------------------------------------------------------
// TOPO
scene.to(".top", { "background-position": "0% 0%", ease: "power1.in" }, 0);

// ESTRELAS
scene.to(".stars", { opacity: "1", ease: "power1.in" }, 0);

// NUVENS
scene.to(".clouds--1", { x: -(8 * speed), ease: "power1.in" }, 0);
scene.to(".clouds--2", { x: -(9 * speed), ease: "power1.in" }, 0);

// SOL E LUA
scene.to(".sun-and-moon", { y: 60, ease: "power1.in" }, 0);

// FUNDO
scene.to(".bottom", { background: "hsl(60, 8%, 10%)", ease: "power1.in" }, 0);

// MONTANHAS
scene.to(".mountains--1", { x: -(4 * speed), ease: "power1.in" }, 0);
scene.to(".mountains--2", { x: -(3 * speed), ease: "power1.in" }, 0);
scene.to(".mountains--3", { x: -(4 * speed), ease: "power1.in" }, 0);
scene.to(
  ".mountain--1",
  { background: "hsl(200, 0%, 8%)", ease: "power1.in" },
  0
);
scene.to(
  ".mountain--2",
  { background: "hsl(240, 3%, 15%)", ease: "power1.in" },
  0
);
scene.to(
  ".mountain--3",
  { background: "hsl(244, 9%, 12%)", ease: "power1.in" },
  0
);

// ÁRVORES
scene.to(".trees--1", { x: -(2.4 * speed), ease: "power1.in" }, 0);
scene.to(".trees--2", { x: -(3.1 * speed), ease: "power1.in" }, 0);
scene.to(".tree", { background: "hsl(130, 95%, 12%)", ease: "power1.in" }, 0);

// ESTRELAS SVGs
// --------------------------------------------------------
gsap.fromTo(
  ".stars__svg>g",
  { scale: ".8", transformOrigin: "50% 50%" },
  {
    scale: "1.2",
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "ease-in",
    delay: (index) => (index % 2 === 0 ? 0.5 : 1),
  }
);