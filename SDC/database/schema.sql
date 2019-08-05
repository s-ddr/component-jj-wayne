create table Product_Info (
  id serial primary key,
  product_name VARCHAR,
  image_default VARCHAR,
  images VARCHAR,
  colors_url VARCHAR,
  colors_images VARCHAR,
  price integer,
  gallery VARCHAR
);

create table Types (
  id serial primary key,
  product_name VARCHAR,
  -- product_name VARCHAR references Product_Info(product_name),
  types VARCHAR
);
  -- foreign key (product_name) references Product_Info(product_name)

create table Color (
  id serial primary key,
  product_name VARCHAR,
  -- product_name VARCHAR references Product_Info(product_name),
  color_name VARCHAR
  -- foreign key (product_name) references Product_Info(product_name)
);

-- -- DO NOT FORGET THE DAMN SEMI COLON

/*
\copy product_info(id,product_name, image_default, images, colors_url, colors_images, price, gallery) from './product2.csv' (DELIMITER("|"));
*/