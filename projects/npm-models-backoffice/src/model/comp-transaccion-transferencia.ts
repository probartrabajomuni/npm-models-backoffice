export class CompTransaccionTransferencia {
    id_COM: number;
    nro_COMPROBANTE: string;
    valor_TRANSFERIDO: number;
    fecha_TRANSFERIDO: string;
    institucion_FINANCIERA: string;
    comprobante_REPO: string;
    fecha_CREACION: string;
    institucion_FINANCIERA_GAD: string;
    fecha_ACREDITACION: string;
    nro_ACREDITACION: string;
    valor_ACREDITACION: number;
    usuario_REGISTRO: string;
    fecha_REGISTRO: string;

    constructor(id_COM: number,nro_COMPROBANTE: string,valor_TRANSFERIDO: number,fecha_TRANSFERIDO: string,institucion_FINANCIERA: string,comprobante_REPO: string,fecha_CREACION: string,institucion_FINANCIERA_GAD: string, fecha_ACREDITACION: string, nro_ACREDITACION: string, valor_ACREDITACION: number, usuario_REGISTRO: string, fecha_REGISTRO: string) {
        this.id_COM = id_COM;
        this.nro_COMPROBANTE = nro_COMPROBANTE;
        this.valor_TRANSFERIDO = valor_TRANSFERIDO;
        this.fecha_TRANSFERIDO = fecha_TRANSFERIDO;
        this.institucion_FINANCIERA = institucion_FINANCIERA;
        this.comprobante_REPO = comprobante_REPO;
        this.fecha_CREACION = fecha_CREACION;
        this.institucion_FINANCIERA_GAD = institucion_FINANCIERA_GAD;
        this.fecha_ACREDITACION = fecha_ACREDITACION;
        this.nro_ACREDITACION = nro_ACREDITACION;
        this.valor_ACREDITACION = valor_ACREDITACION;
        this.usuario_REGISTRO = usuario_REGISTRO;
        this.fecha_REGISTRO = fecha_REGISTRO;
    }     
}
