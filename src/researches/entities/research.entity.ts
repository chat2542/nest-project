import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from 'typeorm';
import { Authorname } from 'src/authorname/entities/authorname.entity';
import { Typeresearch } from 'src/typeresearch/entities/typeresearch.entity';
import { Institutionname } from 'src/institutionname/entities/institutionname.entity';
@Entity()
export class Research {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, length:255 })
    researchname: string;
  
    @Column({ length: 255 })
    yearofpublication: string;
    
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    recordingdate: Date;

    @ManyToOne(() => Authorname, (authorname) => authorname.id)
    authorname: Authorname;
    
    @ManyToOne(() => Typeresearch, (typeresearch) => typeresearch.id)
    typeresearch: Typeresearch;

    @ManyToOne(() => Institutionname, (institionname) => institionname.id)
    institionname: Institutionname;
}
