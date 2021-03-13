INSERT INTO `users`
    select t.*
    from (
        (SELECT  1 as user_id, 'Teaching is my passion!' as description, 'sampleuser1@gmail.com' as email, 'sampleuser1' as name, 'Bishan' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  2 as user_id, 'In need of a tutor!' as description, 'sampleuser2@gmail.com' as email, 'sampleuser2' as name, 'Tampines' as nearestmrt, 'STUDENT' as role)
        union all (SELECT  3 as user_id, 'Former SMU Dean of Information System' as description, 'sampleuser3@gmail.com' as email, 'Woodlands' as name, 'Bishan' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  4 as user_id, 'Currently looking for new students!' as description, 'sampleuser4@gmail.com' as email, 'Sentosa' as name, 'Bishan' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  5 as user_id, 'PSLE this year...' as description, 'sampleuser5@gmail.com' as email, 'sampleuser5' as name, 'Raffles place' as nearestmrt, 'STUDENT' as role)
        union all (SELECT  6 as user_id, 'School is boring...' as description, 'sampleuser6@gmail.com' as email, 'sampleuser6' as name, 'Serangoon' as nearestmrt, 'STUDENT' as role)
        union all (SELECT  7 as user_id, 'Vote top tutor of the year!' as description, 'sampleuser7@gmail.com' as email, 'sampleuser7' as name, 'Simei' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  8 as user_id, 'I will turn your Bs to As!' as description, 'sampleuser8@gmail.com' as email, 'sampleuser8' as name, 'Bedok' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  9 as user_id, 'Results guaranteed in a month!' as description, 'sampleuser9@gmail.com' as email, 'sampleuser9' as name, 'Hougang' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  10 as user_id, 'Have no fear, I am HERE!' as description, 'sampleuser10@gmail.com' as email, 'sampleuser10' as name, 'Jurong' as nearestmrt, 'TUTOR' as role)
        union all (SELECT  11 as user_id, 'Learning should be fun' as description, 'sampleuser11@gmail.com' as email, 'sampleuser11' as name, 'Bukit Timah' as nearestmrt, 'TUTOR' as role)
        ) t
    WHERE NOT EXISTS (SELECT * FROM `users`);

INSERT INTO `reviews`
    select t.*
    from (
        (SELECT 1 as review_id, 'Good!' as message, 5 as number_of_stars, 2 as student_id, 3 as tutor_id)
        union all (SELECT 2 as review_id, 'Bad!' as message, 1 as number_of_stars, 2 as student_id, 4 as tutor_id)
        union all (SELECT 3 as review_id, 'Caring Tutor!' as message, 4 as number_of_stars, 6 as student_id, 1 as tutor_id)
        union all (SELECT 4 as review_id, 'Highly Recommended!' as message, 5 as number_of_stars, 5 as student_id, 3 as tutor_id)
        union all (SELECT 5 as review_id, 'Got an A for English!' as message, 5 as number_of_stars, 5 as student_id, 1 as tutor_id)
        union all (SELECT 6 as review_id, 'Learning with tutor was fun!' as message, 4 as number_of_stars, 2 as student_id, 11 as tutor_id)
        union all (SELECT 7 as review_id, 'Truely a top tutor!' as message, 4 as number_of_stars, 6 as student_id, 7 as tutor_id)
        union all (SELECT 8 as review_id, 'Still got a B but learning was fun nonetheless' as message, 3 as number_of_stars, 5 as student_id, 8 as tutor_id)
        union all (SELECT 9 as review_id, 'Fun and caring tutor!' as message, 4 as number_of_stars, 5 as student_id, 10 as tutor_id)
        ) t
    WHERE NOT EXISTS (SELECT * FROM `reviews`);

