import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthornameService } from './authorname.service';
import { CreateAuthornameDto } from './dto/create-authorname.dto';
import { UpdateAuthornameDto } from './dto/update-authorname.dto';

@Controller('authorname')
export class AuthornameController {
  constructor(private readonly authornameService: AuthornameService) {}

  @Post()
  create(@Body() createAuthornameDto: CreateAuthornameDto) {
    return this.authornameService.create(createAuthornameDto);
  }

  @Get()
  findAll() {
    return this.authornameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authornameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthornameDto: UpdateAuthornameDto) {
    return this.authornameService.update(+id, updateAuthornameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authornameService.remove(+id);
  }
}
