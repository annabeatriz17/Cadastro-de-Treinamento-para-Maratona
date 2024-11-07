import { Router } from "express";

const treinamentoRoutes = Router();

let treinamento = [
  {
    id: Math.floor(Math.random() * 100),
    nomeTreinamento: "Treinamento 1",
    distancia: 10,
    diasSemana: 5,
    avaliacaoTreino: 4,
  },
];


treinamentoRoutes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Não há treinamentos cadastrados!",
    treinamento,
  });
}); 

treinamentoRoutes.post("/", (req, res) => {
  const { nomeTreinamento, distancia, diasSemana, avaliacaoTreino } = req.body;


  if (!nomeTreinamento || !distancia) {
    return res.status(400).json({
      message: "Os campos nomeTreinamento e distancias!",
    });
  }

  if (diasSemana < 2) {
    return res.status(400).send({
      message: "O campo diasSemana deve conter no mínimo 2 dias!",
    });
  }

  if (avaliacaoTreino != "ruim" && avaliacaoTreino != "bom" && avaliacaoTreino != "excelente") {
    return res.status(400).send({
      message: "Digite 'ruim', 'bom' ou 'excelente'! em avaliacaoTreino!",
    });
  }

  const novoTreinamento = {
    id: Math.floor(Math.random() * 100),
    nomeTreinamento,
    distancia,
    diasSemana,
    avaliacaoTreino
  };

  treinamento.push(novoTreinamento);

  return res.status(201).json({
    message: "Treinamento cadastrado com sucesso!",
    novoTreinamento,
  });
});



export default treinamentoRoutes;
