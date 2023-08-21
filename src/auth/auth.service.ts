import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LibrariansService } from 'src/librarians/librarians.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private librarianService: LibrariansService,
        private jwtService: JwtService
        ) {}

    async signIn(librarianname, pass) {
        const librarian = await this.librarianService.findOne(librarianname);
        if(librarian?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = {sub: librarian.librarianId, librarianname: librarian.librarianname};
        return {
            access_toekn: await this.jwtService.signAsync(payload),
        };
    }
}
