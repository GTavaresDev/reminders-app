import Task from "../types/tasks";

const tasks: Task[] = [
  {
    id: 1,
    title: "Estudar TypeScript",
    completed: false,
    description:
      "Aprender os fundamentos de TypeScript, tipos, interfaces e generics.",
  },
  {
    id: 2,
    title: "Praticar métodos de array",
    completed: true,
    description:
      "Exercitar map, filter, reduce e outros métodos nativos de array.",
  },
  {
    id: 3,
    title: "Fazer exercício de map",
    completed: false,
    description:
      "Criar exemplos práticos usando o método map para transformar arrays.",
  },
  {
    id: 4,
    title: "Revisar reduce",
    completed: false,
    description: "Revisar o funcionamento do reduce e aplicar em casos reais.",
  },
  {
    id: 5,
    title: "Criar projeto pessoal",
    completed: true,
    description:
      "Desenvolver um projeto do zero para consolidar os conhecimentos adquiridos.",
  },
];

console.log(tasks);

export default tasks;
