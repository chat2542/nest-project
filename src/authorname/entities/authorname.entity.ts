import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { Research } from 'src/researches/entities/research.entity';

@Entity()
export class Authorname {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length:255  })
  authorname: string;

  @OneToMany(() => Research, (research) => research.id)
  research: Research[];
}
