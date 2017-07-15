# thugsNeedHugs
just some thugnificent crud app from CRUD app University.

will dick around with a cli todo list and some front end site sketching. if you see this readme and start following my repo, check my mixtape. shit is fiiiiire.

```
aybruh=# CREATE DATABASE thungsNhugs;
CREATE DATABASE
aybruh=# \c thungsnhugs
You are now connected to database "thungsnhugs" as user "djbrigidope".
```

```
thungsnhugs=# CREATE TABLE uploadersOakland (id SERIAL PRIMARY KEY, online_handleTEXT, first_name TEXT, last_name TEXT, hood TEXT, city TEXT, country TEXT);
ERROR:  syntax error at or near ","
LINE 1: ...sOakland (id SERIAL PRIMARY KEY, online_handleTEXT, first_na...
                                                             ^
thungsnhugs=# CREATE TABLE uploadersOakland (id SERIAL PRIMARY KEY, online_handle TEXT, first_name TEXT, last_name TEXT, hood TEXT, city TEXT, country TEXT);
CREATE TABLE
thungsnhugs=# INSERT INTO uploadersoakland VALUES (1, "Brigidope", "THUG LORD", "SMOKE RUNNER", "scoakland", "oakland", "california", "thizzlamistan")
thungsnhugs-# SELECT * FROM uploadersoakland;
ERROR:  syntax error at or near "SELECT"
LINE 2: SELECT * FROM uploadersoakland;
        ^
thungsnhugs=# INSERT INTO uploadersoakland VALUES (1, "Brigidope", "THUG LORD", "SMOKE RUNNER", "scoakland", "oakland", "california", "thizzlamistan")
SELECT* FROM uploadersoakland;
ERROR:  syntax error at or near "SELECT"
LINE 2: SELECT* FROM uploadersoakland;
        ^
thungsnhugs=# select name from uploadersoakland;
ERROR:  column "name" does not exist
LINE 1: select name from uploadersoakland;
               ^
thungsnhugs=# select first_name from uploadersoakland;
 first_name
------------
(0 rows)

thungsnhugs=# INSERT INTO uploadersoakland VALUES (1, "Brigidope", "THUG LORD", "SMOKE RUNNER", "scoakland", "oakland", "california", "thizzlamistan");
ERROR:  column "Brigidope" does not exist
LINE 1: INSERT INTO uploadersoakland VALUES (1, "Brigidope", "THUG L...
                                                ^
thungsnhugs=# INSERT INTO uploadersoakland VALUES (id SERIAL PRIMARY KEY, online_handleTEXT, first_name TEXT, last_name TEXT, hood TEXT, city TEXT, country TEXT) VALUES (1, "Brigidope", "THUG LORD", "SMOKE RUNNER", "scoakland", "oakland", "california", "thizzlamistan");
ERROR:  syntax error at or near "SERIAL"
LINE 1: INSERT INTO uploadersoakland VALUES (id SERIAL PRIMARY KEY, ...
                                                ^
thungsnhugs=# \dt
                List of relations
 Schema |       Name       | Type  |    Owner
--------+------------------+-------+-------------
 public | uploadersoakland | table | djbrigidope
(1 row)

thungsnhugs=#
```
so apparently im having trouble getting my database together. initially i also thought writing a db to store something like "users" was the same as writing a database to store photos.

what photos do i want to store? nummyabidnith .

dont worry, nothing nefarious, just thugnificent shit like graffiti and kermit sipping tea memes.

in anycase till i figure this out. maybe ill work on hitting it fron the front. like the front end. like css ya big dummy.

### gitpush
3:30 -4:44 pm


5:22pm
finally worked my life out:

```
thungsnhugs=# insert into uploadersoakland (id, online_handle, first_name, last_name, hood, city, country) VALUES(1, 'brigidope', 'thug lord', 'smoke runner', 'scoakland', 'oakland', 'california');

INSERT 0 1

thungsnhugs=# select * from uploadersoakland; id | online_handle | first_name |  last_name   |   hood    |  city   |  country   ----+---------------+------------+--------------+-----------+---------+------------  1 | brigidope     | thug lord  | smoke runner | scoakland | oakland | california(1 row)thungsnhugs=#
```
```
thungsnhugs=# insert into uploadersoakland (id, online_handle, first_name, last_name, hood, city, country)
thungsnhugs-# VALUES(2, 'skizzo', 'lil sawed off', 'smoke runner', 'jingletown', 'oakland', 'california');
INSERT 0 1
thungsnhugs=#
```

im using iterm2. been having trouble with postgres. when i try to log in with psql it says the database named after my admin username isnt there. but when i open the postgres app it shows the db there. then i click on it and a terminal opens up with psql opened to the database that psql in iterm2 said wasnt there.

so i need to know how to close that instance of psql so i can open it in iterm 2. will figure out irl monday. or saturday. 
