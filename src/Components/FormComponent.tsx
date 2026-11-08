//a form componenet that will have a text npit fr the todo title
//and a btuttpn to submit the todo
//later it will be used to edit the todos as well.
import type { TodoCardProps } from "./TodoApp";

export default function FormComponent({id, title}: TodoCardProps) {
    return <div>
        <form action="">
            <label htmlFor="title">Todo Title</label>
            <input type="text" name="title" id="title" value={title} />
        </form>
    </div>

}