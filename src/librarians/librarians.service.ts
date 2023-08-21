import { Injectable } from '@nestjs/common';

export type Librarian = any;

@Injectable()
export class LibrariansService {
    private readonly librarians = [
        {
            librarianId: 1,
            librarianname: 'mama',
            password: '123456789',

        },
        {  
            librarianId: 2,
            librarianname: 'papa',
            password: '111222333',

        },
    ];

    async findOne(librarianname: string): Promise<Librarian | undefined> {
        return this.librarians.find(librarian => librarian.librarianname === librarianname)
    }
}
