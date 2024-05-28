create table movies (
  id int primary key auto_increment not null,
  title varchar(255) not null,
  poster_path varchar(255) not null,
  realease_date date not null,
  vote_average int not null,
  vote_count int not null,
  price int not null,
  genre_ids varchar(255) not null,
  popularity int not null,
);
