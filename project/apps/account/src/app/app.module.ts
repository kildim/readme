import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthUserModule } from './auth-user/auth-user.module';

@Module({
  imports: [BlogUserModule, AuthUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
