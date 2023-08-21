import { Module } from '@nestjs/common';
import { TyperesearchService } from './typeresearch.service';
import { TyperesearchController } from './typeresearch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeresearch } from './entities/typeresearch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Typeresearch])],
  controllers: [TyperesearchController],
  providers: [TyperesearchService]
})
export class TyperesearchModule {}
