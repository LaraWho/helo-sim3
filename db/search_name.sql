select * from helo_users
where first_name like $1
or last_name like $2;