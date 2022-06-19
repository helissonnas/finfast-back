CREATE TABLE PUBLIC.FAMILY (
  ID SERIAL PRIMARY KEY,
  NAME TEXT NOT NULL
);

CREATE INDEX FAMILY_IDX ON PUBLIC.FAMILY USING BTREE (ID);

COMMIT;

CREATE TABLE PUBLIC.USER (
  ID SERIAL PRIMARY KEY,
  NAME TEXT NOT NULL,
  ICON TEXT NOT NULL,
  EMAIL TEXT NOT NULL,
  FAMILY_ID INTEGER REFERENCES PUBLIC.FAMILY
);

CREATE TABLE PUBLIC.RECURRENCE (
  ID SERIAL PRIMARY KEY,
  TYPE TEXT NOT NULL,
  REPEAT_UNTIL DATE,
  REPEATE_RATE INTEGER
);

COMMIT;

CREATE TABLE PUBLIC.TRANSACTION_CLASS (
  ID SERIAL PRIMARY KEY,
  NAME TEXT NOT NULL,
  TAGS TEXT,
  FAMILY_ID INTEGER REFERENCES PUBLIC.FAMILY
);

CREATE INDEX TRAN_CLASS_IDX ON PUBLIC.TRANSACTION_CLASS USING BTREE (NAME);

COMMIT;

CREATE TABLE PUBLIC.TRANSACTION_SUBCLASS (
  ID SERIAL PRIMARY KEY,
  NAME TEXT NOT NULL,
  TAGS TEXT,
  CLASS_ID INTEGER REFERENCES PUBLIC.TRANSACTION_CLASS,
  FAMILY_ID INTEGER REFERENCES PUBLIC.FAMILY
);

CREATE INDEX TRAN_SUBCLASS_IDX ON PUBLIC.TRANSACTION_SUBCLASS USING BTREE (NAME);

CREATE TABLE PUBLIC.TRANSACTION (
  ID SERIAL PRIMARY KEY,
  AMOUNT MONEY NOT NULL,
  TYPE TEXT NOT NULL,
  DETAIL TEXT NOT NULL,
  USER_ID INTEGER REFERENCES PUBLIC.USER,
  CLASS_ID INTEGER REFERENCES PUBLIC.TRANSACTION_CLASS,
  RECURRENCE_ID INTEGER REFERENCES PUBLIC.RECURRENCE
);

COMMIT;