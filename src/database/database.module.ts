import { Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';
import { Pool } from 'pg';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DB_CONNECTION_TOKEN } from './database.options';

@Module({
  imports: [ConfigModule],
  exports: [DrizzleService],
  providers: [
    {
      provide: DB_CONNECTION_TOKEN,
      useFactory: () => {
        return new Pool({
          connectionString: process.env.POSTGRES_URL,
        });
      },
    },
    DrizzleService,
  ],
})
export class DatabaseModule {}
