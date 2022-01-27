import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ExempleModule } from './exemple/exemple.module';
import { TodoModule } from './todo/todo.module';

export const AUTHORIZED_CLIENTS = [
  'http://localhost:3000',
  'https://localhost:3001',
  'http://localhost:3001'
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.prod.local',
        '.env.prod',
        '.env.dev.local',
        '.env.dev',
        '.env.local',
        '.env'
      ],
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        debug: configService.get('NODE_ENV') === 'development',
        playground: configService.get('NODE_ENV') === 'development',
        autoSchemaFile: true,
        formatError: (error: any) => {
          const graphQLFormattedError: GraphQLFormattedError = {
            message:
              error.extensions?.exception?.response?.message || error.message
          };

          return graphQLFormattedError;
        },
        cors: {
          origin: AUTHORIZED_CLIENTS
        },
        context: ({ req, res }) => ({ req, res })
      }),
      inject: [ConfigService]
    }),
    ExempleModule,
    TodoModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
