INSERT INTO PUBLIC.FAMILY (NAME) VALUES ('Silva');
INSERT INTO PUBLIC.FAMILY (NAME) VALUES ('Testaburger');

COMMIT;

INSERT INTO PUBLIC.USER (NAME, ICON, EMAIL, FAMILY_ID) 
VALUES
  ('Charlinho', 'grinning_cat', 'charles_charlinho@gmail.com', 1),
  ('Jhonny Hopkins', 'alien', 'jhonny_hop@bol.com', 1),
  ('Mary Anne', 'alien_monster', 'mary_ann@gmail.com', 1),
  ('Juliane', 'woman_ligth_skin_tone_red_hair', 'jujuju@gmail.com', 1);

INSERT INTO PUBLIC.USER (NAME, ICON, EMAIL, FAMILY_ID) 
VALUES
  ('Wendy', 'grinning_cat', 'wendy@gmail.com', 2),
  ('Jhon', 'alien', 'jhon@bol.com', 2);

COMMIT;

INSERT INTO PUBLIC.TRANSACTION_CLASS (NAME, FAMILY_ID)
VALUES
  ('Lunch', 1),
  ('Clothing', 1),
  ('Education', 1),
  ('Car', 1),
  ('Compensation', 1);

COMMIT;

INSERT INTO PUBLIC.TRANSACTION (AMOUNT, TYPE, DETAIL, USER_ID, CLASS_ID) 
VALUES
  (13, 'EXPENSE', 'Almoço', 1, 1),
  (72, 'EXPENSE', 'Calça', 4, 2),
  (8000, 'REVENUE', 'Salário', 1, 5);

COMMIT;
