import Academia from "../../assets/Academia.jpg";
import Agricultor from "../../assets/Agricultor.jpg";
import Alimento from "../../assets/Alimento01.jpg";
import Estoque from "../../assets/Estoque.jpg";
import Maca from "../../assets/Maca.jpg";
import Supermercados from "../../assets/Supermercados.jpg";
import Mobile from "../../assets/mobile.jpg";
import Tomate from "../../assets/tomates.jpg";
import ProductsData from "../Dinamycs/Products";
import "./ClientsStyle.css";
const Clients = () => {
  return (
    <div className="Clients">
      <h1>Nossa Linha de Produtos</h1>
      <p>
        Na Hasit, estamos dedicados a oferecer uma ampla e diversificada linha de produtos de alta qualidade para atender às necessidades de nossos clientes. Nossa gama de produtos é cuidadosamente selecionada e projetada para proporcionar soluções excepcionais em diversas áreas.
      </p>
      <ProductsData
        heading="Academias"
        text={
          "Software de Gerenciamento: Academias usam software para gerenciar membros, agendamento de aulas, pagamentos e acompanhamento do progresso dos clientes.\n" +
          "Aplicativos Fitness: Aplicativos móveis oferecem planos de exercícios, monitoramento de atividades físicas e orientação virtual."

        }
        img1={Academia}
        img2={Mobile}
      />
      <ProductsData

        heading="Supermercados"
        text={" Automação de Caixa: Sistemas de ponto de venda (PDV) automatizados agilizam o processo de pagamento.Gestão de Estoque: Tecnologia ajuda a monitorar e otimizar o estoque, minimizando o desperdício de alimentos perecíveis"}
        img1={Estoque}
        img2={Supermercados}
      />
      <ProductsData
      heading="Alimentos"
      text={"Rastreabilidade: Tecnologia é usada para rastrear a origem dos alimentos e garantir a segurança alimentar.Aplicativos de Entrega: Plataformas de entrega de alimentos conectam restaurantes a clientes."}
      img1={Alimento}
      img2={Tomate}
      />
      <ProductsData
      heading="Agricultura"
      text={"Agricultura de Precisão: Drones, sensores e análise de dados são usados para otimizar a irrigação, o uso de fertilizantes e a colheita. Gestão de Fazendas: Software ajuda os agricultores a monitorar e gerenciar suas operações, incluindo programação de plantio e colheita."}
      img1={Maca}
      img2={Agricultor}
      />
      </div>
  );
};

export default Clients;
