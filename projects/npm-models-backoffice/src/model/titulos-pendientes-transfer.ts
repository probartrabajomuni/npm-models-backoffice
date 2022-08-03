export class TitulosPendientesTransfer {
    codigo_TRANSFERENCIA: number;
    tic_TITULO: string;
    tic_ANO: number;
    rub_CODIGO: string;
    con_CEDULA_RUC: string;
    tit_USUARIO_INGRESA: string;
    tit_FECHA_INGRESO: string;
    estado: string;
    tit_FECHA_MODIFICA: string;
    tit_USUARIO_MODIFICA: string;
    tit_DESCUENTO: number;
    tit_RECARGO: number;
    tit_INTERESES: number;
    tit_POR_EXONERACION: number;
    tit_POR_FECHA: number;
    tit_MONTO_EXONERACION: number;
    tit_MONTO_ABONOS: number;

    constructor(codigo_TRANSFERENCIA: number, tic_TITULO: string, tic_ANO: number, rub_CODIGO: string, con_CEDULA_RUC: string, tit_USUARIO_INGRESA: string, tit_FECHA_INGRESO: string, estado: string, tit_FECHA_MODIFICA: string, tit_USUARIO_MODIFICA: string, tit_DESCUENTO: number, tit_RECARGO: number, tit_INTERESES: number, tit_POR_EXONERACION: number, tit_POR_FECHA: number, tit_MONTO_EXONERACION: number, tit_MONTO_ABONOS: number) {
        this.codigo_TRANSFERENCIA = codigo_TRANSFERENCIA;
        this.tic_TITULO = tic_TITULO;
        this.tic_ANO = tic_ANO;
        this.rub_CODIGO = rub_CODIGO;
        this.con_CEDULA_RUC = con_CEDULA_RUC;
        this.tit_USUARIO_INGRESA = tit_USUARIO_INGRESA;
        this.tit_FECHA_INGRESO = tit_FECHA_INGRESO;
        this.estado = estado;
        this.tit_FECHA_MODIFICA = tit_FECHA_MODIFICA;
        this.tit_USUARIO_MODIFICA = tit_USUARIO_MODIFICA;
        this.tit_DESCUENTO = tit_DESCUENTO;
        this.tit_RECARGO = tit_RECARGO;
        this.tit_INTERESES = tit_INTERESES;
        this.tit_POR_EXONERACION = tit_POR_EXONERACION;
        this.tit_POR_FECHA = tit_POR_FECHA;
        this.tit_MONTO_EXONERACION = tit_MONTO_EXONERACION;
        this.tit_MONTO_ABONOS = tit_MONTO_ABONOS;
    }    
}
