import { PartialType } from '@nestjs/swagger';
import { CreateInstitutionnameDto } from './create-institutionname.dto';

export class UpdateInstitutionnameDto extends PartialType(CreateInstitutionnameDto) {}
