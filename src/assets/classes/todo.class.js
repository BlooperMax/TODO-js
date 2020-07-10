
export class Todo{

    static fromJson ({tarea,id,completado,fecha}){

        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fecha = fecha;

        return tempTodo;
    }

    constructor( tarea ){

        this.tarea      = tarea;

        this.id         = new Date().getTime(); // id = 129231872389  (Ejemplo de lo que saldrá)
        this.completado = false;
        this.fecha      = new Date(); 

    }

    imprimirTodo(){
        console.log(`${this.tarea}-${this.id}`);
    }
}