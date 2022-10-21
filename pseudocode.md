    USER TABLE
    id: integer, primary key, not null, auto_increment,
    username: VARCHAR(255), not null, unique
    email: VARCHAR(255), not null, validation (email)
    password: VARCHAR(255), not null, minimum length 8


    TASK TABLE
    id: integer, primary key, not null, auto_increment,
    name: VARCHAR(255), not null,
    description: TEXT
    user_id: INTEGER, Foreign_Key User(ID)