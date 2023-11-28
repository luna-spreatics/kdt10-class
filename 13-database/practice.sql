-- 실습 1, 2
create table member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

desc member;

alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100);