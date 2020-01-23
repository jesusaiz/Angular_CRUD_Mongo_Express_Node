
//type TareaEstados = "";
//export var TareaEstadosSelect = [{value: "Por hacer"}, {value: "En progreso"}, {value: "Hecha"}];

export class TareaModel {
    constructor(
    	public _id: string,
      public titulo: string,
      public fecha: Date,
      public estado: string,
      public description: string
	) {}
}
