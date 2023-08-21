import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTyperesearchDto } from './dto/create-typeresearch.dto';
import { UpdateTyperesearchDto } from './dto/update-typeresearch.dto';
import { Typeresearch } from './entities/typeresearch.entity';

@Injectable()
export class TyperesearchService {
  constructor(
    @InjectRepository(Typeresearch)
    private typeresearchRepository: Repository<Typeresearch>,
  ) {}

  create(createTyperesearchDto: CreateTyperesearchDto) {
    return this.typeresearchRepository.save(createTyperesearchDto);
  }

  findAll(): Promise<Typeresearch[]> {
    return this.typeresearchRepository.find();
  }

  findOne(id: number): Promise<Typeresearch | null>  {
    return this.typeresearchRepository.findOneBy({id});
  }

  update(id: number, updateTyperesearchDto: UpdateTyperesearchDto) {
    return this.typeresearchRepository.update(id, updateTyperesearchDto);
  }

  async remove(id: number): Promise<void> {
    await this.typeresearchRepository.delete(id);
  }
}
