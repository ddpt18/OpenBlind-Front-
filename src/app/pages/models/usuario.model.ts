// perfil.model.ts
export class Usuario {
    rol: string;
    email: string;
    telefono: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    constructor(rol: string, email: string, telefono: string, nombres: string, apellidos: string, fechaNacimiento: string) {
      this.rol = rol;
      this.email = email;
      this.telefono = telefono;
      this.nombres= nombres;
      this.apellidos= apellidos;
      this.fechaNacimiento= fechaNacimiento;
    }
  }