import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { yt, linkdn, insta, wpp, tt, fb, logo, friends, searching, service, writing, banner_image, Feminismo, Educacao, Meio_Ambiente, PCDs, arrow, arrow_down, mundo } from './Home_imagens';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from './Home_imagens';
import SearchBar from '../../components/SearchBar/SearchBar';
import Select from '../../components/Select/Select';
import Card from '../../components/Card/Card';
import Botao from '../../components/BotaoVerVagas/Botao';
import { Estilos, SocialMedia, Primeira, Segunda, Terceira, Quarta, Quinta, Texto, Categorias, CardsWrapper, Footer } from './styles.js';

const dados_redes = [yt, linkdn, insta, wpp, tt, fb];

const dados_categorias = [
  {
    link: "",
    img: searching,
    legenda: "Vagas"
  },
  {
    link: "",
    img: service,
    legenda: "ONGs"
  },
  {
    link: "",
    img: friends,
    legenda: "Causas"
  },
  {
    link: "",
    img: writing,
    legenda: "Habilidades"
  }
];

const dados_cards = [
  {
    titulo: 'Psicologo Voluntário',
    ong: 'ONG ESTRELA MILINHA',
    local: 'Santos - SP',
    texto: 'Buscamos psicólogos(as) voluntários(as) para atingir o desenvolvimento afetivo e emocional dos nossos atendidos, moradores da Vila Aliança.',
    candidatos: '0/4',
    src: img1
  },
  {
    titulo: 'Designer Gráfico',
    ong: 'ONG AVRA',
    local: 'Rio de Janeiro - RJ',
    texto: 'Você possui habilidades para utilizar os softwares de criação de imagem e manja de redes sociais? Faça parte da nossa equipe, se inscreva na vaga!',
    candidatos: '1/4',
    src: img2

  },
  {
    titulo: 'Designer de UI',
    ong: 'ONG Favela Inc',
    local: 'Manaus - AM',
    texto: 'Estamos desenvolvendo uma plataforma que conecta moradores de favelas a campanhas como doações, capacitações e oportunidades de trabalho.',
    candidatos: '2/6',
    src: img3
  },
  {
    titulo: 'Analista de Mídias Sociais',
    ong: 'ONG AVRA',
    local: 'Brasil',
    texto: 'É antenado(as) nos assuntos que rolam nas redes sociais? Então venha nos apoiar a cuidar dessas belezuras: as redes sociais da AVRA!',
    candidatos: '1/2',
    src: img4
  },
  {
    titulo: 'Ajude os animais',
    ong: 'Animal Equality',
    local: 'Maceió - AL',
    texto: 'Procuramos voluntários que queiram acabar com as práticas cruéis que acontecem com os animais na indústria de alimentícia por meio de ações on-line',
    candidatos: '2/8',
    src: img5
  },
  {
    titulo: 'Médico voluntário',
    ong: 'IAIDAM',
    local: 'Manaus - AM',
    texto: 'Precisamos de voluntários(as) médicos para trabalhar conosco pelo menos 1 vez por semana por 4 horas. Será incrível ter você conosco!',
    candidatos: '2/3',
    src: img6
  }
];

const dados_categorias_2 = [
  {
    link: "",
    img: Feminismo,
    legenda: "Feminismo"
  },
  {
    link: "",
    img: Meio_Ambiente,
    legenda: "Meio Ambiente"
  },
  {
    link: "",
    img: Educacao,
    legenda: "Educação"
  },
  {
    link: "",
    img: PCDs,
    legenda: "PCDs"
  }
];

const dados_cards2 = [
  {
    titulo: 'Psicologo Voluntário',
    ong: 'ONG ESTRELA MILINHA',
    local: 'Santos - SP',
    texto: 'Buscamos psicólogos(as) voluntários(as) para atingir o desenvolvimento afetivo e emocional dos nossos atendidos, moradores da Vila Aliança.',
    candidatos: '0/4',
    src: img7
  },
  {
    titulo: 'Designer Gráfico',
    ong: 'ONG AVRA',
    local: 'Rio de Janeiro - RJ',
    texto: 'Você possui habilidades para utilizar os softwares de criação de imagem e manja de redes sociais? Faça parte da nossa equipe, se inscreva na vaga!',
    candidatos: '1/4',
    src: img8

  },
  {
    titulo: 'Designer de UI',
    ong: 'ONG Favela Inc',
    local: 'Manaus - AM',
    texto: 'Estamos desenvolvendo uma plataforma que conecta moradores de favelas a campanhas como doações, capacitações e oportunidades de trabalho.',
    candidatos: '2/6',
    src: img9
  },
  {
    titulo: 'Analista de Mídias Sociais',
    ong: 'ONG AVRA',
    local: 'Brasil',
    texto: 'É antenado(as) nos assuntos que rolam nas redes sociais? Então venha nos apoiar a cuidar dessas belezuras: as redes sociais da AVRA!',
    candidatos: '1/2',
    src: img10
  },
  {
    titulo: 'Ajude os animais',
    ong: 'Animal Equality',
    local: 'Maceió - AL',
    texto: 'Procuramos voluntários que queiram acabar com as práticas cruéis que acontecem com os animais na indústria de alimentícia por meio de ações on-line',
    candidatos: '2/8',
    src: img11
  },
  {
    titulo: 'Médico voluntário',
    ong: 'IAIDAM',
    local: 'Manaus - AM',
    texto: 'Precisamos de voluntários(as) médicos para trabalhar conosco pelo menos 1 vez por semana por 4 horas. Será incrível ter você conosco!',
    candidatos: '2/3',
    src: img12
  }
];

