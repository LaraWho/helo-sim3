delete from helo_friends
where friend_id = $1 and user_id = $2
returning *;