update helo_users
set first_name = $1, 
    last_name = $2, 
    gender = $3, 
    hair_colour = $4, 
    eye_colour = $5, 
    hobby = $6, 
    birth_day = $7, 
    birth_month = $8, 
    birth_year = $9
where user_id = $10;

-- select * from helo_users 
-- where user_id = $10;