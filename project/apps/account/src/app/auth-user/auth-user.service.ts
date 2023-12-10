import { Injectable } from '@nestjs/common';
import { BlogUserRepository } from '../blog-user/blog-user.repository';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}
}
