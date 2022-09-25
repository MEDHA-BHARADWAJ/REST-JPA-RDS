CREATE TABLE SURVEY
(
    id            int not null auto_increment,
    firstName     varchar(255),
    lastName      varchar(255),
    streetAddress varchar(255),
    city          varchar(255),
    state         varchar(255),
    zip           varchar(255),
    phone         varchar(255),
    email         varchar(255),
    dateOfSurvey  date,
    liking        varchar(255),
    sourceOfUni   varchar(255),
    likelihood    varchar(255),
    PRIMARY KEY (id)
);