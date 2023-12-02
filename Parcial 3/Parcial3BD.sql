create database Parcial3

use Parcial3

drop table Header

SELECT * from Header

update Header
set h_img = '#formulario'
where h_texto = 'Formulario'


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

	i_titulo_img nvarchar(255),
	i_titulo nvarchar(255),



)

insert into Inicio(i_img, i_texto)
		    values('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png','Acerca de'),
				  (NULL,'Saber M�s')

select * from Inicio

drop table Personajes_Inicio

create table Personajes_Inicio(

	id_personaje nvarchar(255),
	titulo_p nvarchar(255),
	imagen_p nvarchar(255),
	boton_p nvarchar(255)

)

insert into Personajes_Inicio(id_personaje, titulo_p,imagen_p,boton_p)
		    values('1','Naruto','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/naruto-cara.png?raw=true','M�s'),
				  ('2','Sasuke','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/sasuke.png?raw=true','M�s'),
				  ('3','Kakashi','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/kakashi.png?raw=true','M�s'),
				  ('4','Gaara','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/gaara.png?raw=true','M�s')

select * from Personajes_Inicio

drop table Arcos

create table Arcos(

	id_arco nvarchar(255),
	titulo nvarchar(255),
	resumen_arco nvarchar(4000),
	imagen nvarchar(255),
	texto_boton nvarchar(255),
	imagen_titulo nvarchar(255)


)

insert into Arcos(id_arco, titulo, resumen_arco, imagen, texto_boton)
		    values('', '','','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/Arcos-memorables.png?raw=true',''),
				  ('1', 'Rock Lee vs Gaara','La pelea entre Rock Lee y Gaara es un ic�nico enfrentamiento en el mundo de Naruto. Esta batalla se lleva a cabo durante los Ex�menes Chunin, un importante torneo de combate ninja. La batalla es intensa, y Rock Lee demuestra una asombrosa destreza en el combate cuerpo a cuerpo. Sin embargo, Gaara muestra su control sobre la arena y su capacidad de defenderse con facilidad. Rock Lee decide abrir las puertas de chakra, una t�cnica arriesgada que aumenta su fuerza y velocidad a expensas de da�ar su propio cuerpo. A pesar de su valent�a y esfuerzo sobrehumano, Rock Lee no puede vencer a Gaara, quien finalmente muestra su verdadero poder al transformarse parcialmente en una criatura de arena. Gaara resulta ser un oponente extremadamente poderoso y peligroso.','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/rock-lee-gaara-gif.gif.gif?raw=true','Saber m�s'),
				  ('2', 'La muerte de un h�roe: Jiraiya','La muerte de Jiraiya es uno de los momentos m�s emotivos y significativos de la serie. Ocurre durante su infiltraci�n en la Aldea Oculta de la Lluvia para investigar a Pain, quien resulta ser uno de sus antiguos estudiantes, Nagato. Durante su enfrentamiento con Pain, Jiraiya descubre que este posee m�ltiples cuerpos con habilidades distintas, los cuales se denominan los "Seis Caminos de Pain". A pesar de luchar valientemente y descubrir el secreto detr�s del poder de Pain, Jiraiya es superado en combate. Antes de morir, utiliza sus �ltimas fuerzas para enviar un mensaje a Konoha, el cual es clave para descifrar la verdadera naturaleza de Pain y c�mo derrotarlo. Jiraiya muere sumergido en el agua, reflexionando sobre su vida y esperando haber hecho lo suficiente para guiar a Naruto hacia el camino correcto.','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/muerte-jiraiya.gif?raw=true','Saber m�s'),
				  ('3', 'Hora de la venganza de Sasuke hacia su hermano','Sasuke Uchiha hab�a vivido con el prop�sito de vengarse de su hermano Itachi desde que este �ltimo masacr� a su clan, dejando solo a Sasuke con vida. A lo largo de la batalla, Itachi demuestra habilidades avanzadas del Sharingan, incluyendo el Tsukuyomi y Amaterasu, mientras que Sasuke revela sus propias habilidades mejoradas, producto de a�os de entrenamiento y determinaci�n. A medida que la batalla progresa, se revela que Itachi est� gravemente enfermo, debilitando su capacidad para luchar. Al final, cuando Itachi se acerca a Sasuke y toca su frente, un gesto que sol�a hacer cuando eran ni�os, colapsa y muere. M�s tarde, se revela que Itachi no era el villano que Sasuke cre�a. Itachi hab�a llevado a cabo la masacre del clan Uchiha bajo �rdenes de Konoha para prevenir un golpe de estado, y todo lo que hizo posteriormente fue con el objetivo de proteger a Sasuke y al pueblo.','https://i.pinimg.com/originals/61/b5/c3/61b5c31b0ed70fc8aacd9eaa511c2949.gif','Saber m�s'),
				  ('4', 'La reanimaci�n de Madara Uchiha','Durante la Cuarta Guerra Mundial Shinobi, Madara Uchiha es revivido y pelea contra la Alianza Shinobi. �l solo enfrenta y supera a grandes contingentes de la Alianza, demostrando un poder inmenso al utilizar t�cnicas como el Susanoo, el Rinnegan y al invocar meteoritos del cielo. Durante sus enfrentamientos, pelea contra los cinco Kages, Naruto, y varios otros shinobis poderosos, demostrando ser uno de los enemigos m�s formidables de toda la serie.Finalmente, se revelan m�s detalles sobre el pasado de Madara, su relaci�n con Hashirama Senju, y c�mo sus visiones opuestas sobre la paz y la estabilidad llevaron a la fundaci�n de Konoha y eventualmente a una enemistad irreconciliable.','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/madara-pelea.gif?raw=true','Saber m�s')

insert into Arcos(id_arco, titulo, resumen_arco, imagen, texto_boton,imagen_titulo)
		   values('5', 'Arcos Memorables','','','','https://github.com/MoiB03/DesarrolloIV/blob/main/Parcial%203/Pagina/img/Arcos-memorables.png?raw=true')

select * from Arcos

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
					  (NULL,'Suscr�bete'),
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
				  (NULL,'Enlaces R�pidos'),
				  (NULL,'Inicio'),
				  (NULL,'Mejores Arcos'),
				  (NULL,'Openings'),
				  (NULL,'Formulario'),
				  ('https://i.gifer.com/YAS0.gif', '� 2023 Fanpage Naruto. Todos los derechos reservados.')
