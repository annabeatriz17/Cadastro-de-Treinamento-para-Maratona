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

  
  if (!nomeTreinamento || !distancia || !diasSemana || !avaliacaoTreino) {
    return res.status(400).json({
      message: "Os campos nomeTreinamento, distancia, diasSemana e avaliacaoTreino são obrigatórios!",
    });
  };

});

export default treinamentoRoutes;
