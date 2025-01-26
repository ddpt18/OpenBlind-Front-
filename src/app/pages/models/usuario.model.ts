export class Usuario {
  constructor(
    public rol: string,
    public email: string,
    public telefono: string,
    public nombres: string,
    public apellidos: string,
    public fechaNacimiento: string
  ) {
    if (!this.isValidEmail(email)) {
      throw new Error('Correo electrónico inválido');
    }

    if (!this.isValidPhone(telefono)) {
      throw new Error('Número de teléfono inválido');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^\d{10}$/; // Cambia según el formato esperado
    return phoneRegex.test(phone);
  }
}
