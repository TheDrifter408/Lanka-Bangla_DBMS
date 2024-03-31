/*Number of Male Accounts per Branch in a thana*/
select branch, COUNT(branch) from client
where title = 'MR'
group by branch;