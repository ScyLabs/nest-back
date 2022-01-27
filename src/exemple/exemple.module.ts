import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Exemple, ExempleSchema } from './exemple.model';
import { ExempleResolver } from './exemple.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Exemple.name, schema: ExempleSchema }])
  ],
  controllers: [],
  providers: [ExempleResolver]
})
export class ExempleModule {}
