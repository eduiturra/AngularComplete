enum TipoObjeto{
    Home = 1,
    Unidad = 2,
    Contenido = 3,
    Evaluacion = 4,
    Juego = 5
}

export interface MapeoObjetos {
    IdObjetoPerfil:string;
    Nombre :string;
    Descripcion:string;
    Indice :number;
    Activo:Boolean;
    Finalizado:Boolean;
    Iniciado :Boolean;
    _Factoria:Factoria;
    _TipoObjeto:TipoObjeto;
    _MapeoObjetos?: MapeoObjetos[];
}

interface Factoria{
    TipoObjeto:TipoObjeto;
    TipoFactoria:string;
    SubTipoFactoria:string;
}


export const PoblarMapeoObjetos: MapeoObjetos[] = [{
    IdObjetoPerfil : "idPerf1",
    _Factoria: {
        TipoObjeto :TipoObjeto.Unidad,
        TipoFactoria : "normal",
        SubTipoFactoria : "tipo1"
    },
    Nombre : "Módulo 1",
    Descripcion : "",
    _TipoObjeto:TipoObjeto.Unidad,
    Indice: 1,
    Activo : true,
    Finalizado : true,
    Iniciado : true
},{
    IdObjetoPerfil : "idPerf2",
    _Factoria: {
        TipoObjeto :TipoObjeto.Unidad,
        TipoFactoria : "normal",
        SubTipoFactoria : "tipo1"
    },
    Descripcion : "",
    _TipoObjeto:TipoObjeto.Unidad,
    Nombre : "Módulo 2",
    Indice: 2,
    Activo : false,
    Finalizado : false,
    Iniciado : false
}];

