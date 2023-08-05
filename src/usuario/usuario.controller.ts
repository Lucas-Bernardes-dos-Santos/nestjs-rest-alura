import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  private usuarioService = new UsuarioService()

  @Post()
  public criar(@Body() usuario: any) {
    return this.usuarioService.criar(usuario)
  }
}
