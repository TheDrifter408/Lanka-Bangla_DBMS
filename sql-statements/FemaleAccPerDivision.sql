/*Number of female Accounts per Division*/
select permanent_city, COUNT(permanent_city) from client
where title = 'MS'
group by permanent_city;