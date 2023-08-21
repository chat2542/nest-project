import { Module } from '@nestjs/common';
import { ResearchesService } from './researches.service';
import { ResearchesController } from './researches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Research } from './entities/research.entity';
import { Authorname } from 'src/authorname/entities/authorname.entity';
import { Typeresearch } from 'src/typeresearch/entities/typeresearch.entity';
import { Institutionname } from 'src/institutionname/entities/institutionname.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Research, Authorname, Typeresearch, Institutionname])],
  controllers: [ResearchesController],
  providers: [ResearchesService]
})
export class ResearchesModule {}
