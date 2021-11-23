const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.listen(8080, () => console.log('Rodando na porta 8080'));

app.use(express.json())

app.get("/timeline", (request, response) => response.json({
  timeline
}))

app.get("/units", (request, response) => response.json({
  units
}))

let timeline = [
  {
    id: 1,
    title: "Primeiro centro médico inaugurado",
    year: "2011",
    description: "Em 2011, o primeiro centro médico foi inaugurado em Heliópolis, Zona Sul de São Paulo, com dez funcionários. A iniciativa foi muito bem recebida pela população da região e em 2013 o centro médico foi transferido para o Sacomã para aumentar a capacidade de atendimento."
  },
  {
    id: 2,
    title: "Mais três centros médicos",
    year: "2014",
    description: "Em 2014, a empresa abriu mais três centros médicos, chegando a São Bernardo do Campo, Jabaquara e na Avenida Nove de Julho."
  },
  {
    id: 3,
    title: "Ano de grande expansão",
    year: "2015",
    description: "2015 foi um ano de grande expansão e em 2016 já tínhamos 23 centros médicos pela cidade de São Paulo e no ABCD, Guarulhos, Santos e São Vicente."
  },
  {
    id: 4,
    title: "Nossa primeira unidade de Pesquisa Clínica",
    year: "2016",
    description: "2016 também marcou o ano que abrimos nossa unidade de Pesquisa Clínica, iniciando um trabalho importantíssimo com o objetivo de possibilitar o acesso de nossos pacientes a terapias inovadoras, contribuir com o desenvolvimento e a performance nacional na condução de pesquisas clínicas no Brasil atraindo assim mais estudos para o país."
  },
  {
    id: 5,
    title: "Abertura de 22 centros médicos, unidades no Rio de Janeiro e em Belo Horizonte",
    year: "2017",
    description: "2017 veio com a abertura de mais 22 centros médicos e completamos a marca de 45 endereços, todos perto de metrôs, shoppings e principais avenidas, incluindo ainda uma unidade no Rio de Janeiro e outra em Belo Horizonte."
  },
  {
    id: 6,
    year: "2019",
    title: "Nesse ano passamos a atuar em mais de 60 especialidades médicas",
    description: "2018 e 2019 seguiram como anos de crescimento e passamos a atuar em mais de 60 especialidades médicas e oferecer mais de 3 mil tipos de serviços entre exames, oftalmologia, odontologia, fisioterapia, acupuntura e cirurgias de baixa complexidade. Temos parceria com mais de 20 hospitais para ajudar com os procedimentos cirúrgicos."
  },
  {
    id: 7,
    year: "2020",
    title: "Ano que enfrentamos a pandemia com telemedicina e coleta domiciliar de exames.",
    description: "2020 foi um ano em que passamos pela pandemia, mas seguimos atendendo nossos pacientes em nossos centros médicos e lançamos novos serviços para que todos pudessem continuar cuidando da sua saúde. O mais importante deles foi a telemedicina. Disponibilizamos também a coleta domiciliar de exames em São Paulo e no Rio de Janeiro e passamos a enviar as receitas de medicamentos controlados aos pacientes, residentes da região metropolitana de São Paulo, que passaram por teleconsulta."
  }
];

let units = [
  { id: 1, unit: "Ana Costa", uf: "SP" },
  { id: 2, unit: "Barra Da Tijuca", uf: "RJ" },
  { id: 3, unit: "Butanta", uf: "SP" },
  { id: 4, unit: "Centro Virtual De Telemedicina", uf: "SP" },
  { id: 5, unit: "Clínica Parceira - Dr Artur Moreno", uf: "SP" },
  { id: 6, unit: "Clínica Parceira - Dr Roberto Muniz", uf: "RJ" },
  { id: 7, unit: "Clinica Parceira - Dra Mirela Ward", uf: "SP" },
  { id: 8, unit: "Clínica Parceira - Dra Samira Picheli", uf: "MG" },
  { id: 9, unit: "Diadema", uf: "SP" },
  { id: 10, unit: "Funcionarios", uf: "MG" },
  { id: 11, unit: "Guarulhos", uf: "SP" },
  { id: 12, unit: "Ibirapuera", uf: "SP" },
  { id: 13, unit: "Itaquera - Piso Metrô", uf: "SP" },
  { id: 14, unit: "Itaquera - Piso Superior", uf: "SP" },
  { id: 15, unit: "Jabaquara", uf: "SP" },
  { id: 16, unit: "Lapa", uf: "SP" },
  { id: 17, unit: "Largo Treze", uf: "SP" },
  { id: 18, unit: "Luz (Metrô Luz)", uf: "SP" },
  { id: 19, unit: "Osasco Centro", uf: "SP" },
  { id: 20, unit: "Rebouças - Metro Fradique Coutinho", uf: "SP" },
  { id: 21, unit: "Sacomã", uf: "SP" },
  { id: 22, unit: "Santa Cruz", uf: "SP" },
  { id: 23, unit: "Santana (Metrô Santana)", uf: "SP" },
  { id: 24, unit: "Santo Andre", uf: "SP" },
  { id: 25, unit: "Sao Bernardo Centro", uf: "SP" },
  { id: 26, unit: "Sp Market", uf: "SP" },
  { id: 27, unit: "Sumaré", uf: "SP" },
  { id: 28, unit: "Taboão", uf: "SP" },
  { id: 29, unit: "Tatuapé - Shopping Metro Tatuape", uf: "SP" },
  { id: 30, unit: "Tatuape 2 - Praça Silvio Romero", uf: "SP" },
  { id: 31, unit: "Tatuape 3 - Shopping Boulevard", uf: "SP" },
  { id: 32, unit: "Teodoro", uf: "SP" },
  { id: 33, unit: "Tucuruvi", uf: "SP" }
]

