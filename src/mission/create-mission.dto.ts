import { IsString, IsInt } from 'class-validator';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

export class CreateMissionDto {
    @ApiProperty()
    @IsInt()   id: number;

    @ApiProperty()
    @IsString()  title: string;

    @ApiProperty()
    @IsString()  status: string;

    @ApiProperty()
    @IsInt()   result: number;

    @ApiProperty()
    @IsInt()     time: number;

    @ApiProperty()
    @IsString()  userId: string;
}