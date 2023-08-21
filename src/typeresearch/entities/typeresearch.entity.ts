import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Research } from 'src/researches/entities/research.entity';

@Entity()
export class Typeresearch {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, length:255 })
    value: string;
    
    @OneToMany(() => Research, (research) => research.id)
    research: Research[];
}
