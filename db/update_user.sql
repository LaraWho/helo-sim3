update helo_users
set first_name = $2, last_name = $3, gender = $4
where user_id = $1
returning *;