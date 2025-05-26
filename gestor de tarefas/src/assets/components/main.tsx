import { useState } from "react";

export const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const adicionarTarefa = () => {
    if (input.trim() === "") return;

    const novaTarefa = {
      id: Date.now(), 
      texto: input
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput(""); 
  };

  const eliminarTarefa = (id) => {
    const atualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(atualizadas);
  };

  return (
    <div className="flex flex-col justify-center items-center" style={{ padding: "20px" }}>
      <h2 className="font-bold text-5xl"></h2>
    <div className="flex flex row">
      <input 
      className="border-2 border-amber-900 rounded-2xl"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escrever"
      />
      <button onClick={adicionarTarefa} className="ml-2 p-2 rounded-full bg-amber-900">+</button>
        </div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => eliminarTarefa(tarefa.id)} style={{ marginLeft: "10px" }} className="bg-red-600 rounded-md">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};