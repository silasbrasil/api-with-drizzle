import {
  serial,
  pgTable,
  varchar,
  boolean,
  timestamp,
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 100 }),
  isActive: boolean('isActive').default(false),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updateAt').defaultNow(),
});
