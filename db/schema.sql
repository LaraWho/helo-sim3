CREATE TABLE helo_users (
    user_id SERIAL PRIMARY KEY,
    first_name character varying(120),
    last_name character varying(120),
    gender character varying(20),
    hair_colour character varying(20),
    eye_colour character varying(20),
    hobby character varying(120),
    birth_day integer,
    birth_month integer,
    birth_year integer,
    auth_id text,
    user_img text,
    is_friend character varying(10)
);


insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Flinn', 'Faughey', 'Male', 'Turquoise', 'Indigo', 'pretium', 26, 3, 1932, 'https://robohash.org/suntundepraesentium.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Margie', 'Stiell', 'Female', 'Orange', 'Green', 'et eros', 25, 9, 1985, 'https://robohash.org/commodirepellatvel.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Livvy', 'Tipler', 'Female', 'Yellow', 'Puce', 'congue diam', 1, 10, 1965, 'https://robohash.org/facilissapientesed.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Marybelle', 'Simoes', 'Female', 'Aquamarine', 'Crimson', 'nulla', 3, 4, 1956, 'https://robohash.org/delectusquaeratlaborum.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Rochell', 'Kielty', 'Female', 'Violet', 'Khaki', 'ut', 4, 12, 1961, 'https://robohash.org/sintdoloresquam.jpg?size=50x50&set=set1', true);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('James', 'Hanscomb', 'Male', 'Red', 'Violet', 'nisl duis', 20, 6, 1969, 'https://robohash.org/etomnisest.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Zandra', 'Pallent', 'Female', 'Pink', 'Purple', 'sit amet', 29, 5, 1943, 'https://robohash.org/estautut.jpg?size=50x50&set=set1', true);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Deni', 'Maccrae', 'Female', 'Green', 'Teal', 'gravida sem', 2, 1, 1999, 'https://robohash.org/distinctioducimusut.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Linnie', 'Hullah', 'Female', 'Khaki', 'Aquamarine', 'vestibulum sagittis', 27, 9, 1946, 'https://robohash.org/velquisaut.jpg?size=50x50&set=set1', true);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Kylie', 'Eggle', 'Male', 'Fuscia', 'Orange', 'suscipit', 20, 11, 1960, 'https://robohash.org/beataeinut.jpg?size=50x50&set=set1', true);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Deloria', 'Shrimplin', 'Female', 'Orange', 'Blue', 'turpis elementum ligula', 14, 3, 1975, 'https://robohash.org/ipsamarchitectosunt.jpg?size=50x50&set=set1', false);
insert into helo_users (first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_img, is_friend) values ('Crissy', 'Godding', 'Female', 'Teal', 'Aquamarine', 'in tempus', 3, 2, 1982, 'https://robohash.org/inventoreutaccusamus.jpg?size=50x50&set=set1', false);
