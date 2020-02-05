import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsString() readonly id: string;

    @ApiProperty()
    @IsString() readonly name: string;

    @ApiProperty()
    @IsString() readonly password: string;

    @ApiProperty()
    @IsString() readonly email: string;

    @ApiProperty()
    @IsString() readonly gender: string;

    @ApiProperty()
    @IsInt()    readonly age: number;
}