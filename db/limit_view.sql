select * from helo_users
where user_id != $1
order by user_id
limit 8
offset $2;