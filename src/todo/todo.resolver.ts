import { Inject } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { ListItemInput } from './inputs/todo.input';
import { ListItem } from './todo.model';

@Resolver()
export class TodoResolver {
  constructor(@InjectModel(ListItem.name) private listItemModel) {}

  @Query(() => [ListItem])
  showList() {
    return this.listItemModel.find({});
  }

  @Mutation(() => ListItem)
  addToList(@Args('input') input: ListItemInput) {
    return this.listItemModel.create(input);
  }
}
