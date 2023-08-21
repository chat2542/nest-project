import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';
import { Research } from './entities/research.entity';

@Injectable()
export class ResearchesService {
  constructor(
    @InjectRepository(Research)
    private researchRepository: Repository<Research>,
  ) {}
  create(createResearchDto: CreateResearchDto) {
    return this.researchRepository.save(createResearchDto);
  }

  findAll(): Promise<Research[]> {
    return this.researchRepository.find();
  }

  findOne(id: number): Promise<Research | null> {
    return this.researchRepository.findOneBy({id});
  }

  update(id: number, updateResearchDto: UpdateResearchDto) {
    return this.researchRepository.update(id, updateResearchDto);
  }

  async remove(id: number): Promise<void> {
    await this.researchRepository.delete(id);
  }
}
