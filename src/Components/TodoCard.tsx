//this component will contain
// 1. a body for the title of the totdo message.
//2 a button for dleting this todo entry
//3. a button to edit this todo entry
//4 a checkbox tat will be used to check the entry if completed

export default function TodoCard( { checked, title )} {
    return (
        <div>
        <input type="checkbox" name="checked" id="checked" checked={checked} />
        <span>{title}</span>
        <button>Delete</button>
        <button>Edit</button>
        </div>
    );
}

