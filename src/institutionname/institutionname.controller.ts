import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionnameService } from './institutionname.service';
import { CreateInstitutionnameDto } from './dto/create-institutionname.dto';
import { UpdateInstitutionnameDto } from './dto/update-institutionname.dto';

@Controller('institutionname')
export class InstitutionnameController {
  constructor(private readonly institutionnameService: InstitutionnameService) {}

  @Post()
  create(@Body() createInstitutionnameDto: CreateInstitutionnameDto) {
    return this.institutionnameService.create(createInstitutionnameDto);
  }

  @Get()
  findAll() {
    return this.institutionnameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionnameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstitutionnameDto: UpdateInstitutionnameDto) {
    return this.institutionnameService.update(+id, updateInstitutionnameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutionnameService.remove(+id);
  }
}
