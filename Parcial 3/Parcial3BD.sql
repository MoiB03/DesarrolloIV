create database Parcial3

use Parcial3

drop table Header

SELECT h_texto from Header

create table Header(

	h_img nvarchar(255),
	h_texto nvarchar(255)

)

insert into Header(h_img, h_texto)
		    values('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png','Inicio'),
				  (NULL,'Mejores Arcos'),
				  (NULL,'Openings'),
				  (NULL,'Formulario')

drop table Inicio

create table Inicio(

	i_img nvarchar(255),
	i_texto nvarchar(255)

)

insert into Inicio(i_img, i_texto)
		    values('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png','Acerca de'),
				  (NULL,'Saber Más')


drop table Personajes_Inicio

create table Personajes_Inicio(

	pi_img nvarchar(255),
	pi_texto nvarchar(255)

)

insert into Personajes_Inicio(pi_img, pi_texto)
		    values('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/naruto-cara.png?raw=true','Naruto'),
				  (NULL,'Más'),
				  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/sasuke.png?raw=true','Sasuke'),
				  (NULL,'Más'),
				  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/kakashi.png?raw=true','Kakashi'),
				  (NULL,'Más'),
				  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/gaara.png?raw=true','Gaara'),
				  (NULL,'Más')

drop table Arcos

create table Arcos(

	a_img nvarchar(255),
	a_texto nvarchar(4000)

)

insert into Arcos(a_img, a_texto)
		    values('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/Arcos-memorables.png?raw=true', NULL),
				  (NULL,'Rock Lee vs Gaara'),
				  (NULL,'La pelea entre Rock Lee y Gaara es un icónico enfrentamiento en el mundo de Naruto. Esta batalla se lleva a cabo durante los Exámenes Chunin, un importante torneo de combate ninja. La batalla es intensa, y Rock Lee demuestra una asombrosa destreza en el combate cuerpo a cuerpo. Sin embargo, Gaara muestra su control sobre la arena y su capacidad de defenderse con facilidad. Rock Lee decide abrir las puertas de chakra, una técnica arriesgada que aumenta su fuerza y velocidad a expensas de dañar su propio cuerpo. A pesar de su valentía y esfuerzo sobrehumano, Rock Lee no puede vencer a Gaara, quien finalmente muestra su verdadero poder al transformarse parcialmente en una criatura de arena. Gaara resulta ser un oponente extremadamente poderoso y peligroso.'),
				  (NULL,'Saber más'),
				  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/rock-lee-gaara-gif.gif.gif?raw=true', NULL),
				  (NULL,'La muerte de un héroe: Jiraiya'),
				  (NULL,'La muerte de Jiraiya es uno de los momentos más emotivos y significativos de la serie. Ocurre durante su infiltración en la Aldea Oculta de la Lluvia para investigar a Pain, quien resulta ser uno de sus antiguos estudiantes, Nagato. Durante su enfrentamiento con Pain, Jiraiya descubre que este posee múltiples cuerpos con habilidades distintas, los cuales se denominan los "Seis Caminos de Pain". A pesar de luchar valientemente y descubrir el secreto detrás del poder de Pain, Jiraiya es superado en combate. Antes de morir, utiliza sus últimas fuerzas para enviar un mensaje a Konoha, el cual es clave para descifrar la verdadera naturaleza de Pain y cómo derrotarlo. Jiraiya muere sumergido en el agua, reflexionando sobre su vida y esperando haber hecho lo suficiente para guiar a Naruto hacia el camino correcto.'),
				  (NULL,'Saber más'),
				  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/muerte-jiraiya.gif?raw=true', NULL),
				  (NULL,'Hora de la venganza de Sasuke hacia su hermano'),
				  (NULL,'Sasuke Uchiha había vivido con el propósito de vengarse de su hermano Itachi desde que este último masacró a su clan, dejando solo a Sasuke con vida. A lo largo de la batalla, Itachi demuestra habilidades avanzadas del Sharingan, incluyendo el Tsukuyomi y Amaterasu, mientras que Sasuke revela sus propias habilidades mejoradas, producto de años de entrenamiento y determinación. A medida que la batalla progresa, se revela que Itachi está gravemente enfermo, debilitando su capacidad para luchar. Al final, cuando Itachi se acerca a Sasuke y toca su frente, un gesto que solía hacer cuando eran niños, colapsa y muere. Más tarde, se revela que Itachi no era el villano que Sasuke creía. Itachi había llevado a cabo la masacre del clan Uchiha bajo órdenes de Konoha para prevenir un golpe de estado, y todo lo que hizo posteriormente fue con el objetivo de proteger a Sasuke y al pueblo.'),
				  (NULL,'Saber más'),
				  ('https://i.pinimg.com/originals/61/b5/c3/61b5c31b0ed70fc8aacd9eaa511c2949.gif', NULL),
				  (NULL,'La reanimación de Madara Uchiha'),
				  (NULL,'Durante la Cuarta Guerra Mundial Shinobi, Madara Uchiha es revivido y pelea contra la Alianza Shinobi. Él solo enfrenta y supera a grandes contingentes de la Alianza, demostrando un poder inmenso al utilizar técnicas como el Susanoo, el Rinnegan y al invocar meteoritos del cielo. Durante sus enfrentamientos, pelea contra los cinco Kages, Naruto, y varios otros shinobis poderosos, demostrando ser uno de los enemigos más formidables de toda la serie. Finalmente, se revelan más detalles sobre el pasado de Madara, su relación con Hashirama Senju, y cómo sus visiones opuestas sobre la paz y la estabilidad llevaron a la fundación de Konoha y eventualmente a una enemistad irreconciliable.'),
				  (NULL,'Saber más'),
				  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/madara-pelea.gif?raw=true', NULL)

