import { Authorname } from "src/authorname/entities/authorname.entity";

export class CreateResearchDto {
    id: number;
    researchname: string;
    yearofpublication: string;
    recordingdate: Date;
    authorname: Authorname;
}
