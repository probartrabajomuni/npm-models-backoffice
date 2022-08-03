export class UsuarioTransferencia {
    id_USUARIO: number;
    apellidos: string;
    nombres: string;
    telf_CONVENCIONAL: string;
    telf_CELULAR: string;
    email: string;
    documento: string;
    documento_FACTURACION: string;

    constructor(id_USUARIO: number, apellidos: string, nombres: string, telf_CONVENCIONAL: string, telf_CELULAR: string, email: string, documento: string, documento_FACTURACION: string) {
        this.id_USUARIO = id_USUARIO;
        this.apellidos = apellidos;
        this.nombres = nombres;
        this.telf_CONVENCIONAL = telf_CONVENCIONAL;
        this.telf_CELULAR = telf_CELULAR;
        this.email = email;
        this.documento = documento;
        this.documento_FACTURACION = documento_FACTURACION;
    }    
}
