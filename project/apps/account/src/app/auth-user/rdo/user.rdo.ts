import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @Expose()
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  public avatar: string;

  @Expose()
  @ApiProperty({
    description: 'User register date ',
    example: '13-12-2023'
  })
  public registeredAt: string;

  @Expose()
  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  public email: string;

  @Expose()
  @ApiProperty({
    description: 'User firstname',
    example: 'Ivan'
  })
  public firstname: string;

  @Expose()
  @ApiProperty({
    description: 'User lastname',
    example: 'Ivanov'
  })
  public lastname: string;
}
