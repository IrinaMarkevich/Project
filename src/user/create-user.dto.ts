import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString() readonly id: string;
    @IsString() readonly name: string;
    @IsString() readonly password: string;
    @IsString() readonly email: string;
    @IsString() readonly gender: string;
    @IsInt()    readonly age: number;
}