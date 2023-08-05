import { Body, Controller, Post } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
  private usuarios = []

  @Post()
  public criar(@Body() usuario: any) {
    this.usuarios.push(usuario)

    return usuario
  }
}
