import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListItem, ListItemSchema } from './todo.model';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ListItem.name, schema: ListItemSchema }])
  ],
  controllers: [],
  providers: [TodoResolver]
})
export class TodoModule {}
