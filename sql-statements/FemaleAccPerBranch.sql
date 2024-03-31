/*Number of Female Accounts per branch*/
SELECT branch, COUNT(branch) from client
WHERE title = "MS"
group by branch;