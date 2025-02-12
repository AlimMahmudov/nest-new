import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    return await this.foodService.create(createFoodDto);
  }

  @Get()
  async findAll() {
    return await this.foodService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.foodService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return await this.foodService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.foodService.remove(+id);
  }
}
