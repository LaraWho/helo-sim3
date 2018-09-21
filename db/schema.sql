CREATE TABLE helo_users (
    user_id SERIAL PRIMARY KEY,
    first_name character varying(120),
    last_name character varying(120),
    gender character varying(20),
    hair_colour character varying(20),
    eye_colour character varying(20),
    hobby character varying(120),
    birth_day integer,
    birth_month character varying(20),
    birth_year integer,
    auth_id text,
    user_img text
);


insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Flinn', 'Faughey', 'Male', 'Turquoise', 'Indigo', 'pretium', 26, 'March', 1932, 'https://robohash.org/suntundepraesentium.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Margie', 'Stiell', 'Female', 'Orange', 'Green', 'et eros', 25, 'May', 1985, 'https://robohash.org/commodirepellatvel.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Livvy', 'Tipler', 'Female', 'Yellow', 'Puce', 'congue diam', 1, 'June', 1965, 'https://robohash.org/facilissapientesed.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Marybelle', 'Simoes', 'Female', 'Aquamarine', 'Crimson', 'nulla', 3, 'April', 1956, 'https://robohash.org/delectusquaeratlaborum.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Rochell', 'Kielty', 'Female', 'Violet', 'Khaki', 'ut', 4, 'December', 1961, 'https://robohash.org/sintdoloresquam.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('James', 'Hanscomb', 'Male', 'Red', 'Violet', 'nisl duis', 20, 'June', 1969, 'https://robohash.org/etomnisest.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Zandra', 'Pallent', 'Female', 'Pink', 'Purple', 'sit amet', 29, 'May', 1943, 'https://robohash.org/estautut.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Deni', 'Maccrae', 'Female', 'Green', 'Teal', 'gravida sem', 2, 'January', 1999, 'https://robohash.org/distinctioducimusut.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Linnie', 'Hullah', 'Female', 'Khaki', 'Aquamarine', 'vestibulum sagittis', 27, 'September', 1946, 'https://robohash.org/velquisaut.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Kylie', 'Eggle', 'Male', 'Fuscia', 'Orange', 'suscipit', 20, 'November', 1960, 'https://robohash.org/beataeinut.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Deloria', 'Shrimplin', 'Female', 'Orange', 'Blue', 'turpis elementum ligula', 14, 'May', 1975, 'https://robohash.org/ipsamarchitectosunt.jpg?size=50x50&set=set1');
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img) values ('Crissy', 'Godding', 'Female', 'Teal', 'Aquamarine', 'in tempus', 3, 'May', 1982, 'https://robohash.org/inventoreutaccusamus.jpg?size=50x50&set=set1');