INSERT INTO `timeslot`
    select t.*
    from (
        (SELECT 1 as timeslot_id, '1-1000' as timeslot)
        union all (SELECT 2 as timeslot_id, '1-1100' as timeslot)
        union all (SELECT 3 as timeslot_id, '1-1200' as timeslot)
        union all (SELECT 4 as timeslot_id, '1-1300' as timeslot)
        union all (SELECT 5 as timeslot_id, '1-1400' as timeslot)
        union all (SELECT 6 as timeslot_id, '1-1500' as timeslot)
        union all (SELECT 7 as timeslot_id, '1-1600' as timeslot)
        union all (SELECT 8 as timeslot_id, '1-1700' as timeslot)
        union all (SELECT 9 as timeslot_id, '1-1800' as timeslot)
        union all (SELECT 10 as timeslot_id, '1-1900' as timeslot)
        union all (SELECT 11 as timeslot_id, '1-2000' as timeslot)
        union all (SELECT 12 as timeslot_id, '1-2100' as timeslot)
        union all (SELECT 13 as timeslot_id, '1-2200' as timeslot)
        union all (SELECT 14 as timeslot_id, '2-1000' as timeslot)
        union all (SELECT 15 as timeslot_id, '2-1100' as timeslot)
        union all (SELECT 16 as timeslot_id, '2-1200' as timeslot)
        union all (SELECT 17 as timeslot_id, '2-1300' as timeslot)
        union all (SELECT 18 as timeslot_id, '2-1400' as timeslot)
        union all (SELECT 19 as timeslot_id, '2-1500' as timeslot)
        union all (SELECT 20 as timeslot_id, '2-1600' as timeslot)
        union all (SELECT 21 as timeslot_id, '2-1700' as timeslot)
        union all (SELECT 22 as timeslot_id, '2-1800' as timeslot)
        union all (SELECT 23 as timeslot_id, '2-1900' as timeslot)
        union all (SELECT 24 as timeslot_id, '2-2000' as timeslot)
        union all (SELECT 25 as timeslot_id, '2-2100' as timeslot)
        union all (SELECT 26 as timeslot_id, '2-2200' as timeslot)
        union all (SELECT 27 as timeslot_id, '3-1000' as timeslot)
        union all (SELECT 28 as timeslot_id, '3-1100' as timeslot)
        union all (SELECT 29 as timeslot_id, '3-1200' as timeslot)
        union all (SELECT 30 as timeslot_id, '3-1300' as timeslot)
        union all (SELECT 31 as timeslot_id, '3-1400' as timeslot)
        union all (SELECT 32 as timeslot_id, '3-1500' as timeslot)
        union all (SELECT 33 as timeslot_id, '3-1600' as timeslot)
        union all (SELECT 34 as timeslot_id, '3-1700' as timeslot)
        union all (SELECT 35 as timeslot_id, '3-1800' as timeslot)
        union all (SELECT 36 as timeslot_id, '3-1900' as timeslot)
        union all (SELECT 37 as timeslot_id, '3-2000' as timeslot)
        union all (SELECT 38 as timeslot_id, '3-2100' as timeslot)
        union all (SELECT 39 as timeslot_id, '3-2200' as timeslot)
        union all (SELECT 40 as timeslot_id, '4-1000' as timeslot)
        union all (SELECT 41 as timeslot_id, '4-1100' as timeslot)
        union all (SELECT 42 as timeslot_id, '4-1200' as timeslot)
        union all (SELECT 43 as timeslot_id, '4-1300' as timeslot)
        union all (SELECT 44 as timeslot_id, '4-1400' as timeslot)
        union all (SELECT 45 as timeslot_id, '4-1500' as timeslot)
        union all (SELECT 46 as timeslot_id, '4-1600' as timeslot)
        union all (SELECT 47 as timeslot_id, '4-1700' as timeslot)
        union all (SELECT 48 as timeslot_id, '4-1800' as timeslot)
        union all (SELECT 49 as timeslot_id, '4-1900' as timeslot)
        union all (SELECT 50 as timeslot_id, '4-2000' as timeslot)
        union all (SELECT 51 as timeslot_id, '4-2100' as timeslot)
        union all (SELECT 52 as timeslot_id, '4-2200' as timeslot)
        union all (SELECT 53 as timeslot_id, '5-1000' as timeslot)
        union all (SELECT 54 as timeslot_id, '5-1100' as timeslot)
        union all (SELECT 55 as timeslot_id, '5-1200' as timeslot)
        union all (SELECT 56 as timeslot_id, '5-1300' as timeslot)
        union all (SELECT 57 as timeslot_id, '5-1400' as timeslot)
        union all (SELECT 58 as timeslot_id, '5-1500' as timeslot)
        union all (SELECT 59 as timeslot_id, '5-1600' as timeslot)
        union all (SELECT 60 as timeslot_id, '5-1700' as timeslot)
        union all (SELECT 61 as timeslot_id, '5-1800' as timeslot)
        union all (SELECT 62 as timeslot_id, '5-1900' as timeslot)
        union all (SELECT 63 as timeslot_id, '5-2000' as timeslot)
        union all (SELECT 64 as timeslot_id, '5-2100' as timeslot)
        union all (SELECT 65 as timeslot_id, '5-2200' as timeslot)
        union all (SELECT 66 as timeslot_id, '6-1000' as timeslot)
        union all (SELECT 67 as timeslot_id, '6-1100' as timeslot)
        union all (SELECT 68 as timeslot_id, '6-1200' as timeslot)
        union all (SELECT 69 as timeslot_id, '6-1300' as timeslot)
        union all (SELECT 70 as timeslot_id, '6-1400' as timeslot)
        union all (SELECT 71 as timeslot_id, '6-1500' as timeslot)
        union all (SELECT 72 as timeslot_id, '6-1600' as timeslot)
        union all (SELECT 73 as timeslot_id, '6-1700' as timeslot)
        union all (SELECT 74 as timeslot_id, '6-1800' as timeslot)
        union all (SELECT 75 as timeslot_id, '6-1900' as timeslot)
        union all (SELECT 76 as timeslot_id, '6-2000' as timeslot)
        union all (SELECT 77 as timeslot_id, '6-2100' as timeslot)
        union all (SELECT 78 as timeslot_id, '6-2200' as timeslot)
        union all (SELECT 79 as timeslot_id, '7-1000' as timeslot)
        union all (SELECT 80 as timeslot_id, '7-1100' as timeslot)
        union all (SELECT 81 as timeslot_id, '7-1200' as timeslot)
        union all (SELECT 82 as timeslot_id, '7-1300' as timeslot)
        union all (SELECT 83 as timeslot_id, '7-1400' as timeslot)
        union all (SELECT 84 as timeslot_id, '7-1500' as timeslot)
        union all (SELECT 85 as timeslot_id, '7-1600' as timeslot)
        union all (SELECT 86 as timeslot_id, '7-1700' as timeslot)
        union all (SELECT 87 as timeslot_id, '7-1800' as timeslot)
        union all (SELECT 88 as timeslot_id, '7-1900' as timeslot)
        union all (SELECT 89 as timeslot_id, '7-2000' as timeslot)
        union all (SELECT 90 as timeslot_id, '7-2100' as timeslot)
        union all (SELECT 91 as timeslot_id, '7-2200' as timeslot)
        ) t;
    -- WHERE NOT EXISTS (SELECT * FROM 'timeslot');

