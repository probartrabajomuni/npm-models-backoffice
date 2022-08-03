export class DetTransaccionTransferenciaDto {
    titulo: string;
    valor: number;
    anio: number;
    fecha_EMISION: string;
    codigo_RUBRO: string;
    descripcion_RUBRO: string;
    estado: string; 
    
    constructor(titulo: string, valor: number, anio: number, fecha_EMISION: string, codigo_RUBRO: string, descripcion_RUBRO: string, estado: string) {
        this.titulo = titulo;
        this.valor = valor;
        this.anio = anio;
        this.fecha_EMISION = fecha_EMISION;
        this.codigo_RUBRO = codigo_RUBRO;
        this.descripcion_RUBRO = descripcion_RUBRO;
        this.estado = estado;
    }     
}
