import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Research } from './researches/entities/research.entity';
import { Authorname } from './authorname/entities/authorname.entity';
import { ResearchesModule } from './researches/researches.module';
import { AuthornameModule } from './authorname/authorname.module';
import { TyperesearchModule } from './typeresearch/typeresearch.module';
import { InstitutionnameModule } from './institutionname/institutionname.module';
import { Typeresearch } from './typeresearch/entities/typeresearch.entity';
import { Institutionname } from './institutionname/entities/institutionname.entity';
import { AuthModule } from './auth/auth.module';
import { LibrariansModule } from './librarians/librarians.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: './app.sqlite',
      entities: [Research, Authorname, Typeresearch, Institutionname],
      synchronize: true
    }),
    ResearchesModule,
    AuthornameModule,
    TyperesearchModule,
    InstitutionnameModule,
    AuthModule,
    LibrariansModule,
  ],
})
export class AppModule {}
