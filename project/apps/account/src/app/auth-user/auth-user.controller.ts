import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { UserRdo } from './rdo/user.rdo';
import { CreateUserDto } from './dto/create-user.dto';
import { fillDto } from '@project/shared/helpers';

@Controller('auth-user')
export class AuthUserController {
  constructor(
    private readonly authService: AuthUserService
  ) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillDto(UserRdo, newUser.toPOJO());
  }
}
