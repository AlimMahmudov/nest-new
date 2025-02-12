import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from 'prisma/prisma.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [TodoModule, PrismaModule, FoodModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
