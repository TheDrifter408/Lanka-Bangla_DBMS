/*Number of accounts per division*/
select branch, COUNT(branch) from client
group by branch;
