import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Keks',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  public lastname: string;

  @ApiProperty({
    description: 'Путь к аватару',
    example: '/my-avatar.jpg'
  })
  public avatar: string;

  @ApiProperty({
    description: 'User registration date',
    example: '1981-03-12',
  })
  public registeredAt: string;

  @ApiProperty({
    description: 'User password',
    example: '12345'
  })
  public password: string;
}
