import { CompTransaccionTransferencia } from "./comp-transaccion-transferencia";
import { DetTransaccionTransferencia } from "./det-transaccion-transferencia";
import { UsuarioTransferencia } from "./usuario-transferencia";

export class CabTransaccionTransferencia {
    id_CAB: number;
    estado: string;
    valor_TRANSFERIDO: number;
    fecha_TRANSACCION: string;
    numero_TRANSACCION_IMC: string;
    fecha_INICIAL: string;
    usuario_VERIFICACION: string;
    fecha_VERIFICACION: string;
    observacion_VERIFICACION: string;
    cod_CAJA: string;
    fecha_REVERSO: string;
    usuario_REVERSO: string;
    detalleTransacciones: DetTransaccionTransferencia[] = [];
    usuario: UsuarioTransferencia; 
    detalleComprobantes: CompTransaccionTransferencia[] = [];    

    constructor(id_CAB: number, estado: string, valor_TRANSFERIDO: number, fecha_TRANSACCION: string, numero_TRANSACCION_IMC: string, fecha_INICIAL: string, usuario_VERIFICACION: string, fecha_VERIFICACION: string, observacion_VERIFICACION: string, cod_CAJA: string, fecha_REVERSO: string, usuario_REVERSO: string, usuario: UsuarioTransferencia) {
        this.id_CAB = id_CAB;
        this.estado = estado;
        this.valor_TRANSFERIDO = valor_TRANSFERIDO;
        this.fecha_TRANSACCION = fecha_TRANSACCION;
        this.numero_TRANSACCION_IMC = numero_TRANSACCION_IMC;
        this.fecha_INICIAL = fecha_INICIAL;
        this.usuario_VERIFICACION = usuario_VERIFICACION;
        this.fecha_VERIFICACION = fecha_VERIFICACION;
        this.observacion_VERIFICACION = observacion_VERIFICACION;
        this.cod_CAJA = cod_CAJA;
        this.fecha_REVERSO = fecha_REVERSO;
        this.usuario_REVERSO = usuario_REVERSO;
        this.usuario = usuario;
    }     
}
