import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  price: string;
  @ApiProperty()
  image: string;
}

export class Food {
  [x: string]: any;
  food: any = [];
}
