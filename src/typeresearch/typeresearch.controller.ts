import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TyperesearchService } from './typeresearch.service';
import { CreateTyperesearchDto } from './dto/create-typeresearch.dto';
import { UpdateTyperesearchDto } from './dto/update-typeresearch.dto';

@Controller('typeresearch')
export class TyperesearchController {
  constructor(private readonly typeresearchService: TyperesearchService) {}

  @Post()
  create(@Body() createTyperesearchDto: CreateTyperesearchDto) {
    return this.typeresearchService.create(createTyperesearchDto);
  }

  @Get()
  findAll() {
    return this.typeresearchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeresearchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTyperesearchDto: UpdateTyperesearchDto) {
    return this.typeresearchService.update(+id, updateTyperesearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeresearchService.remove(+id);
  }
}
