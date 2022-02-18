DROP TABLE IF EXISTS candles;

CREATE TABLE  candles(
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INTEGER DEFAULT 0,
    rating INTEGER DEFAULT 0,
    featured BOOLEAN,
    image TEXT
);