drop table Openings

create table Openings(

	o_img nvarchar(255),
	o_texto nvarchar(255)

)

insert into Openings(o_img, o_texto)
			  values('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/mejores_openings.png?raw=true', NULL),
					('https://www.youtube.com/watch?v=aJRu5ltxXjc&pp=ygURYmx1ZSBiaXJkIG9wZW5pbmc%3D','Blue Bird: Opening 3'),
					('https://www.youtube.com/watch?v=vxvP9zSOL7s&pp=ygUYaGVybydzIGNvbWUgYmFjayBvcGVuaW5n','Heros Come Back: Opening 1'),
					('https://www.youtube.com/watch?v=SavhHnWla6c&t=40s&pp=ygUPU2lnbjogT3BlbmluZyA2','Sign: Opening 6'),
					('https://www.youtube.com/watch?v=4t__wczfpRI&list=PLTGXZPSNXuQF0TugWpvhWbOAAKmyl4xVQ&ab_channel=CrunchyrollDeutschland','Ver lista de openings'),
					('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/naruto-bailando.gif?raw=true',NULL)

drop table Formulario

create table Formulario(

	form_img nvarchar(255),
	form_texto nvarchar(255)

)

insert into	Formulario(form_img, form_texto)
				values('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/formulario.png?raw=true',NULL),
					  ('https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/img/gaara-formulario.png?raw=true',NULL),
					  (NULL,'Suscríbete'),
					  (NULL,'Nombre:'),
					  (NULL,'Email:'),
					  (NULL,'Mensaje:'),
					  (NULL,'Enviar')

drop table Footer

create table Footer(

	foot_img nvarchar(255),
	foot_texto nvarchar(255)

)


insert into Footer(foot_img, foot_texto)
			values('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png',NULL),
				  (NULL,'Enlaces Rápidos'),
				  (NULL,'Inicio'),
				  (NULL,'Mejores Arcos'),
				  (NULL,'Openings'),
				  (NULL,'Formulario'),
				  ('https://i.gifer.com/YAS0.gif', '© 2023 Fanpage Naruto. Todos los derechos reservados.')
