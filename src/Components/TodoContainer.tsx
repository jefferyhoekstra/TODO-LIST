//This component will have a Todo List
//Then we will map into several TodoCards
import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({ todosList }: TodosContainerProps) {
    return <div>
        {todosList.map((todo) => ( 
            <TodoCard key={todo.id} {...todo}/>
        )
    )}
    </div>

}