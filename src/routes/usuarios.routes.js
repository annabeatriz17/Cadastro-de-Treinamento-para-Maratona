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

usuariosRoutes.get("/", (req, res) => {
  return res.status(200).json({
    message:
      usuarios.length == 0
        ? "Não há usuários cadastrados"
        : `Total de usuários: ${usuarios.length}`,
    usuarios,
  });
});

export default usuariosRoutes;
