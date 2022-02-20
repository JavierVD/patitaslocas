create database patitasfelices;
use patitasfelices;

CREATE TABLE especie (
  id_especie int(11) NOT NULL primary key,
  descripcion varchar(50) NOT NULL
);


CREATE TABLE raza (
  id_raza int(11) NOT NULL primary key,
  descripcion varchar(50)  NOT NULL,
  id_especie int(11)  NOT NULL,
  foreign key (id_especie) references especie(id_especie)
);


CREATE TABLE users (
  id int(11) UNSIGNED NOT NULL auto_increment primary key,
  name varchar(255)  NOT NULL,
  email varchar(255) NOT NULL,
  fullaccess enum('yes','no')  DEFAULT NULL,
  email_verified_at timestamp NULL DEFAULT NULL,
  password varchar(255)  NOT NULL,
  birthday date not null,
  lastConnection date not null, 
  remember_token varchar(100)  DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL
);

Create table producto(
	id_producto  int(11) not null primary key auto_increment,
	nombre varchar(100) not null,
	descripcion varchar(254) not null,
	existencia int,
	animal_uso varchar(200),
	tipoProducto varchar(100),
	foreign key (animal_uso) references especie(id_especie)
);

create table servicio(
	id_servicio int(11) not null primary key auto_increment,
	nombre varchar(100) not null,
	descripcion varchar(254) not null
);


create table venta(
	id_usuario int(11) not null,
	id_producto int(11) not null,
	fecha datetime not null,
	precioventa decimal not null,
	foreign key (id_usuario) references users(id),
	foreign key (id_producto) references  producto(id_producto)
);

create table contrato(
	id_cliente int(11) not null, 
	id_servicio int(11) not null,
	fechacontrato datetime not null
	foreign key (id_cliente) references users(id),
	foreign key (id_servicio) references producto(id_producto),
);

CREATE TABLE mascota (
  id_mascota int(11) NOT NULL primary key,
  nombre varchar(30)  NOT NULL,
  id_especie int(11) NOT NULL,
  id_raza int(11) NOT NULL,
  peso varchar(8)  NOT NULL,
  estatura varchar(8) NOT NULL,
  foto mediumtext  NOT NULL,
  fechaDes datetime DEFAULT NULL,
  failed_at timestamp NOT NULL DEFAULT current_timestamp(),
  foreign key (id_raza) references raza(id_raza),
  foreign key (id_especie) references especie(id_especie)
);

CREATE TABLE adopcion (
  id_adopcion int(11) NOT NULL primary key,
  fecha datetime NOT NULL,
  aprobado varchar(10) DEFAULT NULL,
  id_usuario int(11) unsigned NOT NULL,
  id_mascota int(11) NOT NULL,
  foreign key (id_usuario) references users(id),
  foreign key (id_mascota) references mascota(id_mascota)
);

CREATE TABLE denuncia (
  folio int(11) NOT NULL primary key,
  nombrecom varchar(200) NOT NULL,
  id_usuario int(11) unsigned not null,
  email varchar(200)  NOT NULL,
  Dden varchar(500)  NOT NULL,
  foreign key (id_usuario) references users(id)
);

INSERT INTO raza (id_raza, descripcion, id_especie) VALUES
('1', 'Chihuahueño', '1'),
('10', 'Blanco', '7'),
('11', 'Puerquito granjero', '4'),
('12', 'Egipcio', '2'),
('13', 'Persa', '2'),
('14', 'Peruano', '5'),
('15', 'Americano', '5'),
('16', 'Andaluz', '3'),
('17', 'Brahma', '8'),
('18', 'Crested', '7'),
('19', 'Choroy', '6'),
('2', 'Shnauser', '1'),
('20', 'Miniatura', '4'),
('3', 'Pastor alemán', '1'),
('4', 'Salchicha', '1'),
('5', 'Siamés', '2'),
('6', 'Caballo Frison ', '3'),
('7', 'Gallo de granja ', '8'),
('8', 'Común', '5'),
('9', 'Loro viejo ', '6');
INSERT INTO especie (id_especie, descripcion) VALUES
('1', 'Canis Lupus Familiaris'),
('2', 'Felis Catus'),
('3', 'Equus Caballus'),
('4', 'Sus Scrofa Domestica'),
('5', 'Cavia Porcellus'),
('6', 'Psittacoidea'),
('7', 'Anas platyrhynchos domesticus'),
('8', 'Gallus Domesticus');

INSERT INTO mascota (id_mascota, nombre, id_especie, id_raza, peso, estatura, foto, fechaDes, failed_at) VALUES
(3, 'Timy', '1', '3', '34000', '56', '1623194928.jpeg', NULL, '2021-06-08 23:28:48'),
(4, 'Michito', '2', '5', '1200', '22', '1623194963.jpeg', NULL, '2021-06-08 23:29:23'),
(5, 'El vengador', '8', '7', '1209', '11', '1623195001.jpeg', '2021-06-09 03:20:53', '2021-06-08 23:30:01'),
(6, 'China', '3', '6', '120000', '5000', '1623195040.jpeg', NULL, '2021-06-08 23:30:40'),
(7, 'Gordo', '5', '8', '123', '33', '1623195087.jpeg', '2021-06-09 02:53:57', '2021-06-08 23:31:27'),
(8, 'Miss Piggy', '4', '20', '1000', '140', '1623203605.jpeg', NULL, '2021-06-09 01:53:25'),
(10, 'Polololo', '2', '5', '1000', '140', '1638578837.jpeg', NULL, '2021-12-04 00:47:17');

CREATE TABLE migrations (
  id int(10) UNSIGNED NOT NULL,
  migration varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  batch int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO migrations (id, migration, batch) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2021_03_16_192107_create_raza', 1),
(4, '2021_03_16_192108_create_especie', 1),
(5, '2021_03_16_192109_create_mascota', 1),
(6, '2021_03_16_192110_create_usuario', 1),
(7, '2021_03_16_192111_create_adopcion', 1),
(8, '2021_03_16_192221_create_cita', 1),
(9, '2021_03_16_192229_create_denuncia', 1),
(10, '2021_03_16_192338_create_voluntario', 1);

CREATE TABLE password_resets (
  email varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  token varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  created_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO password_resets (email, token, created_at) VALUES
('crashding@gmail.com', '$2y$10$dNwL9TE6AAvVyKLKlOQkYOemRHe5ClC2wSxq74VlAotTKCuiyD7VO', '2021-06-10 21:30:04');




INSERT INTO users (id, name, email, fullaccess, email_verified_at, password, remember_token, created_at, updated_at) VALUES
(5, 'Javier Muñoz', 'crashding@gmail.com', 'yes', NULL, '$2y$10$evnLz9/Pm9cyB2C6NQjgxuZwEeDpcUUGv1M3PxphI8pcIF7sOXhia', 'ioqBNVkcvQ5L9lJhU5dXdOyZlrIk4wkz8X4x4W9rqbGmdldS8c0LVd5vUJhz', '2021-09-01 06:05:42', '2021-09-01 06:05:42'),
(6, 'Javier', 'javier@gmail.com', 'no', NULL, '$2y$10$NXy54Ss2hI5vNwHoOeKodu.5Ie4QC9J0AaCgYb5Y6Pbq1xk2/J31q', NULL, '2021-12-01 10:50:38', '2021-12-01 10:50:38');

