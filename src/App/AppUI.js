import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TaskList } from "../TodosLoading/TodosLoading.js";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";



function AppUI() {

    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TaskList />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export { AppUI }