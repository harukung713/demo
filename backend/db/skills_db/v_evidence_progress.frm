TYPE=VIEW
query=select `u`.`name_th` AS `evaluatee_name`,`d`.`name_th` AS `dept_name`,`p`.`buddhist_year` AS `buddhist_year`,`t`.`title_th` AS `topic_title`,`i`.`code` AS `indicator_code`,`i`.`name_th` AS `indicator_name`,count(`a`.`id`) AS `files_uploaded` from ((((((`skills_db`.`users` `u` join `skills_db`.`departments` `d` on(`d`.`id` = `u`.`department_id`)) join `skills_db`.`assignments` `s` on(`s`.`evaluatee_id` = `u`.`id`)) join `skills_db`.`evaluation_periods` `p` on(`p`.`id` = `s`.`period_id` and `p`.`is_active` = 1)) join `skills_db`.`indicators` `i` on(1 = 1)) join `skills_db`.`evaluation_topics` `t` on(`t`.`id` = `i`.`topic_id`)) left join `skills_db`.`attachments` `a` on(`a`.`indicator_id` = `i`.`id` and `a`.`evaluatee_id` = `u`.`id` and `a`.`period_id` = `p`.`id`)) where `u`.`role` = \'evaluatee\' group by `u`.`name_th`,`d`.`name_th`,`p`.`buddhist_year`,`t`.`title_th`,`i`.`code`,`i`.`name_th` order by `u`.`name_th`,`t`.`title_th`,`i`.`code`
md5=acbd95d0a22f1bfba1005d2319f13ec8
updatable=0
algorithm=0
definer_user=root
definer_host=%
suid=2
with_check_option=0
timestamp=0001766730580340352
create-version=2
source=SELECT\n  u.name_th AS evaluatee_name,\n  d.name_th AS dept_name,\n  p.buddhist_year,\n  t.title_th AS topic_title,\n  i.code AS indicator_code,\n  i.name_th AS indicator_name,\n  COUNT(a.id) AS files_uploaded\nFROM users u\nJOIN departments d ON d.id = u.department_id\nJOIN assignments s ON s.evaluatee_id = u.id\nJOIN evaluation_periods p ON p.id = s.period_id AND p.is_active = 1\nJOIN indicators i ON 1=1\nJOIN evaluation_topics t ON t.id = i.topic_id\nLEFT JOIN attachments a\n  ON a.indicator_id = i.id\n AND a.evaluatee_id = u.id\n AND a.period_id = p.id\nWHERE u.role = \'evaluatee\'\nGROUP BY u.name_th, d.name_th, p.buddhist_year, t.title_th, i.code, i.name_th\nORDER BY u.name_th, t.title_th, i.code
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_uca1400_ai_ci
view_body_utf8=select `u`.`name_th` AS `evaluatee_name`,`d`.`name_th` AS `dept_name`,`p`.`buddhist_year` AS `buddhist_year`,`t`.`title_th` AS `topic_title`,`i`.`code` AS `indicator_code`,`i`.`name_th` AS `indicator_name`,count(`a`.`id`) AS `files_uploaded` from ((((((`skills_db`.`users` `u` join `skills_db`.`departments` `d` on(`d`.`id` = `u`.`department_id`)) join `skills_db`.`assignments` `s` on(`s`.`evaluatee_id` = `u`.`id`)) join `skills_db`.`evaluation_periods` `p` on(`p`.`id` = `s`.`period_id` and `p`.`is_active` = 1)) join `skills_db`.`indicators` `i` on(1 = 1)) join `skills_db`.`evaluation_topics` `t` on(`t`.`id` = `i`.`topic_id`)) left join `skills_db`.`attachments` `a` on(`a`.`indicator_id` = `i`.`id` and `a`.`evaluatee_id` = `u`.`id` and `a`.`period_id` = `p`.`id`)) where `u`.`role` = \'evaluatee\' group by `u`.`name_th`,`d`.`name_th`,`p`.`buddhist_year`,`t`.`title_th`,`i`.`code`,`i`.`name_th` order by `u`.`name_th`,`t`.`title_th`,`i`.`code`
mariadb-version=110409
