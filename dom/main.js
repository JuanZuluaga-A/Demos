const todos = []   //arreglo vacio para almacenar lo que se ingresa       

window.onload = () => {     //para hacer que se cargue cuando la apgina cargue completamente
    const form = document.getElementById('todoform');   //obtiene el elemento del formulario y lo almacena en la comstante
    form.onsubmit = (e) => {    // activa el siguiente codigo al hacer click en el boton del formulario
        e.preventDefault();     //para evitar que la pagina se recargue al hacer click en el boton (desactiva default)
        const todo = document.getElementById('todo');    //Obtiene la informacion ingresada en el campo de texto y lo almacena en la const
        const todotext = todo.value;     // obtiene el valor del campo de texto (el valor sera lo que se ingrese en el y lo almacena en const
        todo.value = '';     //este comando hace que el campo de texto vuelva a estar vacio 
        todos.push(todotext);    //empuja dentro del arreglo (todos) el valor de (todotext)
        const todolist = document.getElementById('todolist')   //obtiene los valores que ya hay en la lista y los guarda en la constante
        
        //Forma Larga
        
        //todolist.innerHTML = '';                                 //deja el codigo html vacio en la lista
        //for (let i=0; i < todos.length; i++){                      // FOR configurado para que siempre guarde
           // todolist.innerHTML += '<li>' + todos [i] + '</li>'     //agrega lo que hay despues del = al codigo HTML


        //Forma Simplficada


        const todostemplate = todos.map (t =>'<li>' + t + '</li>' );   // Almacena en constante el valor de t que se sumara al codigo
        todolist.innerHTML = todostemplate.join('');     //Agrega en el codigo el valor de la constante anterior usando JOIN vacio ('')
        }
    }
