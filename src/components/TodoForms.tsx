import React from 'react'
import { useState } from 'react'

const TodoForms = ({addTodo}) => {
    const [value   , setValue]    = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica se existe alguma informação preenchida, caso sim realiza função, caso não, não faz nada     
        if(!value || !category) return;
        console.log(value, category);

        // Adicionar Tarefa a Lista de Tarefas
        addTodo(value, category)

        // Função para Limpar a Categoria e o Valor
        setValue("")
        setCategory("")
    }
    return (
        <div className="todoForms">
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit} method='POST' >
                <input  value={value} type="text" placeholder='Digite o Título da Tarefa' onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma Categoria:</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudar">Estudar</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForms