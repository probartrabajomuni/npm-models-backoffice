export class DetTransaccionTransferencia {
    id_DET: number;
    valor: number;
    anio: number;
    fecha_EMISION: string;
    codigo_RUBRO: string;
    descripcion_RUBRO: string;
    titulo: string;
    direccion_OBSERVACIONES: string; 
    
    constructor(id_DET: number, valor: number, anio: number, fecha_EMISION: string, codigo_RUBRO: string, descripcion_RUBRO: string, titulo: string, direccion_OBSERVACIONES: string) {
        this.id_DET = id_DET;
        this.valor = valor;
        this.anio = anio;
        this.fecha_EMISION = fecha_EMISION;
        this.codigo_RUBRO = codigo_RUBRO;
        this.descripcion_RUBRO = descripcion_RUBRO;
        this.titulo = titulo;
        this.direccion_OBSERVACIONES = direccion_OBSERVACIONES;
    }     
}
