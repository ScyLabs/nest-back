import { Args, Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListItemInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  value: number;

  @Field(() => String)
  color: string;

  @Field(() => String, { nullable: true })
  description: string;
}
