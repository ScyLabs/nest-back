import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Exemple {
  @Field(() => String)
  _id;

  @Field(() => String)
  @Prop()
  name: string;
}

export type ExempleDocument = Exemple & Document;
export const ExempleSchema = SchemaFactory.createForClass(Exemple);
