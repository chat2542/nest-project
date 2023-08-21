import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthornameDto } from './dto/create-authorname.dto';
import { UpdateAuthornameDto } from './dto/update-authorname.dto';
import { Authorname } from './entities/authorname.entity';

@Injectable()
export class AuthornameService {
  constructor(
    @InjectRepository(Authorname)
    private authornameRepository: Repository<Authorname>,
  ) {}
  create(createAuthornameDto: CreateAuthornameDto) {
    return this.authornameRepository.save(createAuthornameDto);
  }

  findAll(): Promise<Authorname[]> {
    return this.authornameRepository.find();
  }

  findOne(id: number): Promise<Authorname | null> {
    return this.authornameRepository.findOneBy({id});
  }

  update(id: number, updateAuthornameDto: UpdateAuthornameDto) {
    return this.authornameRepository.update(id, updateAuthornameDto);
  }

  async remove(id: number): Promise<void> {
    await this.authornameRepository.delete(id);
  }
}
