import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstitutionnameDto } from './dto/create-institutionname.dto';
import { UpdateInstitutionnameDto } from './dto/update-institutionname.dto';
import { Institutionname } from './entities/institutionname.entity';

@Injectable()
export class InstitutionnameService {
  constructor(
    @InjectRepository(Institutionname)
    private institutionnameRepository: Repository<Institutionname>,
  ) {}
  create(createInstitutionnameDto: CreateInstitutionnameDto) {
    return this.institutionnameRepository.save(createInstitutionnameDto);
  }

  findAll(): Promise<Institutionname[]> {
    return this.institutionnameRepository.find();
  }

  findOne(id: number): Promise<Institutionname | null>  {
    return this.institutionnameRepository.findOneBy({id});
  }

  update(id: number, updateInstitutionnameDto: UpdateInstitutionnameDto) {
    return this.institutionnameRepository.update(id, updateInstitutionnameDto);
  }

  async remove(id: number): Promise<void> {
    await this.institutionnameRepository.delete(id);
  }
}
