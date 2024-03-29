export class ErrorPersonalizado extends Error {
   constructor(mensaje: string) {
      super(mensaje);
      this.name = this.constructor.name;
   }
}

export class ErrorDto {
   isValidate: boolean;
   code: string;
   message: string;

   constructor(_isValidate: boolean, _code: string, _message: string) {
      this.isValidate = _isValidate;
      this.code = _code;
      this.message = _message;
   }
}

export interface ErrorProps {
   esValidacion: boolean;
   codigo: string;
   linea: number;
   objeto: string;
   mensaje: string;
   servidor: string;
   fecha_registro: string;
}
