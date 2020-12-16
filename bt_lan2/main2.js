function inputComponent(options) {
    const defaultOptions = {
        type: "text",
        placeholder: ""
    };
    const {type, placeholder, name, id,value} = {...defaultOptions, ...options};
    const inputElement = document.createElement("INPUT");
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("placeholder", placeholder);
    inputElement.setAttribute("name", name);
    inputElement.setAttribute("id", id);
    inputElement.setAttribute("value", value);
    return inputElement;
}

function buttonComponent(options) {
    const defaultOptions = {
        className: "btn",
        onClick: function () {
        }
    };
    const {className, text, onClick} = {...defaultOptions, ...options};
    const buttonElement = document.createElement("button");

    buttonElement.classList.add(className);
    buttonElement.innerText = text;
    buttonElement.addEventListener("click", function () {
        onClick();
    });

    return buttonElement;
}

function formInputDataComponent( {onADD}) {
    const formElement = document.createElement("div");
    const inputText = inputComponent({
        type: "TEXT",
        value:"vuong",
        name:"Name",
        id:"Name",
        placeholder:"add a tank"

    });
    const buttonSubmit=buttonComponent({
        text: "Them",
        onClick: function () {
                onADD();
        }});
    formElement.appendChild(inputText);
    formElement.appendChild(buttonSubmit);
    return formElement;
}

function listComponent({text, onDelete, onEdit}) {
    const listElement = document.createElement("div");

    const buttonDelete = buttonComponent({
        text: "Delete",
        onClick: function () {
            onDelete();
        }
    });

    const buttonEdit = buttonComponent({
        text: "Edit",
        onClick: function () {
            onEdit();
        }
    });

    listElement.classList.add("list");

    listElement.innerText = text;

    listElement.appendChild(buttonDelete);
    listElement.appendChild(buttonEdit);

    return listElement;
}

const appElement = document.getElementById("app");
const formtodolistComponent1=formInputDataComponent({onADD: function () {
        const todolistComponent1 = listComponent({
            text: 'vuong',
            onDelete: function () {
                console.log("delete");
            },
            onEdit: function () {
                console.log("edit");
            }
        });
        appElement.appendChild(todolistComponent1);
    }});


appElement.appendChild(formtodolistComponent1);

