import { PartialType } from '@nestjs/swagger';
import { CreateAuthornameDto } from './create-authorname.dto';

export class UpdateAuthornameDto extends PartialType(CreateAuthornameDto) {}
