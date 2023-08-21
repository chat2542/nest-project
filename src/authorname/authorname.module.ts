import { Module } from '@nestjs/common';
import { AuthornameService } from './authorname.service';
import { AuthornameController } from './authorname.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorname } from './entities/authorname.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Authorname])],
  controllers: [AuthornameController],
  providers: [AuthornameService]
})
export class AuthornameModule {}
