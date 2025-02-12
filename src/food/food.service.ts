import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private prismaService: PrismaService) {}

  async create(createFoodDto: CreateFoodDto) {
    const newFood = await this.prismaService.food.create({
      data: {
        title: createFoodDto.title,
        price: createFoodDto.price,
        image: createFoodDto.image,
      },
    });
    return { status: HttpStatus.CREATED, newFood };
  }

  async findAll() {
    return await this.prismaService.food.findMany();
  }

  async findOne(id: number) {
    const food = await this.prismaService.food.findUnique({
      where: { id },
    });
    if (!food) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `Еда с id ${id} не найдена`,
      };
    }
    return food;
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const updatedFood = await this.prismaService.food.update({
      where: { id },
      data: updateFoodDto,
    });
    return { status: HttpStatus.OK, updatedFood };
  }

  async remove(id: number) {
    const deletedFood = await this.prismaService.food.delete({
      where: { id },
    });
    return { status: HttpStatus.OK, deletedFood };
  }
}
