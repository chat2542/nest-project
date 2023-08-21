import { Module } from '@nestjs/common';
import { InstitutionnameService } from './institutionname.service';
import { InstitutionnameController } from './institutionname.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institutionname } from './entities/institutionname.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institutionname])],
  controllers: [InstitutionnameController],
  providers: [InstitutionnameService]
})
export class InstitutionnameModule {}