INSERT INTO `requests`
    select t.*
    from (
        (SELECT 1 as request_id, 'Please get back ASAP!' as remarks,'1-1000' requested_timeslot, 2 as student_id, 10 as tutor_id)
        union all (SELECT 2 as request_id, 'Urgent!' as remarks, '1-1200' requested_timeslot, 4 as student_id, 11 as tutor_id)
        union all (SELECT 3 as request_id, '' as remarks, '1-1200' requested_timeslot, 6 as student_id, 11 as tutor_id)
        union all (SELECT 4 as request_id, 'Please call me at 98765432' as remarks, '5-1700' requested_timeslot, 2 as student_id, 8 as tutor_id)
        union all (SELECT 5 as request_id, '' as remarks, '6-1100' requested_timeslot, 6 as student_id, 9 as tutor_id)
        ) t;
    -- WHERE NOT EXISTS (SELECT * FROM 'requests');

INSERT INTO `usertimeslot`
    select t.*
    from (
        (SELECT 1 as user_timeslot_id, 'PENDING' as status, 2 as student_id, 1 as timeslot_id, 10 as tutor_id)
        union all (SELECT 2 as user_timeslot_id, 'PENDING' as status, 4 as student_id, 3 as timeslot_id, 11 as tutor_id)
        union all (SELECT 3 as user_timeslot_id, 'PENDING' as status, 6 as student_id, 3 as timeslot_id, 11 as tutor_id)
        union all (SELECT 4 as user_timeslot_id, 'PENDING' as status, 2 as student_id, 60 as timeslot_id, 8 as tutor_id)
        union all (SELECT 5 as user_timeslot_id, 'PENDING' as status, 6 as student_id, 67 as timeslot_id, 9 as tutor_id)
        union all (SELECT 6 as user_timeslot_id, 'ACCEPTED' as status, 6 as student_id, 89 as timeslot_id, 9 as tutor_id)
        union all (SELECT 7 as user_timeslot_id, 'ACCEPTED' as status, 2 as student_id, 70 as timeslot_id, 10 as tutor_id)
        union all (SELECT 8 as user_timeslot_id, 'ACCEPTED' as status, 4 as student_id, 30 as timeslot_id, 3 as tutor_id)
        union all (SELECT 9 as user_timeslot_id, 'ACCEPTED' as status, 4 as student_id, 35 as timeslot_id, 4 as tutor_id)
        ) t;
    -- WHERE NOT EXISTS (SELECT * FROM 'usertimeslot');