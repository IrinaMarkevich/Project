import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMissionDto {
    @ApiProperty()
    @IsInt()  readonly id: number;

    @ApiProperty()
    @IsString() readonly title: string;

    @ApiProperty()
    @IsString() readonly status: string;

    @ApiProperty()
    @IsInt()  readonly result: number;

    @ApiProperty()
    @IsInt() readonly evaluation: number;

    @ApiProperty()
    @IsInt()    readonly time: number;
}