import { Inject, Injectable } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DB_CONNECTION_TOKEN } from './database.options';

@Injectable()
export class DrizzleService {
  public db: NodePgDatabase;

  constructor(@Inject(DB_CONNECTION_TOKEN) private readonly pool: Pool) {
    this.db = drizzle(this.pool);
  }
}
