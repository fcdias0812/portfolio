import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdOutlineHome, MdOutlineMail } from "react-icons/md";

import { Technologies } from "./component/technologies";
import { Links } from "./component/links";

import perfilLogo from "./assets/perfilLogo.jpg";

import react from "./assets/technologies/react.png";
import typescript from "./assets/technologies/typescript.png";
import tailwind from "./assets/technologies/tailwind.png";
import firebase from "./assets/technologies/firebase.png";
import localstorage from "./assets/technologies/localstorage.png";
import vercel from "./assets/technologies/vercel.png";

import devcurrency from "./assets/projects/devcurrency.png";
import devcarrinho from "./assets/projects/devcarrinho.png";
import linktree from "./assets/projects/linktree.png";
import primeflix from "./assets/projects/primeflix.png";
import devfrases from "./assets/projects/devfrases.png";
import calculadoraidade from "./assets/projects/calculadoraidade.png";

import github from "./assets/links/github.png";
import website from "./assets/links/website.png";

export default function App() {
  return (
    <div className="bg-zinc-900">
      <header className="fixed bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 md:px-7 bg-white/80 backdrop-blur-xs rounded-full shadow-lg">
        <nav className="flex gap-4 items-center">
          <div className="py-2 md:hover:px-2 md:hover:bg-zinc-200 rounded-full transition-all duration-300 md:cursor-pointer">
            <a href="#home">
              <MdOutlineHome size={20} />
            </a>
          </div>
          <div className="flex gap-4 px-4 border-l-1 border-zinc-600/35">
            <div className="py-2 md:hover:px-2 md:hover:bg-zinc-200 rounded-full transition-all duration-300 md:cursor-pointer">
              <a
                href="https://github.com/fcdias0812"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <div className="py-2 md:hover:px-2 md:hover:bg-zinc-200 rounded-full transition-all duration-300 md:cursor-pointer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/fcdias0812/"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className="py-2 md:hover:px-2 md:hover:bg-zinc-200 rounded-full transition-all duration-300 md:cursor-pointer">
              <a href="mailto:dias.fabricio0812@gmail.com">
                <MdOutlineMail size={20} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="w-full bg-white px-4 pb-24 mt-4 min-h-screen flex flex-col md:flex-row gap-5 items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:gap-20 items-center justify-between gap-4">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-medium">
              Olá, eu sou o Fabrício 👋
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              Desenvolvedor <span className="text-blue-500">Full Stack</span>
            </h1>
            <h3 className="text-lg md:text-1xl md:max-w-lg">
              Crio interfaces que unem performance, design e propósito para
              experiências digitais inesqueciveis.
            </h3>
            <a
              href="#projetos"
              className="bg-blue-400 md:hover:bg-blue-900 transition-all duration-500 md:hover:scale-120 text-white w-fit flex gap-4 items-center rounded-md px-4 py-2"
            >
              Conheça meus projetos <FaArrowRight size={15} />{" "}
            </a>
          </div>
          <img
            src={perfilLogo}
            alt="Foto de perfil"
            className="rounded-full w-full max-w-80 mt-12"
          />
        </div>
      </section>

      <section className="w-full px-4 py-24">
        <div className="w-full max-w-5xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-center mb-12">Quem sou eu?</h1>
          <div className="flex flex-col sm:flex-row sm:gap-10 gap-4 text-sm md:text-lg">
            <div className="flex flex-col gap-4">
              <p>
                Meu nome é <span className="text-blue-500">Fabrício Dias</span>{" "}
                e sou desenvolvedor front-end em formação, com um olhar atento
                para o design, a performance e a experiência do usuário.
                Atualmente, curso{" "}
                <span className="text-blue-500">
                  Análise e Desenvolvimento de Sistemas
                </span>
                , onde venho aprofundando meus conhecimentos em tecnologias web,
                estrutura de dados, lógica de programação e boas práticas de
                desenvolvimento.
              </p>
              <p>
                Minha jornada na tecnologia começou no ensino médio, de um jeito
                pouco convencional: assistindo a um dorama. Nele, os
                protagonistas eram programadores que{" "}
                <span className="text-blue-500">
                  transformavam vidas por meio do código
                </span>
                . Aquela narrativa me inspirou profundamente e despertou em mim
                o desejo de fazer o mesmo — usar a tecnologia como ferramenta de
                mudança e impacto real.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                Desde então, venho construindo meu caminho com dedicação,
                curiosidade e muita vontade de evoluir. Trabalho com{" "}
                <span className="text-blue-500">HTML</span>,{" "}
                <span className="text-blue-500">CSS</span>,
                <span className="text-blue-500">JavaScript</span> e{" "}
                <span className="text-blue-500">React.js</span>, e busco
                constantemente aprimorar minhas habilidades técnicas e criativas
                para entregar soluções modernas, acessíveis e eficientes.
              </p>
              <p>
                Acredito que cada projeto é uma oportunidade de aprendizado, e
                que{" "}
                <span className="text-blue-500">
                  o código é mais do que uma ferramenta: é uma ponte entre
                  ideias e experiências que podem fazer a diferença
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="w-full px-4 pt-24 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Meus projetos
          </h1>
          <div className="bg-zinc-900 p-4 rounded-md grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-zinc-600 text-white rounded-md flex flex-col gap-2 border-1 border-zinc-500/60">
              <img
                src={devcarrinho}
                alt="Imagem do projeto"
                className="mb-4 rounded-t-md"
              />
              <div className="flex flex-col h-full justify-between gap-2 ml-2 mr-2 mb-2">
                <div className="flex flex-col gap-2.5">
                  <span className="text-lg font-bold">Dev Carrinho</span>
                  <p>
                    Aplicação web desenvolvida com React exclusivamente para
                    simular um carrinho de e-commerce, com tecnologias reais.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 flex-wrap">
                    <Technologies img={react} name="React.js" />
                    <Technologies img={typescript} name="TypeScript" />
                    <Technologies img={tailwind} name="Tailwind CSS" />
                    <Technologies img={vercel} name="Vercel" />
                  </div>
                  <div className="flex gap-2.5">
                    <Links
                      img={github}
                      name="GitHub"
                      href="https://github.com/fcdias0812/devcarrinho"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-600 text-white rounded-md flex flex-col gap-2 border-1 border-zinc-500/60">
              <img
                src={devcurrency}
                alt="Imagem do projeto"
                className="mb-4 rounded-t-md"
              />
              <div className="flex flex-col h-full justify-between gap-2 ml-2 mr-2 mb-2">
                <div className="flex flex-col gap-2.5">
                  <span className="text-lg font-bold">Dev Currency</span>
                  <p>
                    Sistema web feito em React para monitorar cotação de moedas
                    virtuais em tempo real.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 flex-wrap">
                    <Technologies img={react} name="React.js" />
                    <Technologies img={typescript} name="TypeScript" />
                    <Technologies img={vercel} name="Vercel" />
                  </div>
                  <div className="flex gap-2.5">
                    <Links
                      img={github}
                      name="GitHub"
                      href="https://github.com/fcdias0812/devcurrency"
                    />
                    <Links
                      img={website}
                      name="Visite o site"
                      href="https://devcurrency-dun.vercel.app/"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-600 text-white rounded-md flex flex-col gap-2 border-1 border-zinc-500/60">
              <img
                src={linktree}
                alt="Imagem do projeto"
                className="mb-4 rounded-t-md"
              />
              <div className="flex flex-col h-full justify-between gap-2 ml-2 mr-2 mb-2">
                <div className="flex flex-col gap-2.5">
                  <span className="text-lg font-bold">Linktree</span>
                  <p>
                    Sistema de Linktree produzido em React com painel
                    administrativo para cadastrar links e redes sociais.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 flex-wrap">
                    <Technologies img={react} name="React.js" />
                    <Technologies img={typescript} name="TypeScript" />
                    <Technologies img={tailwind} name="Tailwind CSS" />
                    <Technologies img={firebase} name="Firebase" />
                    <Technologies img={vercel} name="Vercel" />
                  </div>
                  <div className="flex gap-2.5">
                    <Links
                      img={github}
                      name="GitHub"
                      href="https://github.com/fcdias0812/devlinks"
                    />
                    <Links
                      img={website}
                      name="Visite o site"
                      href="https://devlinks-gray.vercel.app/"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-600 text-white rounded-md flex flex-col gap-2 border-1 border-zinc-500/60">
              <img
                src={primeflix}
                alt="Imagem do projeto"
                className="mb-4 rounded-t-md"
              />
              <div className="flex flex-col h-full justify-between gap-2 ml-2 mr-2 mb-2">
                <div className="flex flex-col gap-2.5">
                  <span className="text-lg font-bold">Prime Flix</span>
                  <p>
                    Aplicação web desenvolvida com React que mostra os
                    principais filmes em lançamento em tempo real, podendo ou
                    não adicionar aos favoritos.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 flex-wrap">
                    <Technologies img={react} name="React.js" />
                    <Technologies img={localstorage} name="Local Storage" />
                    <Technologies img={vercel} name="Vercel" />
                  </div>
                  <div className="flex gap-2.5">
                    <Links
                      img={github}
                      name="GitHub"
                      href="https://github.com/fcdias0812/prime_flix"
                    />
                    <Links
                      img={website}
                      name="Visite o site"
                      href="https://prime-flix-two-coral.vercel.app/"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-600 text-white rounded-md flex flex-col gap-2 border-1 border-zinc-500/60">
              <img
                src={devfrases}
                alt="Imagem do projeto"
                className="mb-4 rounded-t-md"
              />
              <div className="flex flex-col h-full justify-between gap-2 ml-2 mr-2 mb-2">
                <div className="flex flex-col gap-2.5">
                  <span className="text-lg font-bold">Dev Frases</span>
                  <p>
                    Sistema criado com o intuito de praticar conceitos de
                    estados com React.js. Projeto web que gera frases.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 flex-wrap">
                    <Technologies img={react} name="React.js" />
                    <Technologies img={typescript} name="TypeScript" />
                    <Technologies img={vercel} name="Vercel" />
                  </div>
                  <div className="flex gap-2.5">
                    <Links
                      img={github}
                      name="GitHub"
                      href="https://github.com/fcdias0812/gerador_frase"
                    />
                    <Links
                      img={website}
                      name="Visite o site"
                      href="https://gerador-frase.vercel.app/"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-600 text-white rounded-md flex flex-col gap-2 border-1 border-zinc-500/60">
              <img
                src={calculadoraidade}
                alt="Imagem do projeto"
                className="mb-4 rounded-t-md"
              />
              <div className="flex flex-col h-full justify-between gap-2 ml-2 mr-2 mb-2">
                <div className="flex flex-col gap-2.5">
                  <span className="text-lg font-bold">
                    Calculadora de Idade
                  </span>
                  <p>
                    Sistema criado com o intuito de praticar datas com React.js.
                    Projeto web que ao colocar sua data de nascimento, calcula
                    sua idade se baseando nos meses e dias atuais.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5 flex-wrap">
                    <Technologies img={react} name="React.js" />
                    <Technologies img={typescript} name="TypeScript" />
                    <Technologies img={vercel} name="Vercel" />
                  </div>
                  <div className="flex gap-2.5">
                    <Links
                      img={github}
                      name="GitHub"
                      href="https://github.com/fcdias0812/calcular_idade"
                    />
                    <Links
                      img={website}
                      name="Visite o site"
                      href="https://calcular-idade-gilt.vercel.app/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pt-24 mb-24 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-center font-bold text-3xl md:text-6xl mb-4">
            Entre em contato comigo!
          </h1>
          <p className="text-center text-1xl md:text-3xl">
            Quer conversar ou oferecer uma proposta?
          </p>
          <p className="text-center text-1xl md:text-3xl">
            Basta apenas me{" "}
            <a
              href="https://www.linkedin.com/in/fcdias0812/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-1xl md:text-3xl text-blue-500"
            >
              enviar uma mensagem direta no LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
