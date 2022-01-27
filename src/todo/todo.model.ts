import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class ListItem {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Number)
  @Prop()
  value: number;

  @Field(() => String, { nullable: true })
  @Prop()
  color: string;

  @Field(() => String, { nullable: true })
  @Prop()
  description: string;
}

export type ListItemDocument = ListItem & Document;
export const ListItemSchema = SchemaFactory.createForClass(ListItem);
