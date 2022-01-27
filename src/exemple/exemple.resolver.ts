import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Exemple } from './exemple.model';

@Resolver()
export class ExempleResolver {
  constructor(@InjectModel(Exemple.name) private readonly exempleModel) {}
  @Query(() => String)
  exemple() {
    return 'Hello world';
  }

  @Mutation(() => Exemple)
  createExemple(@Args('name') name: string) {
    return this.exempleModel.create({
      name
    });
  }
}
