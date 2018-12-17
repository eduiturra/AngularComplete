export class Evaluacion{
    CodEvaluacion:string;
    Nombre:string;
    Reseña:string;
    Fecha:Date;
    RutCreador:string;
    Preguntas:Preguntas[];
    constructor(CodEvaluacion:string,Nombre:string,Reseña:string,Fecha:Date,RutCreador:string,Preguntas:Preguntas[]){
        this.CodEvaluacion = CodEvaluacion;
        this.Nombre = Nombre;
        this.Reseña = Reseña;
        this.Fecha = Fecha;
        this.RutCreador = RutCreador;
        this.Preguntas = Preguntas;
    }
  }
  
  export class Preguntas{
    idPreguntas:string;
    Nombre:string;
    NumPregunta:number;
    Pregunta:string;
    Alt1:string;
    Alt2:string;
    Alt3:string;
    Alt4:string;
    Alt5?:string;
    Correcta:string;
    constructor(idPreguntas:string,Nombre:string,NumPregunta:number,Pregunta:string,Alt1:string,Alt2:string,Alt3:string,Alt4:string,Correcta:string){
        this.idPreguntas = idPreguntas;
        this.Nombre = Nombre;
        this.NumPregunta = NumPregunta;
        this.Pregunta = Pregunta;
        this.Alt1 = Alt1;
        this.Alt2 = Alt2;
        this.Alt3 = Alt3;
        this.Alt4 = Alt4;
        this.Correcta = Correcta;
    }

    AlternativaCorrectaTexto():string{
       if(this.Correcta == "a"){
           return this.Alt1;
       }else if(this.Correcta == "b"){
           return this.Alt2;
       }else if(this.Correcta == "c"){
           return this.Alt3;
       }else if(this.Correcta == "d"){
            return this.Alt4;
        }
    }
  }
  
  export class Factoria{
    private CodFactoria:string;
    private Nombre:string;
    private Descripcion:string;
    private Recursos:Recursos[] = [];
    constructor(CodFactoria:string,
        Nombre:string,
        Descripcion:string,
        Recursos:Recursos[]){
            this.CodFactoria = CodFactoria;
            this.Nombre = Nombre;
            this.Descripcion = Descripcion;
            this.Recursos = Recursos;
    }

  }

  export class Recursos{
      RecursosID:string;
      Ruta:string;
      _TipoRecurso:TipoRecurso;
  }

  enum TipoRecurso{
      Imagen=1,
      Texto=2
  }
  
  export class EvalFactoria{
    private CodEvalFactoria:string;
    private Evaluacion:Evaluacion;
    private CodFactoria:Factoria;
    private CantidadPreguntas:number;
    private Random:boolean;
    private FechaCreacion:Date;
    private Abierto:boolean;
    private RutCreador:string;
    constructor(CodEvalFactoria:string,
        Evaluacion:Evaluacion,
        CodFactoria:Factoria,
        CantidadPreguntas:number,
        Random:boolean,
        FechaCreacion:Date,
        Abierto:boolean,
        RutCreador:string,){
            this.CodEvalFactoria = CodEvalFactoria;
            this.Evaluacion = Evaluacion;
            this.CodFactoria = CodFactoria;
            this.CantidadPreguntas = CantidadPreguntas;
            this.Random = Random;
            this.FechaCreacion = FechaCreacion;
            this.Abierto = Abierto;
            this.RutCreador = RutCreador;
        
    }
  
  
    GetTodasPregunta():Preguntas[]{
        return this.Evaluacion.Preguntas;
    }
    GetCantidadPreguntas():number{
        return this.CantidadPreguntas;
    }
    GetPregunta(indice:number):Preguntas{
        return this.Evaluacion.Preguntas[indice];
    }
  
    ValidarCorrecta(Respuesta:string,Indice:number):boolean{
        var id = this.Evaluacion.Preguntas[Indice].idPreguntas;
        return  this.Evaluacion.Preguntas.some(x=>x.idPreguntas==id && x.Correcta == Respuesta);
    }
  
    ValidarTermino(indice:number):boolean{
        let indiceValidar = indice + 1;
        if(indiceValidar >= this.CantidadPreguntas){
           return true;
        }else{
            return false;
        }
    }
  }
  
  
  
  export class UsuarioEval{
    private Promedio:number;
    private Buenas:number;
    private Malas:number;
    private Aprobado?:boolean;
    private FechaInicio:Date;
    private FechaTermino?:Date;
    private _UsuarioPreguntas:UsuarioPregunta[] = [];
    constructor(){ 
            this.Promedio = 0;
            this.Buenas = 0;
            this.Malas = 0;
            this.FechaInicio = new Date();
    }
  
    public GuardarRespuesta(correcta:boolean,respuesta:string,Pregunta:Preguntas):void{
        this._UsuarioPreguntas.push(new UsuarioPregunta(Pregunta.idPreguntas,respuesta,new Date(),correcta));
        if(correcta){
            this.Buenas++;
        }else{
            this.Malas++;
        }
    }
  
    public FinalizarEvaluacion(cantidadPreguntas:number){
        this.Promedio =  (this._UsuarioPreguntas.filter(function(data){
            return data.Correcta;
        }).length * 100)/cantidadPreguntas;
        this.FechaTermino = new Date();
    }
  
    public BuenasCorrectas():number{
        return this.Malas;
    }
  
    public MalasCorrectas():number{
        return this.Buenas;
    }

    public ValidarBuenaIndice(indice:number):Boolean{
        return this._UsuarioPreguntas[indice].Correcta;
    }
  }
  
  
  class UsuarioPregunta{
    CodPregunta:string;
    Respuesta:string;
    Correcta:Boolean;
    FechaRespuesta:Date;
    constructor(Pregunta:string,
        Respuesta:string,
        FechaRespuesta:Date,
        Correcta:Boolean){
            this.FechaRespuesta = FechaRespuesta;
            this.Respuesta = Respuesta;
            this.CodPregunta = Pregunta;
            this.Correcta = Correcta;
    }
  }
  
  