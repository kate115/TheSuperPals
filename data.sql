CREATE TABLE friends (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, gender TEXT, likedOutOfTen INTEGER, crushOn TEXT);

INSERT INTO friends VALUES (1, "Ryan", 8, "Male", 10, "Melody");
INSERT INTO friends VALUES (2, "Isabela", 7, "Female", 10, "Joshua");
INSERT INTO friends VALUES (3, "Samar", 7, "Male", 7, "None");
INSERT INTO friends VALUES (4, "Parnika", 9, "Female", 9, "None");
INSERT INTO friends VALUES (5, "Serenity", 7, "Female", 8, "None");
INSERT INTO friends VALUES (6, "Ella", 10, "Female", 5, "None");
INSERT INTO friends VALUES (7, "Emily", 10, "Female", 5, "None");
INSERT INTO friends VALUES (8, "Katie", 12, "Female", 6, "None");

SELECT * FROM friends;