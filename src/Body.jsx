import "./Body.css";
import Post from "./Post";
import Sidebar from "./Sidebar";
import imagem from "./assets/imagem.jpg";

function Body() {
  return (
    <div className="body-container">
      <div className="content">
        <img src={imagem} alt="imagem" className="imagem-princ" />
        <Post
          title="Para ser muito bom amanhã é preciso começar a praticar hoje"
          author="Prof. Cleiton"
          date="24 Fev 25"
          time="16:40"
          text="São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão.
            Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :(
            Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nos primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas operações básicas;"
          separator={true}
        />
        <Post
          title="Matemática: O Alicerce para o Sucesso Escolar!"
          author="Prof. Cleiton"
          date="24 Fev 25"
          time="16:40"

          text="Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e aprendem as quatro operações essenciais: adição, subtração, multiplicação e divisão. Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada!
          Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a dominar as operações básicas e desenvolver confiança na matemática.
          
          Vamos juntos fortalecer essa base e transformar desafios em conquistas! #MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásicas #AprendizadoDivertido #FundamentosEscolares #MatemáticaFácil #ConfiançaNosNúmeros"
          separator={false}
        />
      </div>
      <Sidebar />
    </div>
  );
}

export default Body;