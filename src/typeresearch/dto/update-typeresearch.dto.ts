import { PartialType } from '@nestjs/swagger';
import { CreateTyperesearchDto } from './create-typeresearch.dto';

export class UpdateTyperesearchDto extends PartialType(CreateTyperesearchDto) {}
