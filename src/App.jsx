import { useState } from 'react';
import './App.css';
import { Box } from '@chakra-ui/react'
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
			<Box  margin='15px' padding='10px' width='170%' borderWidth='2px' borderRadius='lg' >
				<h1>Lista de Tareas</h1>
				<br/>
				<div >
					<TodoAdd handleNewTodo={handleNewTodo} /> 
				</div>

				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</Box>
		</>
	);
}

export default App;
