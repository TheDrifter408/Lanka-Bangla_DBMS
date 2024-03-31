/*Number of Male Accounts per Division*/
select permanent_city, COUNT(permanent_city) from client
where title = 'MR'
group by permanent_city;