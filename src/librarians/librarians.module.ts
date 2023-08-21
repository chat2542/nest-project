import { Module } from '@nestjs/common';
import { LibrariansService } from './librarians.service';

@Module({
  providers: [LibrariansService],
  exports: [LibrariansService]
})
export class LibrariansModule {}
