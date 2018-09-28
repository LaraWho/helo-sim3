insert into helo_users (first_name, last_name, auth_id, user_img)
values ($1, $2, $3, $4)
returning *;