function GerarRedesSociais(props) {
  let dados = props.arr.map(item => {
    return (
      <>
        <li><a href="#"><img src={item} alt=""></img></a></li>
      </>
    );
  })

  return (
    <ul>
      {dados}
    </ul>
  );
}

function GerarCategorias(props) {
  let dados = props.arr.map(({ link, img, legenda }) => {
    return (
      <>
        <li>
          <img src={img} alt=""></img>
          <Link to={link}>{legenda}</Link>
        </li>
      </>
    );
  });

  return (
    <ul>
      {dados}
    </ul>
  );
}

function GerarCards(props) {
  let dados = props.arr.map(({ titulo, texto, ong, local, candidatos, src }) => {
    return (
      <>
        <Card titulo={titulo} texto={texto} ong={ong} local={local} candidatos={candidatos} src={src} />
      </>
    );
  });

  return (
    <CardsWrapper>
      {dados}
    </CardsWrapper>
  );
}

function Home() {
  return (
    <div className="App">
      <header>
        <SocialMedia>
          <GerarRedesSociais arr={dados_redes} />
        </SocialMedia>

        <SearchBar></SearchBar>
      </header>

      <main>
        <Primeira>
         
          <Texto>
            <h1>Comece um trabalho voluntário</h1>
            <p>Encontre formas de se engajar ativamente!</p>
            <p>A plataforma da Global.org existe para conectar organizações sem fins lucrativos e pessoas que desejam apoiar suas causas.</p>
            <button>Quero Engajar!</button>
          </Texto>

          <img src={banner_image} alt=""></img>
       

          <h2>BUSQUE POR CATEGORIA DE INTERESSE</h2>

          <Categorias>
            <GerarCategorias arr={dados_categorias} />
          </Categorias>
        </Primeira>

        <Segunda>
          <div>
            <h1>VAGAS MAIS RECENTES</h1>
            <p>Tem um montão de vagas novas esperando por você!</p>
          </div>

          <div>
            <GerarCards arr={dados_cards} />
            <Botao></Botao>
          </div>
        </Segunda>

        <Terceira>
          <div>
            <h1>FILTRE POR VAGAS, ONGS E CAUSAS QUE MAIS COMBINAM COM VOCÊ!</h1>
            <p>Confira as categorias mais acessadas abaixo</p>
            <GerarCategorias arr={dados_categorias_2} />
          </div>

          <div>
            <p>Ou descubra outras causas e habilidades para se engajar:</p>
            <Select />
          </div>
        </Terceira>

        <Quarta>
          <div>
            <h1>VAGAS DE VOLUNTÁRIOS EM DESTAQUE</h1>
            <p>Dê uma olhada em nossas vagas em destaque!!</p>
          </div>

          <div>
            <GerarCards arr={dados_cards2} />
            <Botao></Botao>
          </div>
        </Quarta>

        <Quinta>
          <div>
            <h1>Global ORG para empresas</h1>
            <p>Estratégia e implementação de voluntariado empresarial e responsabilidade social. Essas sã nossas paixões e especialidades.</p>
            <button>Conheça nossas plataformas</button>
          </div>

          <img src={mundo} alt=""></img>

        </Quinta>
      </main>

      <Footer>
        <ul>
          <li>
            <h1><img src={logo}></img>Global ORG</h1>
            <p>
              Plataforma de soluções para conectar ONGs e Projetos Sociais com Empresas, Voluntários e Pessoas que precisam de ajuda pelo mundo.
              </p>
            {/* <Social_media /> */}
          </li>

          <li>
            <h1>Contato</h1>
            <Link>Chat Online</Link>
            <Link>Contato@ongcpb.org</Link>
            <Link>WhatsApp +55 11 95849-4693</Link>
          </li>

          <li>
            <h1>Navegação</h1>
            <Link>Nossas Plataformas</Link>
            <Link>Quem somos</Link>
            <Link>Cadastro</Link>
            <Link>Sou uma ONG</Link>
            <Link>FAQ</Link>
            <Link>Ajuda</Link>
            <Link>Quero ser voluntário</Link>
            <Link>Para empresas</Link>
          </li>

          <li>
            <h1>Newsletter</h1>
            <p>Fique por dentro das vagas e ONGS que você poderá participar futuramente!</p>
            <form>
              <input placeholder='Nome' required></input>
              <input placeholder='E-mail' required></input>
              <input placeholder='Cidade' required></input>
              <button type='submit'>Inscrever-se</button>
            </form>
          </li>
        </ul>

        <hr />

        <div>
          <span>© 2021 Global ORG | Todos os direitos reservados</span>
          <span><Link>Política de Privacidade</Link> | <Link>Termos de serviço</Link></span>
        </div>
      </Footer>
    </div>
  );
}

export default Home;
